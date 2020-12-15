import React, { useState } from "react";
import LoadInvoice from './CargarFactura'

// STYLES
import { Button, Card, Typography } from "antd";
const { Title } = Typography;

export default ({ nextPayments }) => {
  if (nextPayments.length == 0) {
    return (
      <Card className='freelancer-cards'>
        <Title level={5} id='title-freelancer-card'>
          PRÓXIMOS PAGOS
        </Title>
        <p id='subtittle-freelancer-card'>NO HAY PAGOS PENDIENTES</p>
      </Card>
    );
  }

  const [selected, setSelected] = useState(nextPayments[0]);
  const [modalCargarFactura, setModalCargarFactura] = useState(false)
  const handleModal = () => modalCargarFactura ? setModalCargarFactura(false) : setModalCargarFactura(true)

  {
    return nextPayments.length > 1 ? (
      <Card className='freelancer-cards'>
        <Title level={5} id='title-freelancer-card'>
          PRÓXIMOS PAGOS
        </Title>
        <p id='subtittle-freelancer-card'>PROYECTO</p>
        <p id='text-freelancer-card'>"{selected.projectName}"</p>
        <p id='subtittle-freelancer-card'>FECHA DE PAGO</p>
        <p id='text-freelancer-card'>{selected.fecha}</p>
        <p id='subtittle-freelancer-card'>MONTO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>"$ {selected.monto}"</p>
          <Button
            className='freelancer-card-buttons'
            onClick={handleModal}
            shape='round'>
            {" "}
            Cargar Factura{" "}
          </Button>
        </div>
         {/* MODAL PARA CARGAR FACTURA */}
         <LoadInvoice handleModal={handleModal} modalCargarFactura={modalCargarFactura} selected={selected}/>
        <div className='freelancer-card-stepers-container'>
          {nextPayments.map((p, i) => {
            return (
              <Button
                shape='round'
                key={i}
                onClick={() => {
                  setSelected(nextPayments[i]);
                }}
                className='freelancer-card-stepers'>
                {" "}
              </Button>
            );
          })}
        </div>
      </Card>
    ) : (
      <Card className='freelancer-cards'>
        <Title level={5} id='title-freelancer-card'>
          PRÓXIMOS PAGOS
        </Title>
        <p id='subtittle-freelancer-card'>PROYECTO</p>
        <p id='text-freelancer-card'>"{selected.projectName}"</p>
        <p id='subtittle-freelancer-card'>FECHA DE PAGO</p>
        <p id='text-freelancer-card'>{selected.fecha}</p>
        <p id='subtittle-freelancer-card'>MONTO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>"$ {selected.monto}"</p>
          <Button
            className='freelancer-card-buttons'
            onClick={handleModal}
            shape='round'>
            {" "}
            Cargar Factura{" "}
          </Button>
        </div>
        {/* MODAL PARA CARGAR FACTURA */}
        <LoadInvoice modalCargarFactura={modalCargarFactura} handleModal={handleModal} selected={selected}/>
      </Card>
    );
  }
};
