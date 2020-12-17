import React from "react";
import {isLoading,projectInvited} from '../atoms/index'
import { useRecoilState } from "recoil";

// STYLES
import { Button, Card,Typography } from "antd";


const { Title } = Typography;

export default ({setItem}) => {

  const [loadingbtn, setLoadingbtn] =useRecoilState(isLoading)
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);


  const getDatesBetweenDates = (startDate, endDate) => {
    const sd = startDate.split("/");
    const ed = endDate.split("/");
    let dates = [];
    //to avoid modifying the original date
    const theDate = new Date(sd[2], sd[1], sd[0]);
    const theEndDate = new Date(ed[2], ed[1], ed[0]);

    while (theDate < theEndDate) {
      dates = [...dates, new Date(theDate)];
      theDate.setDate(theDate.getDate() + 1);
    }
    // /* console.log("duracion",Math.floor(dates.length /7))
    return Math.floor(dates.length / 7);
  };

  const calculoRemuneracion = (arr) => {
    return arr.reduce((pre, act) => pre + parseInt(act.monto), 0);
  };

  if (invitedProject.invited.length > 0) {
    const duracion = getDatesBetweenDates(
      invitedProject.selected.plazos[0],
      invitedProject.selected.plazos[1]
    );
    const monto = calculoRemuneracion(invitedProject.selected.cuotasDB);

    if (invitedProject.invited.length > 1) {
      return (
        <Card className="freelancer-cards">
          <Title level={5} id="title-freelancer-card">
            OFERTA DE PROYECTO
          </Title>
          <p id="subtittle-freelancer-card">PROYECTO</p>
          <p id="text-freelancer-card">"{invitedProject.selected.proyecto}"</p>
          <p id="subtittle-freelancer-card">DURACION</p>
          <p id="text-freelancer-card">{duracion} semanas</p>
          <p id="subtittle-freelancer-card">MONTO</p>
          <div className="container-freelancer-button">
            <p id="text-freelancer-card">"$ {monto}"</p>
            <Button
              className="freelancer-card-buttons"
              onClick={() =>{
                setLoadingbtn(true)
                setItem(5)}}
                loading={loadingbtn}
              shape="round"
            >
              {" "}
              Firma Contrato{" "}
            </Button>
          </div>
          <div className="freelancer-card-stepers-container">
            {invitedProject.invited.map((p, i) => {
              return (
                <Button
                  shape="round"
                  key={i}
                  onClick={() => {
                    setInvitedProject({
                      ...invitedProject,
                      selected: invitedProject.invited[i],
                    });
                  }}
                  className="freelancer-card-stepers"
                >
                  {" "}
                </Button>
              );
            })}
          </div>
        </Card>
      );
    } else {
      return (
        <Card
          className="freelancer-cards"
          key={invitedProject.selected.proyecto}
        >
          <Title level={5} id="title-freelancer-card">
            OFERTA DE PROYECTO
          </Title>
          <p id="subtittle-freelancer-card">PROYECTO</p>
          <p id="text-freelancer-card">"{invitedProject.selected.proyecto}"</p>
          <p id="subtittle-freelancer-card">DURACION</p>
          <p id="text-freelancer-card">{duracion} semanas</p>
          <p id="subtittle-freelancer-card">MONTO</p>
          <div className="container-freelancer-button">
            <p id="text-freelancer-card"> "${monto}"</p>
            <Button
              className="freelancer-card-buttons"
              onClick={() =>{
                setLoadingbtn(true)
                setItem(5)}}
                loading={loadingbtn}
              shape="round"
            >
              {" "}
              Firma Contrato{" "}
            </Button>
          </div>
        </Card>
      );
    }
  } else {
    return (
      <Card className="freelancer-cards">
        <Title level={5} id="title-freelancer-card">
          OFERTA DE PROYECTO
        </Title>
        <p id="subtittle-freelancer-card">NO TIENES PROYECTOS</p>
      </Card>
    );
  }
};
