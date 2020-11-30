import React from "react";
import { Link } from "react-router-dom";
import { Card, Row } from "antd";
import {
  LogoutOutlined,
  BarChartOutlined,
  HomeOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export default ({ handleLogout }) => {
  return (
    <>
      <Row justify="end" className="sider-user-row">
        <div className="logout">
          <Card className="card-sider">
            <HomeOutlined className="icono-sider" />
            <h3>Home</h3>
          </Card>

          <Link to="/admin/projects">
            <Card className="card-sider">
              <BarChartOutlined className="icono-sider" />
              <h3>Proyectos</h3>
            </Card>
          </Link>

          <Card className="card-sider">
            <TeamOutlined className="icono-sider" />
            <h3>Perfiles</h3>
          </Card>
        </div>

        <Row className="logout" align="bottom">
          <Card className="card-sider" onClick={handleLogout}>
            <LogoutOutlined className="icono-sider" />
            <h3>Logout</h3>
          </Card>
        </Row>
      </Row>
    </>
  );
};
