import React from "react";
import { Table, Button, Input } from "antd";

import { Typography, Spin, Dropdown, Menu } from "antd";
import InviteProjectContainer from "../containers/InviteProjectContainer";
import NewProjectContainer from "../containers/NewProjectContainer";
import { DeleteOutlined, EllipsisOutlined } from "@ant-design/icons";

const { Title } = Typography;

function AllProjects({ projects, deleteProject, handleClick, changeStatus, onChange }) {
  function menu(proyecto) {
    return (
      <Menu>
        <Menu.Item>
          <div>
            <Button
              className="modal-button2"
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
            className="modal-button2"
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
      sorter: (a, b) =>
        new Date(Date.parse(a.startDate)) - new Date(Date.parse(b.startDate)),
      defaultSortOrder: "descend",
      responsive: ["lg", "md"],
    },
    {
      title: "FECHA DE FINALIZACIÓN",
      key: "endDate",
      dataIndex: "endDate",
      sorter: (a, b) =>
        new Date(Date.parse(a.endDate)) - new Date(Date.parse(b.endDate)),
      defaultSortOrder: "descend",
      responsive: ["lg", "md"],
    },
    {
      title: "ESTADO",
      key: "status",
      dataIndex: "status",
      filters: [
        {
          text: "On Development",
          value: "On Development",
        },
        {
          text: "Finished",
          value: "Finished",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["ascend", "descend"],
    },

    {
      title: "",
      key: "action",
      className: "hide-button",
      render: (proyecto) => (
        <div>
          <Button
            className="modal-button2 hide-button"
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
      key: "dropdown",
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title></Title>
        <NewProjectContainer />
      </div>

      <div>
        <Input
          style={{ marginBottom: "1rem" }}
          onChange={onChange}
          placeholder="Buscar Proyecto por Nombre"
        />
        {/* <Spin delay={900} tip={"Cargando proyectos ..."}> */}
        <Table columns={columns} dataSource={projects} />
        {/* </Spin> */}
      </div>
    </div>
  );
}

export default AllProjects;
