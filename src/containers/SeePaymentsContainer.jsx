import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase/firebase";
import SeePayments from "../components/SeePayments";
import { Modal, Form } from "antd";
import CheckCircle from "../../views/check.svg";

function SeePaymentsContainer({ currentUser, project }) {
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const [myPayments, setMyPayments] = useState([])

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const unsuscribe = db
      .collection("payments")
      .where("userId","==",currentUser.id)
      .onSnapshot((querySnap) => {
        let arr = [];
        querySnap.forEach((doc) => {
          arr = [...arr, doc.data()];
        });
        setMyPayments(arr)
      });
      console.log("RECEIVED PAYMENTS",myPayments)
      return ()=>unsuscribe()
  },[currentUser]);


  // async function success() {
  //   closeModal();
  //   const file = fileUrl.file.originFileObj;
  //   const storageRef = storage.ref();
  //   const task = storageRef.child(`comprobantesDePago/${fileUrl.file.name}`);
  //   await task.put(file);
  //   await task.getDownloadURL().then((downloadUrl) => {
  //     console.log("ESTO ES CUOTA ", cuota);
  //     db.collection("payments")
  //       .doc(cuota.id)
  //       .update({
  //         comprobantePago: downloadUrl,
  //         state: "completed",
  //       })
  //       .then(() => {
  //         form.resetFields();
  //         console.log("Pago cargado correctamente!");
  //       })
  //       .then(() => {
  //         Modal.success({
  //           bodyStyle: {
  //             display: "flex",
  //             alignItems: "center",
  //             flexDirection: "column",
  //             justifyContent: "center",
  //           },
  //           content: "¡Pago ingresado!",
  //           centered: "true",
  //           okText: "VOLVER",
  //           icon: <img src={CheckCircle} className="icono-sider" />,
  //           okButtonProps: {
  //             style: {
  //               backgroundColor: "#9e39ff",
  //               border: "none",
  //               borderRadius: "20px",
  //             },
  //           },
  //         });
  //       });
  //   });
  // }

  return (
    <SeePayments
      // success={success}
      modal={modal}
      openModal={openModal}
      closeModal={closeModal}
      form={form}
      myPayments={myPayments}
      // pendingPayments={pendingPayments}
    />
  );
}

export default SeePaymentsContainer;
