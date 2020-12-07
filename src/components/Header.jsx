import React, { useState } from "react";
import logo from "../../views/logo-itesa.svg";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Avatar, Layout } from "antd";
import EditUserContainer from "../containers/EditUserContainer";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";
const { Title, Text } = Typography;

const { Header } = Layout;

export default () => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  //console.log("buscando user", currentUser.lastName)
  console.log("ESTE CONSOLOG ES EN HEADER", currentUser);
  return (
    <Header>
      <Row align='top' justify='end' className='mini-logo'>
        <img src={logo} className='logo' />
      </Row>

      <Row justify='space-between' className='header-user' align='top'>
        <Col>
          <Title className='dashboard'>Dashboard</Title>
          <Text type='secondary' className='subtitulo'>
            Bienvenido a Itesa, {currentUser.name + " " + currentUser.lastName}
            {" :)"}
          </Text>
        </Col>
        <Col className='avatar'>
          <EditUserContainer
            user={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Col>
      </Row>
    </Header>
  );
};
