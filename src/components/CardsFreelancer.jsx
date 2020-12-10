import React, {useState} from "react";
import { Button, Card, Carousel } from 'antd';
import { useRecoilState } from "recoil";
import { projectInvited } from "../atoms/index";


export default ({setItem}) => {
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);

  const CardsOferts =(props)=>{

    const getDatesBetweenDates = (startDate, endDate) => {
      const sd=startDate.split('/')
      const ed=endDate.split('/')
      let dates = []
      //to avoid modifying the original date
      const theDate = new Date(sd[2],sd[1],sd[0])
      const theEndDate = new Date(ed[2],ed[1],ed[0])
  
      while (theDate < theEndDate) {
        dates = [...dates, new Date(theDate)]
        theDate.setDate(theDate.getDate() + 1)
      }
      console.log("duracion",Math.floor(dates.length /7))
      return Math.floor(dates.length /7)
    }

    const calculoRemuneracion =(arr)=>{
      return arr.reduce((pre,act)=> pre + parseInt(act.monto),0)
    } 

    if(props.inviteds.invited.length > 0){

      const duracion= getDatesBetweenDates(props.inviteds.selected.plazos[0],props.inviteds.selected.plazos[1])
      const monto=calculoRemuneracion(props.inviteds.selected.cuotasDB)

     
      if(props.inviteds.invited.length > 1){
        console.log("mas de un proyecto",props.inviteds, props.inviteds.selected)

        return (
          <Card className="bodyCard" >
          <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
          <p id="subtittle">PROYECTO</p>
          <p>"{props.inviteds.selected.proyecto}"</p>
          <p id="subtittle">DURACION</p>
          <p>{duracion} semanas</p>
          <p id="subtittle">MONTO</p>
          <p>
          "$ {monto}"            
          </p>
          <div> 

          <Button 
          onClick={()=>setItem(5)}
          className='modal-button buttonCard' 
          shape="round">
            Firma Contrato
          </Button></div>   
          <div className='oferts-button'>
            {props.inviteds.invited.map((p,i)=>{
              return <Button shape='round' key={i} onClick={()=>{
                console.log("AQUI",props.inviteds.invited[i])
                setInvitedProject({...invitedProject, selected : props.inviteds.invited[i]})
              }
              }> </Button>
            })}
          </div>       
        </Card>
        )
      }else{
        return (
          <Card className="bodyCard" key={props.inviteds.selected.proyecto}>
            <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
            <p id="subtittle">PROYECTO</p>
            <p>"{props.inviteds.selected.proyecto}"</p>
            <p id="subtittle">DURACION</p>
            <p>{duracion} semanas</p>
            <p id="subtittle">MONTO</p>
            <p> "${monto}" </p>
            
            <div>
            <Button 
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
      {invitedProject && <CardsOferts inviteds={invitedProject}/>}
    
      <Card className='bodyCard'>
        <h3 id='tittleCard'>PROXIMO PAGO</h3>
        <p id='subtittle'>PROYECTO</p>
        <p>"ITS202|SATAPP"</p>
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
        <p>Banco EL P5</p>
        <p id='subtittle'>TITULAR</p>
        <p>Agustin Fregossi</p>
        <p id='subtittle'>BANCO</p>
        <p>{"Santnader Rio"}</p>
        <div>
          <div className='Modal card-button-container'>
            <Button className='modal-button buttonCard'>Modificar Datos</Button>
          </div>
        </div>
      </Card>
    </>
  );
};
