import React from "react";
import { Table, Tag, Space, Button, Card, List, Avatar, Row, Col } from "antd";

import { Typography, Spin } from "antd";
import InviteProjectContainer from "../containers/InviteProjectContainer";
import NewProjectContainer from "../containers/NewProjectContainer";

const { Title } = Typography;

function AllProjects({ projects, deleteProject, handleClick }) {
  const columns = [
    {
      title: "PROYECTOS",
      dataIndex: "name",
      key: "name",
      render: (text) => <div style={{ color: "#9749f8" }}>{text}</div>,
    },
    {
      title: "DURACIÓN",
      dataIndex: "term",
      key: "term",
    },
    {
      title: "FECHA DE INICIO",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "FECHA DE FINALIZACIÓN",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "",
      key: "action",
      render: (proyecto) => (
        <div>
          <Button
            className="modal-button"
            onClick={() => handleClick(proyecto)}
          >
            {" "}
            VER MÁS{" "}
          </Button>
        </div>
      ),
    },

    {
      title: "",
      key: "action",
      render: (proyecto) => (
        <div>
          <InviteProjectContainer proyecto={proyecto} />
        </div>
      ),
    },

    {
      title: "",
      key: "delete",
      render: (proyecto) => {
        return (
          <div>
            <Button
              className="modal-button"
              onClick={() => deleteProject(proyecto)}
            >
              ELIMINAR
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Row>
        <Col span={20}>
          <Title> Todos los Proyectos </Title>
        </Col>
        <Col span={4}>
          <NewProjectContainer />
        </Col>
      </Row>

      <div>
        {/* <Spin delay={900} tip={"Cargando proyectos ..."}> */}
        <Table columns={columns} dataSource={projects} />
        {/* </Spin> */}
      </div>
    </div>
  );
}

export default AllProjects;
