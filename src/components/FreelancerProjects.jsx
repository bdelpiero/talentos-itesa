import React from "react";
import { Card, Col, Row, Button } from "antd";

export default () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card className="bodyCardProjects" style={{position:"relative",}}>
      <h1 id='tittleCard'>OFERTA DE PROYECTO</h1>
          <p id='subtittle'>PROYECTO</p>
          <h1>ITESA | 2020</h1>
          <p id='subtittle'>DURACION</p>
          <h1> 4 SEMANAS </h1>
          <p id='subtittle'>MONTO</p>
          <h1>$50.000</h1>

            <div style={{display:"flex",flexDirection: "column",position:"absolute", right:20, bottom:40}}>
              <Button
                className='modal-button buttonCard buttonProjects '>
                Ver Contrato
              </Button>

              <Button
                className='modal-button buttonCard'>
                Ver Pagos
              </Button>
            </div>
            <Button style={{position:"absolute", right:0,top:0, transform:"rotate(20deg)", backgroundColor:"lime", color:"#9e39ff", border:"none", borderRadius:"20px"}}>
              Terminado
            </Button>

      </Card>

      <Card className="bodyCard" title="Card title" bordered={false}>
        Card content
      </Card>

      <Card className="bodyCard" title="Card title" bordered={false}>
        Card content
      </Card>
    </div>
  );
};
