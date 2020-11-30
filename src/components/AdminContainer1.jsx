import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import { Route, Link, useHistory } from "react-router-dom";
import InviteContainer from "../containers/InviteContainer";
import AddPaymentContainer from "../containers/AddPaymentContainer";
import NewProjectContainer from "../containers/NewProjectContainer";
import ResumeContainer from "../containers/ResumeContainer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeaderComponent from "../components/Header";
import PendingPayments from "../components/PendingPayments";
import { authUser } from "../../auth/auth";
export default () => {
  const { Header, Footer, Sider, Content } = Layout;
  const [sidebar, setSidebar] = useState(true);
  const { logout, currentUser } = authUser();
  const history = useHistory();
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    <>
      <Sider className={sidebar ? "sider-user" : "sider-user-inactive"}>
        <Sidebar handleLogout={handleLogout} showSidebar={showSidebar} />
      </Sider>
      <div className="admin-container">
        <Navbar
          showSidebar={showSidebar}
          className={!sidebar ? "navbar2" : "navbar1"}
        ></Navbar>
        CONTAINER
        <div className="header">
          <HeaderComponent />
        </div>
        <div className="card-container">
          {" "}
          <Row>
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
        <div className="card-payments">
          <PendingPayments />
        </div>
      </div>
    </>
  );
};
