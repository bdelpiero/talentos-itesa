import React from 'react';
import logo from "../../views/itesaBanana.png";
import { authUser } from "../../firebase/auth";

// STYLES 
import { Menu } from 'antd';

export default ({ setItem }) => {

  const {logout} = authUser()

  const handleClick = e => {
    console.log('click ', e.key);
    if(e.key == 'home') setItem(1)
    if(e.key == 'proyectos') setItem(2)
    if(e.key == 'perfiles') setItem(5)
    if(e.key == 'logout') logout()
  };

  return (
      <Menu 
      onClick={handleClick} 
      mode="horizontal"
      className='navbar-display'
      triggerSubMenuAction='click'
      >
        <div className='logo-navbar-container'>
          <img src={logo}  />
        </div>
        <Menu.Item key="home">
          Home
        </Menu.Item>
        <Menu.Item key="proyectos" >
          Proyectos
        </Menu.Item>
        <Menu.Item key="perfiles">
          Perfiles
        </Menu.Item>
        <Menu.Item key="logout">
          Logout
        </Menu.Item>
      </Menu>
  )
}