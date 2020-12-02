import React from "react";
import { Table, Tag, Space, Button, Card, List, Avatar, Row, Col } from "antd";
// import ModalUser from "../components/ModalAddUser"
import { Typography } from "antd";
import InviteProjectContainer from "../containers/InviteProjectContainer";
import NewProjectContainer from "../containers/NewProjectContainer"

const { Title } = Typography;

function AllProjects({ projects, deleteProject }) {
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
      render: () => (
        <div>
            <Button className="modal-button"> VER MÁS </Button>
        </div>
      ),
    },

    {
      title: "",
      key: "action",
      render: () => (
        <div>
            <InviteProjectContainer />
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
                onClick={()=>deleteProject(proyecto)}
              >
                ELIMINAR
              </Button>
              {/* <ModalUser/> */}
          </div>
        );
      },
    },
  ];

  // const data = projects
  
  return (
    <div style={{ width: "100%" }}>
      <Row>
        <Col span={20}>
          <Title> Todos los Proyectos </Title>
        </Col>
        <Col span={4}>
          {/* <Button style={{ float: "right" }}>  */}
          <NewProjectContainer />
          {/* CREAR PROYECTO */}
          {/* </Button> */}
        </Col>
      </Row>

      <div>
        <Table columns={columns} dataSource={projects} />
      </div>
    </div>
  );
}

export default AllProjects;
