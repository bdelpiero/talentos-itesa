import React from "react";
import { Card, Col, Row, Button } from "antd";

export default ({ acceptedProjects, currentUser }) => {
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
            <h1 id="tittleCard">OFERTA DE PROYECTO</h1>
            <p id="subtittle">PROYECTO</p>
            <h1>{project.proyecto}</h1>
            <p id="subtittle">DURACION</p>
            <h1> {project.duracion}</h1>
            <p id="subtittle">MONTO</p>
            <h1>$50.000</h1>

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
