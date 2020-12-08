import React, { useState, useEffect } from "react";
import InviteProject from "../components/InviteProject";
import { db } from "../../firebase/firebase";

import CheckCircle from "../../views/check.svg";
import { Modal, Card } from "antd";

function InviteProjectContainer({ proyecto }) {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [asignData, setAsignData] = useState({
    selectedUser:"",
    plazos:[],
    servicios:"",
    cuota1:{
      fecha:[],
      monto: 0
    },
    cuota2:{
      fecha:[],
      monto: 0
    },
    cuota3:{
      fecha:[],
      monto: 0
    },
    cuota4:{
      fecha:[],
      monto: 0
    },
  })

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

  const handleChange = (e)=>{
    setAsignData({
      ...asignData,
      [e.target.name]: e.target.value,
    });
  }

  const handleMonto = (e)=>{
    setAsignData({
      ...asignData,
      [e.target.name] : {...asignData[e.target.name], monto : e.target.value } ,
    });
    console.log("aca esta asign data ", asignData)
  }



  // db.collection('projects').doc(project.id).collection("invitedUser").doc("id del usuario").set()

  function handleFinish() {
    closeModal();
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
      })
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
              <h1>¡Perfil Invitado!</h1>
            </Card>
          ),
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
    <InviteProject
      className="modal-outside"
      handleChange={handleChange}
      handleMonto = {handleMonto}
      closeModal={closeModal}
      // success={success}
      openModal={openModal}
      modal={modal}
      users={users}
      handleFinish={handleFinish}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      asignData={asignData}
      setAsignData={setAsignData}
    />
  );
}

export default InviteProjectContainer;
