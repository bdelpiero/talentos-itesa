import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase/firebase";
import AddSinglePayment from "../components/AddSinglePayment";
import { Modal, Form } from "antd";
import CheckCircle from "../../views/check.svg";

function AddSinglePaymentContainer({ payment }) {
  const [modal, setModal] = useState(false);
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
    await task
      .getDownloadURL()
      .then((downloadUrl) => {
        db.collection("payments").doc(payment.paymentId)
        .update({
          comprobantePago: downloadUrl,
          state: "completed"
        })
      })
      .then(() => {
        form.resetFields();
        console.log("Pago Cargado!");
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
              borderRadius: "10px",
            },
          },
        });
      });
  }

  return (
    <AddSinglePayment
      closeModal={closeModal}
      success={success}
      openModal={openModal}
      modal={modal}
      form={form}
      fileUrl={fileUrl}
      setFileUrl={setFileUrl}
    />
  );
}

export default AddSinglePaymentContainer;
