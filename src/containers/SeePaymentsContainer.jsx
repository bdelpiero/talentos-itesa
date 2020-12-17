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

  console.log(project,"esto llega como project")
  useEffect(() => {
    const unsuscribe = db
      .collection("payments")
      .where("userId","==",currentUser.id)
      .where("projectId","==",project.projectId)
      .onSnapshot((querySnap) => {
        let arr = [];
        querySnap.forEach((doc) => {
          arr = [...arr, doc.data()];
        });
        setMyPayments(arr)
      });
      return ()=>unsuscribe()
  },[currentUser]);

  return (
    <SeePayments
      // success={success}
      modal={modal}
      openModal={openModal}
      closeModal={closeModal}
      form={form}
      myPayments={myPayments}
    />
  );
}

export default SeePaymentsContainer;
