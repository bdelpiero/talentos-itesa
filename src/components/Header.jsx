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

  return (
    <Header className='header-user'>
      <Row align='center' justify='end' className='mini-logo'>
        <img src={logo} className='logo' />
      </Row>
      <Row justify="space-between"  align="center" wrap={true}>
        <span>
          <Title className='header-title' level={2}>Dashboard</Title>
          <Text>Bienvenido a Itesa, {currentUser.name + ' '} :) </Text>
        </span>
          <EditUserContainer
            user={currentUser}
            setCurrentUser={setCurrentUser}
          />
      </Row>
    </Header>
  );
};
