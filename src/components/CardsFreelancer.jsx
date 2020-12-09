import React from "react";
import { Button, Card, DatePicker, InputNumber, Col } from "antd";
import { useRecoilState } from "recoil";
import { user,projectInvited } from "../atoms/index";
import MiBancoContainer from "../containers/MiBancoContainer";

export default ({ setItem }) => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [projectI, setProjectI] = useRecoilState(projectInvited);
  console.log("project en carfrelance", projectI);
  //console.log("user buscando datos del banco", currentUser.bankDetails)

  return (
    <>
      {projectI && projectI.name ? (
        <Card className='bodyCard'>
          <h3 id='tittleCard'>OFERTA DE PROYECTO</h3>
          <p id='subtittle'>PROYECTO</p>
          <p>{projectI.name}</p>
          <p id='subtittle'>DURACION</p>
          <p>{projectI.term}</p>
          <p id='subtittle'>MONTO</p>
          <p>"$50.000"</p>
          <div>
            {/* <Button
              onClick={() => setItem(5)}
              className='buttonCard'
              shape='round'>
              Firma Contrato
            </Button> */}
            <div className='Modal card-button-container'>
              <Button
                onClick={() => setItem(5)}
                className='modal-button buttonCard'>
                Firmar Contrato
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <Card className='bodyCard'>
          <h3 id='tittleCard'>OFERTA DE PROYECTO</h3>
          <p id='subtittle'>NO TIENES PROYECTOS</p>
        </Card>
      )}

      <Card className='bodyCard'>
        <h3 id='tittleCard'>PROXIMO PAGO</h3>
        <p id='subtittle'>PROYECTO</p>
        <p>{projectI.name}</p>
        <p id='subtittle'>FECHA DE PAGO</p>
        <input
          type='date'
          id='start'
          name='trip-start'
          min='2021-01-01'
          max='2029-12-31'></input>
        <p id='subtittle'>MONTO</p>
        <p>"$50.000"</p>
        <div>
          {/* <Button className="buttonCard" shape="round">
            Cargar Factura
          </Button> */}
          <div className='Modal card-button-container'>
            <Button className='modal-button buttonCard'>Cargar Factura</Button>
          </div>
        </div>
      </Card>

      <Card className='bodyCard'>
        <h3 id='tittleCard'>MI BANCO</h3>
        <p id='subtittle'>CBU/Alias</p>
        <p>{currentUser.bankDetails.alias}</p>
        <p id='subtittle'>TITULAR</p>
        <p>{currentUser.bankDetails.accountName}</p>
        <p id='subtittle'>BANCO</p>
        <p>{currentUser.bankDetails.bankName}</p>
        <div>
          
            <MiBancoContainer/>
          
        </div>
      </Card>
    </>
  );
};
