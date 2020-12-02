import React from "react";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";
import {Layout, Menu } from "antd";
import { BarChartOutlined, HomeOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons';

export default ({ handleLogout, setItem }) => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const { Sider } = Layout
  console.log("buscando admin", currentUser.isAdmin)
  
  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        className="sider-admin"
        trigger={null}
      >
        <Menu
          className='ulList-sider'
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ item, key, keyPath, domEvent }) => {
            if (key == 1);
            if (key == 2);
            // if(key == 3) history.push('/admin/freelancers')
            if (key == 4) handleLogout();
          }}
        >
          <Menu.Item
            key="1"
            className="sider-cards"
            onClick={() => setItem(1)}
          >
            <div className='sider-bottons'>
              <HomeOutlined className="icon-sider-buttons " />
              <p className="text-sider-buttons">Home</p>
            </div>
          </Menu.Item>

          <Menu.Item
            key="2"
            className="sider-cards"
            onClick={() => setItem(2)}
          >
            <div className='sider-bottons'>
              <BarChartOutlined className="icon-sider-buttons " />
              <p className="text-sider-buttons">Proyectos</p>
            </div>
          </Menu.Item>
            {currentUser.isAdmin ?
          <Menu.Item key="3" className="sider-cards">
            <div className='sider-bottons'>
              <TeamOutlined className="icon-sider-buttons " />
              <p className="text-sider-buttons">Perfiles</p>
            </div>
          </Menu.Item>
               : null }
          <Menu.Item key="4" className="sider-cards" id='logout'>
            <div className='sider-bottons'>
              <LogoutOutlined className="icon-sider-buttons " />
              <p className="text-sider-buttons">Logout</p>
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
  );
};
