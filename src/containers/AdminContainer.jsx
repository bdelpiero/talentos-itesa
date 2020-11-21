import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAdmin } from "../atoms";
import { db } from "../../firebase/firebase";
import { authUser } from "../../auth/auth";
import InviteComponent from "../components/InviteComponent";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import Form from "antd/lib/form/Form";
function AdminContainer() {
  const { signup } = authUser();
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const invite = () => {
    closeModal();
    openModalOk();
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  function success() {
    closeModal();
    db.collection("invites")
      .add({
        email,
      })
      .then(() => {
        Modal.success({
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
          content: "Solicitud Enviada!",
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
    <div className="Modal">
      <Button type="primary" onClick={openModal}>
        Invitar USUARUI LOGO
      </Button>
      <Modal
        title="Modal invite"
        visible={modal}
        okText="Invitar"
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{
          style: { backgroundColor: "#9e39ff", border: "none" },
          shape: "round",
        }}
        onCancel={closeModal}
        onOk={success}
        closeIcon={<CloseCircleOutlined style={{ color: "#9e39ff" }} />}
        bodyStyle={{ color: "#9e39ff" }}
      >
        <h2>Invitar Usuario</h2>
        <form action="">
          <input onChange={handleChange} type="text" />
        </form>
      </Modal>
    </div>
  );
}

export default AdminContainer;
