import React from "react";
import { Link, useHistory } from "react-router-dom";
import { authUser } from "../../auth/auth";
import { Layout, Row, Col } from "antd";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";
import PagosFreelace from "../components/PagosFreelace";
import { Typography } from 'antd';

const { Title } = Typography;

import CardsFreelancer from "../components/CardsFreelancer";

const { Header, Footer, Sider, Content } = Layout;

export default () => {
  const { logout, currentUser } = authUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
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
        <Content
          className="content-user" 
          xs={24} sm={12} md={8}
        >
          <Row
            className="content-row"
            gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}
            justify="space-around"
            align="middle"
          >
            <CardsFreelancer />
          </Row>

          
          <Row className="content-row"
           gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}
           justify="space-around"
            align="middle">
              
            <PagosFreelace />
          </Row>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Talentos ITESA ©2020 Created by Plataforma 5</Footer> */}
      </Layout>
    </Layout>
  );
};
