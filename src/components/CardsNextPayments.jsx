import React, { useState } from "react";
import LoadInvoice from './CargarFactura'
import { useRecoilState } from "recoil";
import { atomPayments } from "../atoms/index";


// STYLES
import { Button, Card, Typography } from "antd";
const { Title } = Typography;

export default () => {


  const [modalCargarFactura, setModalCargarFactura] = useState(false)
  const handleModal = () => modalCargarFactura ? setModalCargarFactura(false) : setModalCargarFactura(true)
  const [cargarFacturas, setCargarFacturas] = useRecoilState(atomPayments);

  if (cargarFacturas.nextPayments.length == 0) {
    return (
      <Card className='freelancer-cards'>
        <Title level={5} id='title-freelancer-card'>
          PRÓXIMOS PAGOS
        </Title>
        <p id='subtittle-freelancer-card'>ESTAS AL DIA CON TUS FACTURAS</p>
      </Card>
    );
  }


  {
    return cargarFacturas.nextPayments.length > 1 ? (
      <Card className='freelancer-cards'>
        <Title level={5} id='title-freelancer-card'>
          PRÓXIMOS PAGOS
        </Title>
        <p id='subtittle-freelancer-card'>PROYECTO</p>
        <p id='text-freelancer-card'>"{cargarFacturas.selected.projectName}"</p>
        <p id='subtittle-freelancer-card'>FECHA DE PAGO</p>
        <p id='text-freelancer-card'>{cargarFacturas.selected.fecha}</p>
        <p id='subtittle-freelancer-card'>MONTO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>"$ {cargarFacturas.selected.monto}"</p>
          <Button
            className='freelancer-card-buttons'
            onClick={handleModal}
            shape='round'>
            {" "}
            Cargar Factura{" "}
          </Button>
        </div>

         {/* MODAL PARA CARGAR FACTURA */}
         <LoadInvoice handleModal={handleModal} modalCargarFactura={modalCargarFactura} />
        <div className='freelancer-card-stepers-container'>
          {cargarFacturas.nextPayments.map((p, i) => {
            return (
              <Button
                shape='round'
                key={i}
                onClick={() => {
                  setCargarFacturas({...cargarFacturas,selected:cargarFacturas.nextPayments[i]})
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
        <p id='text-freelancer-card'>"{cargarFacturas.selected.projectName}"</p>
        <p id='subtittle-freelancer-card'>FECHA DE PAGO</p>
        <p id='text-freelancer-card'>{cargarFacturas.selected.fecha}</p>
        <p id='subtittle-freelancer-card'>MONTO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>"$ {cargarFacturas.selected.monto}"</p>
          <Button
            className='freelancer-card-buttons'
            onClick={handleModal}
            shape='round'>
            Cargar Factura
          </Button>
        </div>

        {/* MODAL PARA CARGAR FACTURA */}
        <LoadInvoice modalCargarFactura={modalCargarFactura} handleModal={handleModal} />
      </Card>
    );
  }
};
