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
        <Button className="modal-button" style={{width:'70%',marginLeft:'15%'}}>
        Ingresar un Pago
      </Button>
      </Card>
    </div>
  );
}

export default AddPayment;
