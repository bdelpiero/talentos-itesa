import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase/firebase";
import AddPayment from "../components/AddPayment";
import { Modal, Form } from "antd";
import CheckCircle from "../../views/check.svg";

function AddPaymentContainer({ pendingPayments }) {
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedProject, setSelectedProject] = useState("");
  const [cuota, setCuota] = useState({});
  const [fileUrl, setFileUrl] = useState("");
  const [form] = Form.useForm();

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  async function success() {
    closeModal();
    const file = fileUrl.file.originFileObj;
    const storageRef = storage.ref();
    const task = storageRef.child(`comprobantesDePago/${fileUrl.file.name}`);
    await task.put(file);
    await task.getDownloadURL().then((downloadUrl) => {
      console.log("ESTO ES CUOTA ", cuota);
      db.collection("payments")
        .doc(cuota.id)
        .update({
          comprobantePago: downloadUrl,
          state: "completed",
        })
        .then(() => {
          form.resetFields();
          console.log("Pago cargado correctamente!");
        })
        .then(() => {
          Modal.success({
            bodyStyle: {
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            },
            content: "¡Pago ingresado!",
            centered: "true",
            okText: "VOLVER",
            icon: <img src={CheckCircle} className="icono-sider" />,
            okButtonProps: {
              style: {
                backgroundColor: "#9e39ff",
                border: "none",
                borderRadius: "20px",
              },
            },
          });
        });
    });
  }

  return (
    <AddPayment
      success={success}
      modal={modal}
      openModal={openModal}
      closeModal={closeModal}
      form={form}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      selectedProject={selectedProject}
      setSelectedProject={setSelectedProject}
      fileUrl={fileUrl}
      setFileUrl={setFileUrl}
      cuota={cuota}
      setCuota={setCuota}
      pendingPayments={pendingPayments}
    />
  );
}

export default AddPaymentContainer;
