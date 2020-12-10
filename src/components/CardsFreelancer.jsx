import React, {useState} from "react";
import { useRecoilState } from "recoil";
import { user,projectInvited } from "../atoms/index";

// STYLES
import { Button, Card, Carousel } from 'antd';
import { Typography } from 'antd';
import MiBancoContainer from "../containers/MiBancoContainer";

const { Title } = Typography;

export default ({setItem}) => {
  const [currentUser,serCurrentUser]=useRecoilState(user)
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);
  const [carrusel, setCarrusel] = useState(0);

  console.log("project en carfrelance", invitedProject)
  console.log("user en carfrelance", currentUser)

  const CardsOferts =(props)=>{
    if(props.inviteds.length > 0){
      console.log("entro al primer if")
      if(props.inviteds.length > 1){
        console.log("mas de un proyecto",props.inviteds, carrusel)
        return (
          <Card className="freelancer-cards" >
            <Title level={5} id="title-freelancer-card">OFERTA DE PROYECTO</Title>
            <p id="subtittle-freelancer-card">PROYECTO</p>
            <p id='text-freelancer-card'>"{props.inviteds[carrusel].proyecto}"</p>
            <p id="subtittle-freelancer-card">DURACION</p>
            <p id='text-freelancer-card'>{props.inviteds[carrusel].duracion}</p>
            <p id="subtittle-freelancer-card">MONTO</p>
            <div className='container-freelancer-button'>
              <p id='text-freelancer-card'> "${props.inviteds[carrusel].monto}"</p>
              <Button className="freelancer-card-buttons" onClick={()=>setItem(5)} shape="round"> Firma Contrato </Button>
            </div>   
            <div className='freelancer-card-stepers-container'>
              {props.inviteds.map((p,i)=>{
                return (
                <Button shape='round' key={i} onClick={() => setCarrusel(i)} className='freelancer-card-stepers'> </Button>
                )
              })}
            </div>
          </Card>
        )
      } else {
        return (
          <Card className="freelancer-cards" key={props.inviteds[0].proyecto}>
            <Title level={5} id="title-freelancer-card">OFERTA DE PROYECTO</Title>
            <p id="subtittle-freelancer-card">PROYECTO</p>
            <p id='text-freelancer-card'>"{props.inviteds[0].proyecto}"</p>
            <p id="subtittle-freelancer-card">DURACION</p>
            <p id='text-freelancer-card'>{props.inviteds[0].duracion}</p>
            <p id="subtittle-freelancer-card">MONTO</p>
            <div className='container-freelancer-button'>
              <p id='text-freelancer-card'> "${props.inviteds[0].monto}"</p>
              <Button className="freelancer-card-buttons" onClick={()=>setItem(5)} shape="round"> Firma Contrato </Button>
            </div>          
          </Card>
        )
      }
    } else {
      return (
        <Card className="freelancer-cards">
          <Title level={5} id="title-freelancer-card">OFERTA DE PROYECTO</Title>
          <p id="subtittle-freelancer-card">NO TIENES PROYECTOS</p>
        </Card>
      )
    }    
  }

  return (
    <>
      {/* CARD OFERTA DE PROYECTO */}
      {invitedProject.invited && <CardsOferts inviteds={invitedProject.invited}/>}

      {/* CARD PROXIMO PAGO */}
      <Card className='freelancer-cards'>
        <Title level={5} id="title-freelancer-card">PROXIMO PAGO</Title>
        <p id='subtittle-freelancer-card'>PROYECTO</p>
        <p id='text-freelancer-card'>Project Name</p>
        <p id='subtittle-freelancer-card'>FECHA DE PAGO</p>
        <p id='text-freelancer-card'>Fecha de Pago</p>
        <p id='subtittle-freelancer-card'>MONTO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>"$50.000"</p>
          <Button shape='round' className="freelancer-card-buttons"> Cargar Factura </Button>
        </div>
      </Card>
      {/* CARD MI BANCO */}
      <Card className='freelancer-cards'>
        <Title level={5} id="title-freelancer-card">MI BANCO</Title>
        <p id='subtittle-freelancer-card'>CBU/Alias</p>
        <p id='text-freelancer-card'>{currentUser.bankDetails.alias}</p>
        <p id='subtittle-freelancer-card'>TITULAR</p>
        <p id='text-freelancer-card'>{currentUser.bankDetails.accountName}</p>
        <p id='subtittle-freelancer-card'>BANCO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>{currentUser.bankDetails.bankName} </p>
          <MiBancoContainer/>
        </div>
      </Card>
    </>
  );
};
