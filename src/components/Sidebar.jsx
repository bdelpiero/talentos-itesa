import React from "react";
import { Link } from "react-router-dom";
import {Layout, Menu } from "antd";
import { BarChartOutlined, HomeOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons';

export default ({ logout, history }) => {
  const { Sider } = Layout
  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        className='sider-admin'
        trigger={null}
      >
        <Menu 
        mode="inline" 
        defaultSelectedKeys={['4']} 
        onClick={({ item, key, keyPath, domEvent }) => {
          if(key == 1) history.push('/admin')
          if(key == 2) history.push('/admin/projects')
          // if(key == 3) history.push('/admin/freelancers')
          // if(key == 4) logout().then(()=> history.push('/login'))
        }}
        >
          <Menu.Item key="1" className='sider-cards'>
            <div>
              <HomeOutlined className='icon-sider-buttons ' />
              <p className='text-sider-buttons' >Home</p>
            </div>
          </Menu.Item>
            <Menu.Item key="2" className='sider-cards'>
              <div>
                <BarChartOutlined className='icon-sider-buttons ' />
                <p className='text-sider-buttons' >Proyectos</p>
              </div>
            </Menu.Item>
          <Menu.Item key="3" className='sider-cards'>
            <div>
              <TeamOutlined className='icon-sider-buttons ' />
              <p className='text-sider-buttons' >Perfiles</p>
            </div>
          </Menu.Item>
          <Menu.Item key="4" className='sider-cards'>
            <div>
              <LogoutOutlined className='icon-sider-buttons ' />
              <p className='text-sider-buttons' >Logout</p>
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
  );
};
