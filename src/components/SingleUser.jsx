import React from "react";
import { DownloadOutlined, EllipsisOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Card,
  Avatar,
  Typography,
  Tag,
  Table,
  ConfigProvider,
  Button,
  Dropdown,
  Menu,
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


  function contrato(proyecto){proyecto  ? false:true;} 
 
    // const factura =(data) =>{data.factura  ? false : true;} 
    // const pago = proyecto.status == "On Development" ? false : true;

  function menu(proyecto) {    
    
    return (
      <Menu>
        <Menu.Item>
          <Button  className="modal-button2"> Factura </Button>
        </Menu.Item>
        <Menu.Item>
          <Button  className="modal-button2"> Pago </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            disabled={contrato(proyecto.urlContractProject)}
            className="modal-button2"
            target="_blank"
            href={proyecto.urlContractProject}
          >
            Contrato
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
  const columns = [
    {
      title: "NOMBRE",
      dataIndex: "proyecto",
      key: "proyecto",
      render: (proyecto) => <h4>{proyecto}</h4>,
    },
    {
      title: "ESTADO",
      key: "status",
      dataIndex: "status",
      render: (status) => <h4>{status}</h4>,
    },

    {
      title: "CONTRATO",
      key: "action",
      dataIndex: "urlContractProject",
      className: "hide-button",
      render: (contract) => {
        if (!contract) return;
        return (
          <a className="hide-button" target="_blank" href={contract}>
            <DownloadOutlined
              style={{ marginLeft: "30px" }}
              id="download-icon"
            />
          </a>
        );
      },
    },

    {
      title: "FACTURA",
      key: "action",
      dataIndex: "ACA LA KEY DE LA ULTIMA FACTURA",
      className: "hide-button",
      render: (contract) => {
        if (!contract) return;
        return (
          <a className="hide-button" target="_blank">
            <DownloadOutlined
              style={{ marginLeft: "20px" }}
              id="download-icon"
            />
          </a>
        );
      },
    },
    {
      title: "PAGO",
      key: "action",
      dataIndex: "ACA LA KEY DEL ULTIMO PAGO",
      className: "hide-button",
      render: (contract) => {
        if (!contract) return;
        return (
          <a className="hide-button" target="_blank">
            <DownloadOutlined
              style={{ marginLeft: "10px" }}
              id="download-icon"
            />
          </a>
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
  ];

  return (
    <>
      {" "}
      {
        <Row style={{ marginTop: "80px" }} gutter={[30]}>
          {bankData && (
            <Col xs={26} sm={14} md={14} lg={14}>
              <Title level={2}>
                {<Avatar size={128} src={user.avatar} />}
                {"  " + user.name + " " + user.lastName}
                <div>{userState()}</div>
              </Title>

              <Row>
                <Card
                  className="freelancer-cards" /* title={"Datos Freelancer"} */
                >
                  <Title level={5} id="title-freelancer-card">
                    DATOS FREELANCER
                  </Title>
                  <p style={{ color: "#9e39ff" }}>
                    Nombre:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {user.name} {user.lastName}
                    </b>
                  </p>
                  <p style={{ color: "#9e39ff" }}>
                    Servicios:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {user.freelancerType}
                    </b>
                  </p>
                  <p style={{ color: "#9e39ff" }}>
                    Email:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {user.email}
                    </b>
                  </p>
                  <p style={{ color: "#9e39ff" }}>
                    Dirección:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {bankData.address}
                    </b>
                  </p>

                  <Button
                    target="_blank"
                    href={user.cv}
                    className="freelancer-card-buttons"
                  >
                    CV
                  </Button>
                </Card>
                <Card className="freelancer-cards">
                  <Title level={5} id="title-freelancer-card">
                    DATOS BANCARIOS
                  </Title>
                  <p style={{ color: "#9e39ff" }}>
                    Banco:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {bankData.bankName}
                    </b>
                  </p>
                  <p style={{ color: "#9e39ff" }}>
                    CBU:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {bankData.cbu}
                    </b>
                  </p>
                  <p style={{ color: "#9e39ff" }}>
                    Alias:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {bankData.alias}
                    </b>
                  </p>
                  <p style={{ color: "#9e39ff" }}>
                    Cuit:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {bankData.cuit}
                    </b>
                  </p>
                  <p style={{ color: "#9e39ff" }}>
                    Factura Tipo:{" "}
                    <b style={{ color: "black", fontWeight: "30" }}>
                      {bankData.type}
                    </b>
                  </p>
                </Card>
              </Row>
            </Col>
          )}
          <Col xs={22} sm={10} md={10} lg={10}>
            <Title>Proyectos</Title>
            {userProjects && (
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
            )}
          </Col>
        </Row>
      }
    </>
  );
};
