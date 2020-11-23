import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import {authUser} from '../../auth/auth'
import { Layout,Row } from 'antd';
import Sidebar from '../components/sidebar'
import HeaderComponent from '../components/header'

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
                <Content className='content-user'>
                   <Row className='content-row'>
                       ofertas / proximo pago / mi banco
                   </Row>
                   <Row className='content-row'>  
                        pagos
                   </Row>
                </Content>
            </Layout>
        </Layout>
    )
    

}