import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { user, projectInvited } from "../atoms/index";
import CardsNextPayments from "./CardsNextPayments";
import CardsOferts from "./CardsOferts";

// STYLES
import { Button, Card } from "antd";
import { Typography } from "antd";
import MiBancoContainer from "../containers/MiBancoContainer";

const { Title } = Typography;

export default ({ setItem, nextPayments }) => {
  const [currentUser, serCurrentUser] = useRecoilState(user);
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);

  const CardsOferts = (props) => {
    
    const getDatesBetweenDates = (startDate, endDate) => {
      const sd=startDate.split('/')
      const ed=endDate.split('/')
      let dates = []
      //to avoid modifying the original date
      const theDate = new Date(sd[2],sd[1],sd[0])
      const theEndDate = new Date(ed[2],ed[1],ed[0])
  
      while (theDate < theEndDate) {
        dates = [...dates, new Date(theDate)];
        theDate.setDate(theDate.getDate() + 1);
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
          <Card className="freelancer-cards" >
            <Title level={5} id="title-freelancer-card">OFERTA DE PROYECTO</Title>
            <p id="subtittle-freelancer-card">PROYECTO</p>
            <p id='text-freelancer-card'>"{props.inviteds.selected.proyecto}"</p>
            <p id="subtittle-freelancer-card">DURACION</p>
            <p id='text-freelancer-card'>{duracion} semanas</p>
            <p id="subtittle-freelancer-card">MONTO</p>
            <div className='container-freelancer-button'>
              <p id='text-freelancer-card'>"$ {monto}"</p>
              <Button className="freelancer-card-buttons" onClick={()=>setItem(5)} shape="round"> Firma Contrato </Button>
            </div>   
            <div className='freelancer-card-stepers-container'>
              {props.inviteds.invited.map((p,i)=>{
                return (
                <Button shape='round' key={i} onClick={() => {
                  console.log("AQUI",props.inviteds.invited[i])
                  setInvitedProject({...invitedProject, selected : props.inviteds.invited[i]})
                }} className='freelancer-card-stepers'> </Button>
                )
              })}
            </div>
          </Card>
        )
      } else {
        return (
          <Card className="freelancer-cards" key={props.inviteds.selected.proyecto}>
            <Title level={5} id="title-freelancer-card">OFERTA DE PROYECTO</Title>
            <p id="subtittle-freelancer-card">PROYECTO</p>
            <p id='text-freelancer-card'>"{props.inviteds.selected.proyecto}"</p>
            <p id="subtittle-freelancer-card">DURACION</p>
            <p id='text-freelancer-card'>{duracion} semanas</p>
            <p id="subtittle-freelancer-card">MONTO</p>
            <div className='container-freelancer-button'>
              <p id='text-freelancer-card'> "${monto}"</p>
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
      {invitedProject && (
        <CardsOferts
          inviteds={invitedProject}
          setInvitedProject={setInvitedProject}
          setItem={setItem}
        />
      )}

      {/* CARD PROXIMO PAGO */}
      <CardsNextPayments nextPayments={nextPayments} />

      {/* CARD MI BANCO */}
      <Card className='freelancer-cards'>
        <Title level={5} id='title-freelancer-card'>
          MI BANCO
        </Title>
        <p id='subtittle-freelancer-card'>CBU/Alias</p>
        <p id='text-freelancer-card'>{currentUser.bankDetails.alias}</p>
        <p id='subtittle-freelancer-card'>TITULAR</p>
        <p id='text-freelancer-card'>{currentUser.bankDetails.accountName}</p>
        <p id='subtittle-freelancer-card'>BANCO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>{currentUser.bankDetails.bankName} </p>
          <MiBancoContainer />
        </div>
      </Card>
    </>
  );
};
