import React from "react";
import { Row, Col, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Logo from "../../views/logo-itesa.svg";

const { Title, Text } = Typography;

export default () => {
  return (
    <>
      <Row align='top' justify='end' className='mini-logo'>
        <Logo className='mini-logo' />
      </Row>

      <Row justify='space-between' align='top'>
        <Col>
          <Title className='dashboard'>Dashboard</Title>
          <Text type='secondary' className='subtitulo'>
            Bienvenido a Itesa, xxx
          </Text>
        </Col>
        <Col className='avatar'>
          <Avatar size={64} icon={<UserOutlined />} className='avatar' />
          <Text type='secondary'>nombre de usuario</Text>
        </Col>
      </Row>
    </>
  );
};
