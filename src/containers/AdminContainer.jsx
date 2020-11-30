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
import PendingPayments from "../components/PendingPayments";
import Title from "antd/lib/skeleton/Title";
import Error404 from "../components/404";
import Navbar from "../components/Navbar";
function AdminContainer() {
  const { Header, Footer, Sider, Content } = Layout;
  const { logout, currentUser } = authUser();
  const history = useHistory();
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  console.log("userContainer", currentUser);
  return !currentUser ? (
    <Error404 />
  ) : (
    <>
      <Sider className={sidebar ? "sider-user" : "sider-user-inactive"}>
        <Sidebar handleLogout={handleLogout} showSidebar={showSidebar} />
      </Sider>
      <div className="layout-prueba">
        <Navbar showSidebar={showSidebar}></Navbar>

        <div className="header">
          <HeaderComponent />
        </div>

        <div className="admin-container">
          <Row gutter={30} className="content-row">
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
        </div>
        <div className="admin-container">
          {/*  <Row className="content-row">
            <PendingPayments></PendingPayments>
          </Row> */}
        </div>
      </div>
    </>
  );
}

export default AdminContainer;
