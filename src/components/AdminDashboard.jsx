import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { Layout, Row, Col, } from "antd";
import { authUser } from "../../auth/auth";

// COMPONENTS & CONTAINERS
import InviteContainer from "../containers/InviteContainer";
import AddPaymentContainer from "../containers/AddPaymentContainer";
import NewProjectContainer from "../containers/NewProjectContainer";
import Sidebar from "./Sidebar";
import HeaderComponent from "./Header";
import ResumeContainer from "../containers/ResumeContainer";
import PendingPayments from "./PendingPayments";
import Title from "antd/lib/skeleton/Title";


function AdminDashboard({handleLogout}) {
  const { Header, Footer, Sider, Content } = Layout;

  return(
      <Layout>
        <Header className="header-user">
          <HeaderComponent />
        </Header>

        <Content className="content-user">
          <Row
            gutter={30}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            className="content-row"
          >
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

          <Row className="content-row">
            <PendingPayments></PendingPayments>
          </Row>

        </Content>
      </Layout>

  );
}

export default AdminDashboard;
