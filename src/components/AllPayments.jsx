import React, { useState } from "react";
import { Table, Button, Input, Avatar } from "antd";
import { Typography, Spin, Dropdown, Menu } from "antd";
import { DownloadOutlined, DownOutlined } from "@ant-design/icons";

export default ({ filteredPayments, onChange }) => {
  const columns = [
    {
      title: "",
      // dataIndex: "avatar",
      key: "userId",
      render: (payment) => <Avatar src={payment.user.avatar || ""} />,
    },
    {
      title: "PROYECTO",
      dataIndex: "projectName",
      key: "projectName",
      sorter: (a, b) => a.projectName.length - b.projectName.length,
      sortDirections: ["ascend", "descend"],
      render: (text) => <div style={{ color: "#9749f8" }}>{text}</div>,
    },
    {
      title: "CUOTA",
      dataIndex: "cuota",
      key: "cuota",
      filters: [
        {
          text: "CUOTA 1",
          value: "CUOTA 1",
        },
        {
          text: "CUOTA 2",
          value: "CUOTA 2",
        },
        { text: "CUOTA 3", value: "CUOTA 3" },
        {
          text: "CUOTA 4",
          value: "CUOTA 4",
        },
      ],
      onFilter: (value, record) => record.cuota.indexOf(value) === 0,
      sorter: (a, b) => a.cuota.localeCompare(b.cuota),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "FECHA DE PAGO",
      dataIndex: "fecha",
      key: "fecha",
      sorter: (a, b) =>
        new Date(Date.parse(a.fecha)) - new Date(Date.parse(b.fecha)),
      defaultSortOrder: "descend",
      responsive: ["lg", "md"],
    },
    {
      title: "PERFIL",
      key: "perfil",
      sorter: (a, b) => a.user.name.length - b.user.name.length,
      sortDirections: ["ascend", "descend"],
      render: (payment) => (
        <p>{`${payment.user.name} ${payment.user.lastName}`}</p>
      ),
    },
    {
      title: "PAGO",
      key: "comprobantePago",
      render: (payment) => {
        return payment.comprobantePago ? (
          <a href={payment.comprobantePago} target="_blank">
          <Button className='modal-button2' shape='round'>
            Ver pago <DownloadOutlined />
          </Button>

          </a>

        ) : (
          <Button className='modal-button2' shape='round' disabled>
            Ver pago <DownloadOutlined />
          </Button>
        );
      },
    },
    {
      title: "FACTURA",
      key: "factura",
      render: (payment) => {
        return payment.factura ? (
          <a href={payment.factura} target="_blank">
        <Button className="modal-button2" >Ver Factura</Button>
        </a>
        ):(<Button className="modal-button2" disabled >Ver Factura</Button>)
      },
    },
  ];
  return (
    <div>
      <Input
        style={{ margin: "1rem" }}
        onChange={onChange}
        placeholder='Buscar Proyecto por Nombre'
      />
      <Table columns={columns} dataSource={filteredPayments} />
    </div>
  );
};
