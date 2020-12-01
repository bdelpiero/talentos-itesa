import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import { authUser } from "../../firebase/auth/auth";

// COMPONENTS & CONTAINERS
import InviteContainer from "./InviteContainer";
import AddPaymentContainer from "./AddPaymentContainer";
import NewProjectContainer from "./NewProjectContainer";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";
import ResumeContainer from "../containers/ResumeContainer";
import PendingPayments from "../components/PendingPayments";
import Title from "antd/lib/skeleton/Title";
import Error404 from "../components/404";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";

function AdminContainer() {
  const { Header, Footer, Sider, Content } = Layout;
  const { logout } = authUser();
  const [currentUser, setCurrentUser] = useRecoilState(user);

  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  console.log("userContainer", currentUser);
  return !currentUser ? (
    <Error404 />
  ) : (
    <Layout>
      <Sider className='sider-user'>
        <Sidebar handleLogout={handleLogout} />
      </Sider>

      <Layout>
        <Header className='header-user'>
          <HeaderComponent user={currentUser} />
        </Header>

        <Content className='content-user'>
          <Row
            gutter={30}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            className='content-row'>
            <Col xs={24} sm={12} lg={6}>
              <InviteContainer />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <NewProjectContainer />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <AddPaymentContainer />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <ResumeContainer />
            </Col>
          </Row>

          <Row className='content-row'>
            <PendingPayments></PendingPayments>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminContainer;
