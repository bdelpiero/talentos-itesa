import React from 'react';
import logo from "../../views/itesaBanana.png";
import { authUser } from "../../firebase/auth";

// STYLES 
import { Menu } from 'antd';
import {
  BarChartOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default ({ setItem }) => {

  const {logout} = authUser()

  const handleClick = e => {
    if(e.key == 'home') setItem(1)
    if(e.key == 'proyectos') setItem(2)
    if(e.key == 'perfiles') setItem(5)
    if(e.key == 'logout') logout()
  };

  return (
      <Menu 
      onClick={handleClick} 
      mode="inline"
      className='navbar-display'
      triggerSubMenuAction='click'
      inlineIndent={10}
      >
        <Menu.Item key="home" className='logo-navbar' >
          <img src={logo} className='logo-navbar'/>
        </Menu.Item>
        <Menu.Item key="proyectos" className='navbar-menu-item'>
          Proyectos
        </Menu.Item>
        <Menu.Item key="perfiles" className='navbar-menu-item'>
          Perfiles
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined/>} className='navbar-menu-item'>
          Logout
        </Menu.Item>
      </Menu>
  )
}