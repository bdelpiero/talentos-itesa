import React,{ useState} from "react";
import logo from "../../views/logo-itesa.svg";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Avatar } from "antd";

const { Title, Text } = Typography;

export default ({user}) => {
  
  return (
    <>
      <Row align='top' justify='end' className='mini-logo'>
      <img src={logo}  className='logo'/>
      </Row>

      <Row justify='space-between' align='top'>
        <Col>
          <Title className='dashboard'>Dashboard</Title>
          <Text type='secondary' className='subtitulo'>
            Bienvenido a Itesa, {user.name} :)
          </Text>
        </Col>
        <Col className='avatar'>
          <Avatar size={64} icon={<UserOutlined />} className='avatar' />
          <Text type='secondary'>{user.name} {user.lastName}</Text>
        </Col>
      </Row>
    </>
  );
};
