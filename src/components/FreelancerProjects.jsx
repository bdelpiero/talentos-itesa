import React from "react";
import { Card, Col, Row, Button } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export default ({ acceptedProjects, currentUser }) => {

  const calculoRemuneracion =(arr)=>{
    return arr.reduce((pre,act)=> pre + parseInt(act.monto),0)
  } 

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {acceptedProjects &&
        acceptedProjects.map((project) => (
          <Card
            className="bodyCardProjects"
            key={project.id}
            style={{ marginBottom: "50px" }}
          >
             <Title level={5} id="title-freelancer-card">
            OFERTA DE PROYECTO
          </Title>
            <p id="subtittle-freelancer-card">PROYECTO</p>
            <h1>{project.proyecto}</h1>
            <p id="subtittle-freelancer-card">DURACION</p>
            <h1> {project.duracion}</h1>
            <p id="subtittle-freelancer-card">MONTO</p>
            <h1>$ {calculoRemuneracion(project.cuotasDB)}</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                right: 20,
                bottom: 40,
              }}
            >
              <a href={`${project.urlContractProject}`} target="_blank">
                <Button
                  className="modal-button buttonCard buttonProjects "
                  style={{ backgroundColor: "#9E39FF", color: "white" }}
                >
                  Ver Contrato
                </Button>
              </a>

              <Button
                className="modal-button buttonCard"
                style={{ backgroundColor: "#7513D3", color: "white" }}
              >
                Ver Pagos
              </Button>
            </div>
            {project.status && project.status == "Finished" && (
              <span
                style={{
                  position: "absolute",
                  right: -20,
                  top: 0,
                  transform: "rotate(20deg)",
                  backgroundColor: "#39FF94",
                  color: "#9e39ff",
                  border: "none",
                  borderRadius: "20px",
                  margin:"auto",
                  padding:"10px"
                }}
              >
                BEER TIME 🍺
              </span>
            )}
          </Card>
        ))}
    </div>
  );
};
