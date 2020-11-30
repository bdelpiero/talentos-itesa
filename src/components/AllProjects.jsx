import React from "react";
import { Table, Tag, Space, Button } from "antd";
// import ModalUser from "../components/ModalAddUser"

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
        <div >
          <Space size="middle" >
          <Button style={{ color: "#9749f8" }}> VER MÁS </Button>
              {/* <ModalUser/> */}
          </Space>
          <Space size="middle" >
          <Button style={{ color: "#9749f8" }}> INVITAR </Button>
              {/* <ModalUser/> */}
              </Space>
        </div>
      ),
    },
  ];

  const data = projects.map((project) => {
    return project.data();
  });
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sidney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];

  return <Table columns={columns} dataSource={data} />;
}

export default AllProjects;
