import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import Logo from "../../views/man.svg";
import { Modal, Button, Card } from "antd";

function InviteCard({ handleChange, closeModal, success, openModal, modal }) {
  return (
    <div className="Modal">
      <Card className="admin-cards" onClick={openModal}>
          <img src={Logo} className="icono-sider"/>
        <div className="admin-button">
          <h4 style={{ color: "#9e39ff" }}>Invitar perfiles</h4>
        </div>
      </Card>

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
        <form action="">
          <input onChange={handleChange} type="text" />
        </form>
      </Modal>
    </div>
  );
}

export default InviteCard;
