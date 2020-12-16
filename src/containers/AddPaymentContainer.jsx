import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase/firebase";
import AddPayment from "../components/AddPayment";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Modal, Form } from "antd";

function NewProjectContainer() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedProject, setSelectedProject] = useState("");
  const [cuota, setCuota] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const unsuscribe = db.collection("users").onSnapshot((users) => {
      setUsers(
        users.docs.map((users) => {
          return users.data();
        })
      );
    });
    return () => unsuscribe();
  }, []);

  useEffect(() => {
    let desuscribir = () => {};
    if (selectedUser.email)
      desuscribir = db
        .collectionGroup("invitedUser")
        .where("email", "==", selectedUser.email)
        .onSnapshot((projects) => {
          setProjects(
            projects.docs.map((project) => {
              return project.data();
            })
          );
        });
    return () => desuscribir();
  }, [selectedUser]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleCuota = (value) => {
    setCuota(value);
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
        db.collection("payments")
          .where("projectId", "==", selectedProject)
          .where("cuota", "==", cuota)
          .where("userId", "==", selectedUser.id)
          .get()
          .then((doc) => {
            const pago = doc.docs[0].id;
            db.collection("payments").doc(pago).update({
              comprobantePago: downloadUrl,
            });
          });
      })
      .then(() => {
        form.resetFields();
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
          icon: <CheckCircleOutlined style={{ color: "#9e39ff" }} />,
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
    <AddPayment
      status={status}
      closeModal={closeModal}
      success={success}
      openModal={openModal}
      modal={modal}
      form={form}
      users={users}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      setSelectedProject={setSelectedProject}
      selectedProject={selectedProject}
      projects={projects}
      fileUrl={fileUrl}
      setFileUrl={setFileUrl}
      // handlePayment={handlePayment}
      handleCuota={handleCuota}
    />
  );
}

export default NewProjectContainer;
