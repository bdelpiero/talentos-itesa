import React, { useState, useEffect } from "react";
import InviteProject from "../components/InviteProject";
import { db } from "../../firebase/firebase";
import CheckCircle from "../../views/check.svg";
import { Modal, Card, Form } from "antd";
import { ProjectOutlined } from "@ant-design/icons";

function InviteProjectContainer({ proyecto, boton}) {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [form] = Form.useForm();
  const [asignData, setAsignData] = useState({
    plazos: [],
    status: "pending",
    servicios: "",
  });
  const [cuotas, setCuotas] = useState({
    cuota1: {
      fecha: [],
      monto: 0,
    },
    cuota2: {
      fecha: [],
      monto: 0,
    },
    cuota3: {
      fecha: [],
      monto: 0,
    },
    cuota4: {
      fecha: [],
      monto: 0,
    },
  });

  

  // function onChange(e) {
  //   setCurrentUsers(
  //     allUsers.filter((user) => {
  //       if (user.name.toLowerCase().match(e.target.value.toLowerCase()))
  //         return user.name.toLowerCase().match(e.target.value.toLowerCase());
  //     })
  //   );
  // }

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const unsuscribe = db.collection("users").onSnapshot((users) => {
      setUsers(
        users.docs.map((users) => {
          return users.data();
        })
      );
    })
    return () => unsuscribe();
  }, []);

  const handleChange = (e) => {
    setAsignData({
      ...asignData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUsers = (e)=>{
    setSelectedUser(e.target.value)
  }

  const handleCuotas = (value, name, nCuota) => {
    setCuotas({
      ...cuotas,
      [nCuota]: { ...cuotas[nCuota], [name]: value },
    });
    console.log("aca esta cuotas---", cuotas);
  };

  function handleFinish() {
    closeModal();
    const cuotasDB = Object.values(cuotas);
    const getUser = users.filter((user) => user.id == selectedUser)[0];
    const usersProject = proyecto.users
      ? [...proyecto.users, selectedUser]
      : [selectedUser];
    db.collection("projects")
      .doc(proyecto.id)
      .collection("invitedUser")
      .doc(selectedUser)
      .set({
        ...asignData,
        ...getUser,
        projectId: proyecto.id,
        duracion: proyecto.term,
        proyecto: proyecto.name,
        cuotasDB,
      })
      .then(() => {
        db.collection("users")
          .doc(selectedUser)
          .update({ projectInvited: proyecto.id });
      })
      .then(() => {
        form.resetFields()
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
      handleCuotas={handleCuotas}
      cuotas={cuotas}
      closeModal={closeModal}
      openModal={openModal}
      modal={modal}
      users={users}
      handleFinish={handleFinish}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      asignData={asignData}
      setAsignData={setAsignData}
      form={form}
      proyecto={proyecto}
      handleUsers={handleUsers}
    />
  );
}

export default InviteProjectContainer;
