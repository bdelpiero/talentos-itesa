import React, { useState } from "react";
import logo from "../../views/logo-itesa.svg";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Avatar, Layout } from "antd";
import EditUserContainer from "../containers/EditUserContainer";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";
const { Title, Text } = Typography;
import { Menu } from "antd";

const { Header } = Layout;

export default ({ item, project }) => {
  const [currentUser, setCurrentUser] = useRecoilState(user);

  return (
    <>
      {currentUser.isAdmin ? (
        <Header className="header-user">
          <Row align="center" justify="end" className="mini-logo">
            <img src={logo} className="logo" />
          </Row>
          <Row
            justify="space-between"
            align="center"
            wrap={true}
            className="header-title-row"
          >
            {item == 1 && (
              <span className="span-title">
                <Title level={1} className="header-title">
                  Dashboard
                </Title>
                <Text>Bienvenido a Itesa, {currentUser.name + " " + ":)"}</Text>
              </span>
            )}
            {item == 2 && (
              <span className="span-title">
                <Title level={1} className="header-title">
                  Todos los Proyectos
                </Title>
                <Text>{"Proyectos Itesa :)"}</Text>
              </span>
            )}
            {item == 3 && (
              <span className="span-title">
                <Title level={1} className="header-title">
                  Proyecto {project.name}
                </Title>
                <Text>{"Proyectos Itesa :)"}</Text>
              </span>
            )}

            {item == 5 && (
              <span className="span-title">
                <Title level={1} className="header-title">
                  Nuestra comunidad
                </Title>
                <Text>
                  Estos son todos los perfiles que tenemos disponibles
                </Text>
              </span>
            )}
            {item == 6 && (
              <span className="span-title">
                <Title level={1} className="header-title">
                  Perfil Freelancer{" "}
                </Title>
                <Text></Text>
              </span>
            )}

            <EditUserContainer
              user={currentUser}
              setCurrentUser={setCurrentUser}
              style={{ alignSelf: "center" }}
            />
          </Row>
        </Header>
      ) : (
        <Header className="header-user">
          <Row align="center" justify="end" className="mini-logo">
            <img src={logo} className="logo" />
          </Row>
          <Row
            justify="space-between"
            align="center"
            wrap={true}
            className="header-title-row"
          >
            {item == 1 && (
              <span className="span-title">
                <Title level={1} className="header-title">
                  Dashboard
                </Title>
                <Text>Bienvenido a Itesa, {currentUser.name + " " + ":)"}</Text>
              </span>
            )}

            {item == 2 && (
              <span className="span-title">
                <Title level={1} className="header-title">
                  Mis Proyectos
                </Title>
                <Text>
                  Mira todos los proyectos que hiciste con Itesa, vamos por mas
                  💪🏻
                </Text>
              </span>
            )}
            <EditUserContainer
              user={currentUser}
              setCurrentUser={setCurrentUser}
              style={{ alignSelf: "center" }}
            />
          </Row>
        </Header>
      )}
    </>
  );
};
