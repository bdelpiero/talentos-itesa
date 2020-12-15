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
      <Row justify="space-between"  align="center" wrap={true} className='header-title-row'>
        <span className='span-title'>
          <Title level={2} className='header-title'>Dashboard</Title>
          <Text>Bienvenido a Itesa, {currentUser.name + ' ' + ':)' }</Text>
        </span>
          <EditUserContainer
            user={currentUser}
            setCurrentUser={setCurrentUser}
            style={{alignSelf: 'center'}}
          />
      </Row>
       

    </Header>
  );
};
