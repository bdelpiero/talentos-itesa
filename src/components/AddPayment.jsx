import React from "react";
import {} from "@ant-design/icons";
import Briefing from "../../views/briefing.svg";
import { Modal, Button, Card } from "antd";

function AddPayment() {
  return (
    <div className="Modal">
      <Card 
      className="admin-cards"
      style={{background: 'whitesmoke', border: 'none'}} 
      >
        <img src={Briefing} className="icono-sider" />
        <p className='invite-button-text'> Ingresar un pago </p>
      </Card>
    </div>
  );
}

export default AddPayment;
