import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import InviteComponent from "../components/InviteComponent";
import { Layout, Row } from "antd";
import Sidebar from "../components/sidebar";
import { authUser } from "../../auth/auth";
import HeaderComponent from "../components/header";

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
            ofertas / proximo pago / mi banco <InviteComponent />
          </Row>

          <Row className="content-row">pagos</Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminContainer;
