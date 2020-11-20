
import { Route, Switch,Link } from 'react-router-dom'
import RegisterFreelancerContainer from './containers/RegisterFreelancerContainer'
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { useRecoilState } from "recoil";
import { userName } from "./atoms";
import { db } from "../firebase/firebase"
import LoginContainer from './containers/loginContainer'
import { AuthProvider } from '../auth/auth'
import { Layout, Menu, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const {Title} =Typography


function App() {

  return (

    <AuthProvider>
      <Layout className="layout">
        <Header>
          <div className="logo"><Title level={3} className='titulo' >ITESA</Title></div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className='navbar'>
            <Menu.Item key="1"><Link to='/home'>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/register'>Register</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/login'>Login</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/admin'>Admin</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
                <Route exact path='/register' component={RegisterFreelancerContainer} />
                <Route exact path='/login' component={LoginContainer} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Talentos ITESA ©2020 Created by Plataforma 5</Footer>
      </Layout>
            
    </AuthProvider>

  )
}

export default App;
