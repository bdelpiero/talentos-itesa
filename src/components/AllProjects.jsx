import React from "react";
import { Table, Tag, Space, Button, Card, List, Avatar, Row, Col } from "antd";
// import ModalUser from "../components/ModalAddUser"
import { Typography } from "antd";

const { Title } = Typography;

function AllProjects({ projects }) {
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
      render: (text, record) => (
        <div>
          <Space size="middle">
            <Button style={{ color: "#9749f8" }}> VER MÁS </Button>
            {/* <ModalUser/> */}
          </Space>
          <Space size="middle">
            <Button style={{ color: "#9749f8" }}> INVITAR </Button>
            {/* <ModalUser/> */}
          </Space>
        </div>
      ),
    },

    {
      title: "",
      key: "delete",
      render: (text, record) => (
        <div>
          <Space size="middle">
            <Button style={{ color: "#9749f8" }}> ELIMINAR </Button>
            {/* <ModalUser/> */}
          </Space>
        </div>
      ),
    },
  ];

  const data = projects.map((project) => {
    return project.data();
  });

  console.log(data, "esto es data ");
  return (
    <div style={{ width: "100%" }}>
      <Row>
        <Col span={12}>
        <Title> Todos los Proyectos </Title>
        </Col>
        <Col span={12}>
        <Button style={{float:"right"}}> CREAR PROYECTO </Button>
        </Col>
      </Row>

      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default AllProjects;

