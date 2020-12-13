import React, { useState } from "react";
import {
  List,
  Typography,
  Table,
  Divider,
  Row,
  Col,
  Checkbox,
  Tag,
  Avatar,
  Input,
  Form,
  Dropdown,
  Button,
  Menu,
  Pagination,
} from "antd";
import { DownloadOutlined, DownOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

export const OurCommunity = ({ onChange, onFinishSearch, currentUsers }) => {
  const users = currentUsers.map((user) => {
    user.activeProjectsCounter = user.activeProjectsCounter
      ? "En Proyecto"
      : "Libre";
    return user;
  });
  const columns = [
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => <Avatar src={avatar} />,
    },
    {
      title: "NOMBRE",
      dataIndex: "name",
      key: "name",
      render: (name, record) => <h4>{name + " " + record.lastName}</h4>,
    },
    {
      title: "ACTIVIDAD",
      dataIndex: "freelancerType",
      key: "freelancerType",
      filters: [
        {
          text: "developer",
          value: "developer",
        },
        {
          text: "designer",
          value: "designer",
        },
      ],
      onFilter: (value, record) => record.freelancerType.indexOf(value) === 0,
      sorter: (a, b) => a.freelancerType.length - b.freelancerType.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "EMAIL",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "STATE",
      key: "activeProjectsCounter",
      dataIndex: "activeProjectsCounter",
      render: (value) => {
        if (value != "Libre") return <Tag color='red'>En Proyecto</Tag>;
        return <Tag color='green'>Libre</Tag>;
      },
      filters: [
        {
          text: "Libre",
          value: "Libre",
        },
        {
          text: "En Proyecto",
          value: "En Proyecto",
        },
      ],
      onFilter: (value, record) =>
        record.activeProjectsCounter.indexOf(value) === 0,
      sorter: (a, b) =>
        a.activeProjectsCounter.length - b.activeProjectsCounter.length,
      sortDirections: ["ascend", "descend"],
    },

    {
      title: "CV",
      dataIndex: "cv",
      key: "cv",
      render: (cv) => {
        if (!cv) return;
        return <DownloadOutlined id='download-icon' />;
      },
    },
  ];

  return (
    <div>
      <Form onFinish={onFinishSearch}>
        <Input
          style={{ marginBottom: "1rem" }}
          onChange={onChange}
          placeholder='Buscar freelancer por nombre o email'
        />
      </Form>
      <Table
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};
