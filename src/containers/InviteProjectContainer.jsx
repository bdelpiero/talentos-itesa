import React, { useState, useEffect } from "react";
import InviteProject from "../components/InviteProject";
import { db } from "../../firebase/firebase";
import CheckCircle from "../../views/check.svg";
import { Modal, Card, Form } from "antd";

function addCuotas(cuotas, user, project) {
  const batch = db.batch();
  cuotas.forEach((cuota, i) => {
    if (!cuota.monto) return;
    const cuotaRef = db.collection("payments").doc();
    const newDate = cuota.fecha.split("/").reverse().join("-");
    batch.set(cuotaRef, {
      fecha: newDate,
      monto: cuota.monto,
      userId: user.id,
      projectId: project.id,
      factura: "",
      comprobantePago: "",
      state: "pending",
      projectName: project.name,
      cuota: "CUOTA " + (i + 1),
      loadedF: false,
      paymentId: cuotaRef.id,
      proyectoAceptado: false
    });
  });

  return batch
    .commit()
    .then(() => console.log("cuotas cargadas exitosamente"))
    .catch((err) => console.log("error al cargar cuotas", err));
}

function InviteProjectContainer({ proyecto }) {
  const [error, setError] = useState(false)
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
    });
    return () => unsuscribe();
  }, []);

  const handleChange = (e) => {
    setAsignData({
      ...asignData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUsers = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleCuotas = (value, name, nCuota) => {
    setCuotas({
      ...cuotas,
      [nCuota]: { ...cuotas[nCuota], [name]: value },
    });
  };

  async function handleFinish() {
    
    const cuotasDB = Object.values(cuotas);
    const getUser = users.filter((user) => user.id == selectedUser)[0];
    const usersProject = proyecto.users
      ? [...proyecto.users, selectedUser]
      : [selectedUser];
    addCuotas(cuotasDB, getUser, proyecto);

    const existe = await db.collection("projects").doc(proyecto.id).collection("invitedUser").doc(selectedUser).get().then((doc)=>{
      if(doc.exists) return true
      else return false
    })
    if(existe) return setError(true)
    setError(false)
    closeModal();
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
        form.resetFields();
        Modal.success({
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
          content: (<h1>¡Perfil Invitado!</h1>),
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
      error={error}
    />
  );
}

export default InviteProjectContainer;
