import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import { authUser } from "../../auth/auth";

// COMPONENTS & CONTAINERS
import InviteContainer from "./InviteContainer";
import AddPaymentContainer from "./AddPaymentContainer";
import NewProjectContainer from "./NewProjectContainer";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";
import ResumeContainer from "../containers/ResumeContainer";

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
          <Row gutter={[60, 16]} >
            <Col span={4} style={{margin:"auto"}} >
              <InviteContainer />
            </Col>
            <Col span={4} style={{margin:"auto"}} >
              <NewProjectContainer />
            </Col>
            <Col span={4} style={{margin:"auto"}}>
              <AddPaymentContainer />
            </Col>
            <Col span={8} style={{margin:"auto"}}>
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
