import React, {useState} from 'react';
import logo from "../../views/itesaBanana.png";
import { authUser } from "../../firebase/auth";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";

// STYLES 
import { Menu } from 'antd';
import {
  BarChartOutlined,
  TeamOutlined,
  LogoutOutlined,
  MenuOutlined,
  HomeOutlined
} from "@ant-design/icons";

export default ({ setItem }) => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const {logout} = authUser()
  const [menu,setMenu] = useState(false)

  const openMenu = () => {
    menu ? setMenu(false) : setMenu(true)
  }

  const handleClick = e => {
    if(e.key == 'home') {setItem(1), setMenu(false)} 
    if(e.key == 'proyectos') {setItem(2), setMenu(false)}
    if(e.key == 'perfiles') {setItem(5), setMenu(false)}
    if(e.key == 'logout') logout()
  };

    return (
    <div style={{width: '100%', marginBottom: '1rem'}}>
      <div style={{width: '100%'}} className='navbar-display'>
        <MenuOutlined className='navbar-burger' onClick={openMenu}/>

        <img src={logo} className='logo-navbar'/>
      </div>
      {menu && 
        <Menu 
          onClick={handleClick} 
          mode="vertical"
          triggerSubMenuAction='click'
          inlineIndent={10}
          className='navbar-menu'
          >
            <Menu.Item key="home" icon={<HomeOutlined/>} className='navbar-menu-item'>
              Home
            </Menu.Item>
            <Menu.Item key="proyectos" icon={<BarChartOutlined/>} className='navbar-menu-item'>
              Proyectos
            </Menu.Item>
            {
            currentUser.isAdmin &&
            <Menu.Item key="perfiles" icon={<TeamOutlined/>} className='navbar-menu-item'>
              Perfiles
            </Menu.Item>
            }
            <Menu.Item key="logout" icon={<LogoutOutlined/>} className='navbar-menu-item'>
              Logout
            </Menu.Item>
        </Menu>
      }
    </div>
    )
}