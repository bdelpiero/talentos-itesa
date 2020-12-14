import React, { useState } from "react";
import { Button, Card, Typography } from "antd";
const { Title } = Typography;

export default () => {
  return (
    <Card className='freelancer-cards'>
      <Title level={5} id='title-freelancer-card'>
        PROXIMO PAGO
      </Title>
      <p id='subtittle-freelancer-card'>PROYECTO</p>
      <p id='text-freelancer-card'>Project Name</p>
      <p id='subtittle-freelancer-card'>FECHA DE PAGO</p>
      <p id='text-freelancer-card'>Fecha de Pago</p>
      <p id='subtittle-freelancer-card'>MONTO</p>
      <div className='container-freelancer-button'>
        <p id='text-freelancer-card'>"$50.000"</p>
        <Button shape='round' className='freelancer-card-buttons'>
          {" "}
          Cargar Factura{" "}
        </Button>
      </div>
    </Card>
  );
};
