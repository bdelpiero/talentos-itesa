import React from "react";
import {
  Row,
  Col,
  Card,
  Avatar,
  Typography,
  Tag,
  Table,
  ConfigProvider,
} from "antd";

export const SingleUser = ({ selectedUserData, userProjects }) => {
  const user = selectedUserData;
  const bankData = selectedUserData.bankDetails;
  const { Title } = Typography;

  let userState = function () {
    if (selectedUserData.activeProjectsCounter > 0)
      return <Tag color="red">En Proyecto</Tag>;
    if (selectedUserData.activeProjectsCounter === 0)
      return <Tag color="green">Libre</Tag>;
  };

  const columns = [
    {
      title: "NOMBRE PROYECTO",
      dataIndex: "proyecto",
      key: "proyecto",
      render: (proyecto) => <h4>{proyecto}</h4>,
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
      title: "CONTRATO",
      key: "contract",
      dataIndex: "contract",
    },
    {
      title: "ESTADO DEL PROYECTO",
      key: "status",
      dataIndex: "status",
      render: (status) => <h4>{status}</h4>,
    },
  ];

  return (
    <>
      {" "}
      {
        <Row gutter={[30]}>
          {bankData && (
            <Col xs={24} sm={12} md={12} lg={12}>
              <Title>{user.name + " " + user.lastName}</Title>
              <Avatar size={128} src={user.avatar} />
              <Row>
                <Card size={"small"} title={"Datos Bancarios"}>
                  <p>Banco: {bankData.bankName}</p>
                  <p>CBU: {bankData.cbu}</p>
                  <p>Alias: {bankData.alias}</p>
                  <p>CUIT: {bankData.cuit}</p>
                  <p>Factura: tipo {bankData.type}</p>
                </Card>
                <Card size={"small"} title={"Datos Freelancer"}>
                  <p>
                    Nombre: {user.name} {user.lastName}
                  </p>
                  <p>Servicio: {user.freelancerType} </p>
                  <p>Email: {user.email}</p>
                  <p>Dirección: {bankData.address}</p>
                  <p>{userState()}</p>
                </Card>
              </Row>
            </Col>
          )}
          <Col xs={24} sm={12} md={12} lg={12}>
            {userProjects &&
              (console.log(userProjects),
              (
                <Table
                  /* onRow={(user) => {
                return {
                  onClick: (event) => {
                    handleClick(user);
                  },
                };
              }} */
                  columns={columns}
                  dataSource={userProjects}
                  pagination={{ pageSize: 5 }}
                />
              ))}
          </Col>
        </Row>
      }
    </>
  );
};
