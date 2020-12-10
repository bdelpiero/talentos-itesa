import React from "react";
import { Table, Tag, Space, Button, Card, List, Avatar, Row, Col } from "antd";

import { Typography, Spin, Dropdown, Menu } from "antd";
import InviteProjectContainer from "../containers/InviteProjectContainer";
import NewProjectContainer from "../containers/NewProjectContainer";
import { DeleteOutlined, EllipsisOutlined } from "@ant-design/icons";

const { Title } = Typography;

function AllProjects({ projects, deleteProject, handleClick, changeStatus }) {
  function menu(proyecto) {
    return (
      <Menu>
        <Menu.Item>
          <div>
            <Button
              className="modal-button"
              onClick={() => handleClick(proyecto)}
            >
              {" "}
              VER MÁS{" "}
            </Button>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div>
            <InviteProjectContainer proyecto={proyecto} />
          </div>
        </Menu.Item>
        <Menu.Item>
          <Button
            className="modal-button"
            onClick={() => changeStatus(proyecto)}
          >
            ESTADO
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
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
      responsive: ["lg", "md"],
    },
    {
      title: "FECHA DE INICIO",
      dataIndex: "startDate",
      key: "startDate",
      responsive: ["lg", "md"],
    },
    {
      title: "FECHA DE FINALIZACIÓN",
      key: "endDate",
      dataIndex: "endDate",
      responsive: ["lg", "md"],
    },
    {
      title: "Estado",
      key: "status",
      dataIndex: "status",
    },

    {
      title: "",
      key: "action",
      className: "hide-button",
      render: (proyecto) => (
        <div>
          <Button
            className="modal-button hide-button"
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
      className: "hide-button",
      render: (proyecto) => (
        <div className="hide-button">
          <InviteProjectContainer proyecto={proyecto} />
        </div>
      ),
    },

    {
      title: "",
      key: "changeStatus",
      className: "hide-button",
      render: (proyecto) => {
        return (
          <div>
            <Button
              className="modal-button hide-button"
              onClick={() => changeStatus(proyecto)}
            >
              ESTADO
            </Button>
          </div>
        );
      },
    },
    {
      title: "",
      key: "action",
      render: (proyecto) => {
        return (
          <div className="show-ellipsis">
            <Dropdown overlay={menu(proyecto)} placement="bottomLeft">
              <EllipsisOutlined className="single-icon" />
            </Dropdown>
          </div>
        );
      },
    },

    /*  {
      title: "",
      key: "delete",
      render: (proyecto) => {
        return (
          <div>
            <Button
              className="modal-button"
              onClick={() => deleteProject(proyecto)}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    }, */
  ];

  return (
    <div>
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
