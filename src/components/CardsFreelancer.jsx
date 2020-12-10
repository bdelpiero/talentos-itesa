import React, {useState} from "react";
import { Button, Card, Carousel } from 'antd';
import { useRecoilState } from "recoil";
import { user,projectInvited } from "../atoms/index";
import MiBancoContainer from "../containers/MiBancoContainer";


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
//el carrucel no funciono, hay que buscar otra manera
        return (
          <Card className="bodyCard" >
          <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
          <p id="subtittle">PROYECTO</p>
          <p>"{props.inviteds[carrusel].proyecto}"</p>
          <p id="subtittle">DURACION</p>
          <p>{props.inviteds[carrusel].duracion}</p>
          <p id="subtittle">MONTO</p>
          <p>
          "${props.inviteds[carrusel].monto}"            
          </p>
          <div> 

          <Button 
          onClick={()=>setItem(5)}
          className='modal-button buttonCard' 
          shape="round">
            Firma Contrato
          </Button></div>   
          <div className='oferts-button'>
            {props.inviteds.map((p,i)=>{
              return <Button shape='round' key={i} onClick={()=>setCarrusel(i)}> </Button>
            })}
          </div>       
        </Card>
        )
      }else{
        return (
          <Card className="bodyCard" key={props.inviteds[0].proyecto}>
            <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
            <p id="subtittle">PROYECTO</p>
            <p>"{props.inviteds[0].proyecto}"</p>
            <p id="subtittle">DURACION</p>
            <p>{props.inviteds[0].duracion}</p>
            <p id="subtittle">MONTO</p>
            <p>
            "${props.inviteds[0].monto}"            
            </p>
            <div>
            <Button 
            autofocus
            onClick={()=>setItem(5)}
            className="modal-button buttonCard" 
            shape="round">
              Firma Contrato
            </Button></div>          
          </Card>
        )
      }
    }else{
      return (
        <Card className="bodyCard">
          <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
          <p id="subtittle">NO TIENES PROYECTOS</p>
        </Card>
      )
    }     
  }
  
  return (
    
    <>
      {invitedProject.invited && <CardsOferts inviteds={invitedProject.invited}/>}
    
      <Card className='bodyCard'>
        <h3 id='tittleCard'>PROXIMO PAGO</h3>
        <p id='subtittle'>PROYECTO</p>
        <p>{}</p>
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
          <div style={{display:"flex",flexDirection: "column",position:"absolute", right:20, bottom:40}}>
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
        <div> <MiBancoContainer/></div>
      </Card>
    </>
  );
};
