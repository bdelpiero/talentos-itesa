import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import InviteContainer from "./InviteContainer";
import AddPaymentContainer from "./AddPaymentContainer";
import NewProjectContainer from "./NewProjectContainer";
import { Layout, Row, Col } from "antd";
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
          <Row
            gutter={[30, 16]}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Col span={2}>
              <InviteContainer />
            </Col>
            <Col span={2}>
              <NewProjectContainer />
            </Col>
            <Col span={2}>
              <AddPaymentContainer />
            </Col>
            <Col span={8}>CARD TU RESUMEN</Col>
          </Row>

          <Row className="content-row">pagos</Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminContainer;
