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
import { useLayoutEffect } from "react";
import { user } from "../atoms";
const { Title, Paragraph } = Typography;

export const OurCommunity = ({
  onChange,
  onFinishSearch,
  currentUsers,
  handleClick,
}) => {
  const users = currentUsers.map((user) => {
    const newUser = { ...user };
    newUser.state = user.activeProjectsCounter ? "En Proyecto" : "Libre";
    return newUser;
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
      key: "state",
      dataIndex: "state",
      render: (value) => {
        if (value != "Libre") return <Tag color="red">En Proyecto</Tag>;
        return <Tag color="green">Libre</Tag>;
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
      onFilter: (value, record) => record.state.indexOf(value) === 0,

      sorter: (a, b) => a.state.length - b.state.length,
      sortDirections: ["ascend", "descend"],
    },

    {
      title: "CV",
      dataIndex: "cv",
      key: "cv",
      render: (cv) => {
        if (!cv) return;
        return (
          <a target="_blank" href={cv}>
            <DownloadOutlined id="download-icon" />
          </a>
        );
      },
    },
  ];

  return (
    <div>
      <Form onFinish={onFinishSearch}>
        <Input
          style={{ marginBottom: "1rem" }}
          onChange={onChange}
          placeholder="Buscar freelancer por nombre o email"
        />
      </Form>
      <Table
        onRow={(user) => {
          return {
            onClick: (event) => {
              handleClick(user);
            },
          };
        }}
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};
