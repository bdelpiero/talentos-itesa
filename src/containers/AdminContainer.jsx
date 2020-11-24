import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { authUser } from "../../auth/auth";
import { Layout, Row, Col } from "antd";

// COMPONENTS & CONTAINERS
import InviteComponent from "../components/InviteComponent";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";
import ResumeContainer from "../containers/ResumeContainer";
import CreateProject from "../components/CreateProject"

function AdminContainer() {
  const { Header, Footer, Sider, Content } = Layout;
  const { logout, currentUser } = authUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  console.log("userContainer", currentUser);
  return (
    <Layout>
      <Sider className="sider-user" justify="center">
        <Sidebar handleLogout={handleLogout} />
      </Sider>

      <Layout>
        <Header className="header-user">
          <HeaderComponent />
        </Header>

        <Content className="content-user">
          <Row className="content-row">

            <Col span={4} style={{margin:"auto"}}  >
            INVITAR USUARIO
            </Col>
            <Col span={4} style={{margin:"auto"}}  >
            CREAR PROYECTO
            {/* <CreateProject/> */}
            </Col>
            <Col span={4} style={{margin:"auto"}}  >
            REALIZAR PAGO
            </Col>
            <Col span={8} style={{margin:"auto"}} >
            <ResumeContainer />
            </Col>
          </Row>

          <Row className="content-row">pagos</Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminContainer;
