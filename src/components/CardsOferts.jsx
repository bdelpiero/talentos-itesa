import React from "react";

// STYLES
import { Button, Card,Typography } from "antd";


const { Title } = Typography;

export default (props) => {
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

  if (props.inviteds.invited.length > 0) {
    const duracion = getDatesBetweenDates(
      props.inviteds.selected.plazos[0],
      props.inviteds.selected.plazos[1]
    );
    const monto = calculoRemuneracion(props.inviteds.selected.cuotasDB);

    if (props.inviteds.invited.length > 1) {
      return (
        <Card className="freelancer-cards">
          <Title level={5} id="title-freelancer-card">
            OFERTA DE PROYECTO
          </Title>
          <p id="subtittle-freelancer-card">PROYECTO</p>
          <p id="text-freelancer-card">"{props.inviteds.selected.proyecto}"</p>
          <p id="subtittle-freelancer-card">DURACION</p>
          <p id="text-freelancer-card">{duracion} semanas</p>
          <p id="subtittle-freelancer-card">MONTO</p>
          <div className="container-freelancer-button">
            <p id="text-freelancer-card">"$ {monto}"</p>
            <Button
              className="freelancer-card-buttons"
              onClick={() => props.setItem(5)}
              shape="round"
            >
              {" "}
              Firma Contrato{" "}
            </Button>
          </div>
          <div className="freelancer-card-stepers-container">
            {props.inviteds.invited.map((p, i) => {
              return (
                <Button
                  shape="round"
                  key={i}
                  onClick={() => {
                    props.setInvitedProject({
                      ...props.inviteds,
                      selected: props.inviteds.invited[i],
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
          key={props.inviteds.selected.proyecto}
        >
          <Title level={5} id="title-freelancer-card">
            OFERTA DE PROYECTO
          </Title>
          <p id="subtittle-freelancer-card">PROYECTO</p>
          <p id="text-freelancer-card">"{props.inviteds.selected.proyecto}"</p>
          <p id="subtittle-freelancer-card">DURACION</p>
          <p id="text-freelancer-card">{duracion} semanas</p>
          <p id="subtittle-freelancer-card">MONTO</p>
          <div className="container-freelancer-button">
            <p id="text-freelancer-card"> "${monto}"</p>
            <Button
              className="freelancer-card-buttons"
              onClick={() => props.setItem(5)}
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
