import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import {authUser} from '../../auth/auth'
import { Layout,Row,Col } from 'antd';
import Sidebar from '../components/sidebar'
import HeaderComponent from '../components/header'
import PagosFreelace from '../components/PagosFreelace';
import CardsFreelace from '../components/MiBanco';
import OfertaProyectoContainer from './OfertaProyectoContainer';
import ProximoPagoContainer from './ProximoPagoContainer';
import MiBancoContainer from './MiBancoContainer';

const { Header, Footer, Sider, Content } = Layout;

export default()=>{
    const {logout,currentUser}=authUser()
    const history = useHistory()

    const handleLogout=()=>{
        logout()
        history.push("/")
}
console.log("userContainer",currentUser)


    return(
        <Layout>
            <Sider className='sider-user' justify='center'>
                <Sidebar handleLogout={handleLogout}/>
            </Sider>
            <Layout>
                <Header className='header-user'>
                    <HeaderComponent/>
                </Header>
                <Content className='content-user' /* gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }} */>                   
                       <Row  gutter={[32, 16]}  justify="space-around" >
                           <Col  span={8}>
                      <OfertaProyectoContainer/>
                      </Col >
                         <Col  span={8} >
                      <ProximoPagoContainer/>
                      </Col>
                         <Col  span={8}>
                      <MiBancoContainer/>
                      </Col>
                      </Row>
                      
                   <Row className='content-row'> 
                   <h1>Pagos</h1> 
                        <PagosFreelace/>
                   </Row>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Talentos ITESA ©2020 Created by Plataforma 5</Footer> */}
            </Layout>
        </Layout>
    )
    

}