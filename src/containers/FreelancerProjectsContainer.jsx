import React, { useState, useEffect } from "react";
import FreelancerProjects from "../components/FreelancerProjects";
import { db } from "../../firebase/firebase";
import { authUser } from "../../firebase/auth";
import CheckCircle from "../../views/check.svg";
import { Modal, Card } from "antd";
import { useRecoilState } from "recoil";
import { user, projectInvited } from "../atoms/index";

function FreelancerProjectsContainer() {
  const { signup } = authUser();
  const [modal, setModal] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [acceptedProjects, setAcceptedProjects] = useState([])

  useEffect(() => {
    let invitaciones=db.collectionGroup("invitedUser").where('email', '==' ,currentUser.email)
    invitaciones.onSnapshot((projects) => {
      const newInvitations=[]
      projects.forEach((doc)=>{
        newInvitations.push(doc.data()) // llena con los proyectos -> con status:"pending"
      })
      setAcceptedProjects(newInvitations.filter((project)=> project.status !== "pending"))
    })
    // let observer = invitaciones.onSnapshot((cambios)=>{
    //   console.log('aqui recivio cambios las invitaciones')
    //   const newInvitations=[]
    //       cambios.forEach((doc)=>{
    //         newInvitations.push(doc.data())
    //       })
    //       setAcceptedProjects({
    //         invited:newInvitations,
    //         observer
    //       })
    // })
  }, [currentUser]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  function success() {
    closeModal();
    db.collection("invites")
      .doc(`${email}`)
      .set({ email: email })
      .then(() => {
        Modal.success({
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
          content: (
            <Card className='invite_msg' onClick={openModal}>
              <h1>¡Solicitud Enviada!</h1>
              <h4> El perfil podrá crear su cuenta desde su email</h4>
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
    <FreelancerProjects
      className='modal-outside'
      handleChange={handleChange}
      acceptedProjects={acceptedProjects}
      closeModal={closeModal}
      success={success}
      openModal={openModal}
      modal={modal}
      currentUser={currentUser}
    />
  );
}

export default FreelancerProjectsContainer;
