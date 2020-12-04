import React, { useState, useEffect } from "react";
import InviteProject from "../components/InviteProject";
import { db } from "../../firebase/firebase";

import CheckCircle from "../../views/check.svg";
import { Modal, Card } from "antd";

function InviteProjectContainer({ proyecto }) {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  /*   const handleChange = (e) => {
    setProject(e.target.value);
  }; */
  /*  useEffect(() => {
    db.collection("projects")
      .get()
      .then((projects) => {
        setProjects(projects.docs);
      });
  }, []); */
  useEffect(() => {
    db.collection("users")
      .get()
      .then((users) => {
        setUsers(
          users.docs.map((users) => {
            return users.data();
          })
        );
      });
  }, []);

  function handleFinish() {
    const usersProject = proyecto.users
      ? [...proyecto.users, selectedUser]
      : [selectedUser];
    db.collection("projects")
      .doc(proyecto.id)
      .update({ users: usersProject })
      .then(() => {
        db.collection("users")
          .doc(selectedUser)
          .update({ projectInvited: proyecto.id });
      });
  }

  function success() {
    closeModal();
    db.collection("users")
      .doc(`${email}`) // sobre el id del usuario
      .set({ email: email }) // deberia agregar el id del project
      .then(() => {
        Modal.success({
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
          content: (
            <Card className="invite_msg" onClick={openModal}>
              <h1>¡Solicitud Enviada!</h1>
              <h4> El perfil podrá crear su cuenta desde su email</h4>
            </Card>
          ),
          centered: "true",
          okText: "VOLVER",
          icon: <CheckCircle style={{ color: "#9e39ff" }} />,
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
    <InviteProject
      className="modal-outside"
      /*  handleChange={handleChange} */
      closeModal={closeModal}
      success={success}
      openModal={openModal}
      modal={modal}
      users={users}
      handleFinish={handleFinish}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
    />
  );
}

export default InviteProjectContainer;
