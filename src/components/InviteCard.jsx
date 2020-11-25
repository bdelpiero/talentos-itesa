import React from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  UserOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import UserLogo from "../../views/man.svg";
import { Modal, Button, Card } from "antd";
function InviteCard({ handleChange, closeModal, success, openModal, modal }) {
  return (
    <div className="Modal">
      <Card className="admin-cards" onClick={openModal}>
        <UserLogo className="icono-sider" />
        <h3 style={{ color: "#9e39ff" }}>Invitar perfiles</h3>
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
        <h2>Invitar Usuario</h2>
        <form action="">
          <input onChange={handleChange} type="text" />
        </form>
      </Modal>
    </div>
  );
}

export default InviteCard;
