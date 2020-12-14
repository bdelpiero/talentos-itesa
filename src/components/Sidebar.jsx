import React from "react";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";
import { Layout, Menu } from "antd";
import {
  BarChartOutlined,
  HomeOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default ({ handleLogout, setItem }) => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const { Sider } = Layout;

  return (
    <Sider
      width='150px'
      breakpoint="lg"
      collapsedWidth="0"
      className="sider-admin"
      trigger={null}
    >
      <Menu
        className='list-menu-sider '
        mode="vertical"
        defaultSelectedKeys={["1"]}
        onClick={({ item, key, keyPath, domEvent }) => { if (key == 4) handleLogout()}}
      >
        <Menu.ItemGroup>
        <Menu.Item key="1" className="sider-cards" onClick={() => setItem(1)}>
          <div className="sider-buttons">
            <HomeOutlined className="icon-sider-buttons " />
            <p className="text-sider-buttons">Home</p>
          </div>
        </Menu.Item>

        {currentUser.isAdmin ? (
        <Menu.Item key="2" className="sider-cards" onClick={() => setItem(2)}>
          <div className="sider-buttons">
            <BarChartOutlined className="icon-sider-buttons " />
            <p className="text-sider-buttons">Proyectos</p>
          </div>
        </Menu.Item>
        ) : (
          <Menu.Item key="2" className="sider-cards" onClick={() => setItem(2)}>
          <div className="sider-buttons">
            <BarChartOutlined className="icon-sider-buttons " />
            <p className="text-sider-buttons"> Mis Proyectos</p>
          </div>
        </Menu.Item>
        )}
        
        {currentUser.isAdmin ? (
          <Menu.Item key="3" className="sider-cards" onClick={() => setItem(5)}>
            <div className="sider-buttons">
              <TeamOutlined className="icon-sider-buttons " />
              <p className="text-sider-buttons">Perfiles</p>
            </div>
          </Menu.Item>
        ) : null}
        </Menu.ItemGroup>
        <Menu.ItemGroup>
        <Menu.Item key="4" className="sider-cards" id="logout">
          <div className="sider-buttons">
            <LogoutOutlined className="icon-sider-buttons " />
            <p className="text-sider-buttons">Logout</p>
          </div>
        </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};
