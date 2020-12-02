import React,{ useState} from "react";

import { Link, useHistory } from "react-router-dom";
import Logo from "../../views/logo-itesa.svg";
import { authUser } from "../../firebase/auth";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";

import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Avatar, Layout } from "antd";

const { Title, Text } = Typography;

const { Header} = Layout;

export default () => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  console.log("buscando user", currentUser.lastName)
  return (
    <Header className="header-user">
      <Row align='top' justify='end' className='mini-logo'>
        <img src={Logo}  className='logo'/>
      </Row>

      <Row justify='space-between' align='top'>
        <Col>
          <Title className='dashboard'>Dashboard</Title>
          <Text type='secondary' className='subtitulo'>
            Bienvenido a Itesa, {currentUser.name + " " + currentUser.lastName} :)
          </Text>
        </Col>
        <Col className='avatar'>
          
          <Avatar size={64} icon={<UserOutlined />} className='avatar' />
          
          <Text type='secondary'>{currentUser.name + " " + currentUser.lastName}</Text>
        </Col>
      </Row>
      </Header>
  );
};
