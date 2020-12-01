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
        <Content className="content-user">
          <Row className='admin-row'>
              <InviteContainer />
              <NewProjectContainer />
              <AddPaymentContainer />
              <ResumeContainer />
          </Row>
          <Row>
            <PendingPayments/>
          </Row>
        </Content>
      </Layout>

  );
}

export default AdminDashboard;
