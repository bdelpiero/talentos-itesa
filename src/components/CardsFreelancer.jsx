import React from "react";
import { Button, Card, DatePicker, InputNumber, Col } from 'antd';

export default () => {
  return (
    <>
      <Col span={8}>
        <Card className="bodyCard">
          <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
          <p id="subtittle">PROYECTO</p>
          <p>"ITS202|SATAPP"</p>
          <p id="subtittle">DURACION</p>
          <p>4 Semanas</p>
          <p id="subtittle">MONTO</p>
          <p>
            <InputNumber
              defaultValue={50000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </p>
          <Button className="buttonCard" shape="round">
            Firma Contrato
          </Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="bodyCard">
          <h3 id="tittleCard">PROXIMO PAGO</h3>
          <p id="subtittle">PROYECTO</p>
          <p>"ITS202|SATAPP"</p>
          <p id="subtittle">FECHA DE PAGO</p>
          <DatePicker />
          <p id="subtittle">MONTO</p>
          <p>
            <InputNumber
              defaultValue={50000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </p>
          <Button className="buttonCard" shape="round">
            Cargar Factura
          </Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="bodyCard">
          <h3 id="tittleCard">MI BANCO</h3>
          <p id="subtittle">CBU/Alias</p>
          <p>Banco EL pepino</p>
          <p id="subtittle">TITULAR</p>
          <p>Agustin Fregossi</p>
          <p id="subtittle">BANCO</p>
          <p>Santnader Rio</p>
          <Button className="buttonCard" shape="round">
            Modificar datos
          </Button>
        </Card>
      </Col>
    </>
  );
};
