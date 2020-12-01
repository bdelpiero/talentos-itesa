import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Layout} from "antd";
import {
  LogoutOutlined,
  BarChartOutlined,
  HomeOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export default ({ handleLogout }) => {
  const {Sider} = Layout
  return (
      <Row justify="end" className="sider-user-row">
        <div className="sidebar-row">
          <Link to="/admin">
            <Card hoverable className="card-sider">
              <HomeOutlined className="icono-sider" />
              <br/>
              Home
            </Card>
          </Link>

          <Link to="/admin/projects">
            <Card  hoverable className="card-sider">
              <BarChartOutlined className="icono-sider" />
              <br/>
              Proyectos
            </Card>
          </Link>

          <Card hoverable className="card-sider">
            <TeamOutlined className="icono-sider" />
            <br/>
            Perfiles
          </Card>
        </div>

        <Row className="sidebar-row" align="bottom">
          <Card hoverable className="card-sider" onClick={handleLogout}>
            <LogoutOutlined className="icono-sider" />
            <br/>
            Logout
          </Card>
        </Row>
      </Row>
  );
};
