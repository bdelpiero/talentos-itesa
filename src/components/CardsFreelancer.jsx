import React from "react";
import { Button, Card, Carousel } from 'antd';
import { useRecoilState } from "recoil";
import { projectInvited } from "../atoms/index";


export default ({setItem}) => {
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);
  console.log("project en carfrelance", invitedProject)
  const CardsOferts =(props)=>{
    console.log("entro")
    if(props.inviteds && props.inviteds[0]){
      console.log("entro al primer if")
      if(props.inviteds[1]){
        console.log("entro al segundo if",props.inviteds)
//el carrucel no funciono, hay que buscar otra manera
        return (<Carousel afterChange={(e)=>console.log('target',e.target.value)}>
          {props.inviteds.map((invited)=>{
            <Card className="bodyCard" key={invited.proyecto}>
            <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
            <p id="subtittle">PROYECTO</p>
            <p>"{invited.proyecto}"</p>
            <p id="subtittle">DURACION</p>
            <p>{invited.duracion}</p>
            <p id="subtittle">MONTO</p>
            <p>
            "${invited.monto}"            
            </p>
            <div>
            <Button 
            onClick={()=>setItem(5)}
            className="buttonCard" 
            shape="round">
              Firma Contrato
            </Button></div>          
          </Card>
          })}
        </Carousel>)
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
            onClick={()=>setItem(5)}
            className="buttonCard" 
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
      <CardsOferts inviteds={invitedProject.invited}/>
       {/* {invitedProject.invited && invitedProject.invited[0] ? ( <Card className="bodyCard">
          <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
          <p id="subtittle">PROYECTO</p>
          <p>"{invitedProject.invited[0].proyecto}"</p>
          <p id="subtittle">DURACION</p>
          <p>{invitedProject.invited[0].duracion}</p>
          <p id="subtittle">MONTO</p>
          <p>
          "${invitedProject.invited[0].monto}"            
          </p>
          <div>
          <Button 
          onClick={()=>setItem(5)}
          className="buttonCard" 
          shape="round">
            Firma Contrato
          </Button></div>          
        </Card>)
        :
        <Card className="bodyCard">
        <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
        <p id="subtittle">NO TIENES PROYECTOS</p>
      </Card>} */}
      
      
        <Card className="bodyCard">
          <h3 id="tittleCard">PROXIMO PAGO</h3>
          <p id="subtittle">PROYECTO</p>
          <p>"ITS202|SATAPP"</p>
          <p id="subtittle">FECHA DE PAGO</p>
          <input type="date" id="start" name="trip-start"            
              min="2021-01-01" max="2029-12-31"></input>
          <p id="subtittle">MONTO</p>
          <p>"$50.000"       
            
          </p>
          <div>
          <Button className="buttonCard" shape="round">
            Cargar Factura
          </Button></div>
          
        </Card>
      
      
        <Card className="bodyCard">
           <h3 id="tittleCard">MI BANCO</h3>
          <p id="subtittle">CBU/Alias</p>
          <p>Banco EL P5</p>
          <p id="subtittle">TITULAR</p>
          <p>Agustin Fregossi</p>
          <p id="subtittle">BANCO</p>
          <p>{"Santnader Rio"}</p> 
          <div>
          <Button className="buttonCard" shape="round">
            Modificar datos
          </Button></div>                 
        </Card>
      
    </>
  );
};
