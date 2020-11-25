import React from "react";
import {} from "@ant-design/icons";
import Briefing from "../../views/briefing.svg";
import { Modal, Button, Card } from "antd";
function AddPayment() {
  return (
    <div className="Modal">
      <Card className="admin-cards">
        <Briefing className="icono-sider" />

        {/* <Button style={{ color: "#9e39ff" }}>Ingresar un Pago</Button> */}
        <p style={{ color: "#9e39ff" }}>Ingresar un Pago</p>
      </Card>
    </div>
  );
}

export default AddPayment;
