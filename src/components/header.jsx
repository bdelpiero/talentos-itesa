import React from 'react'
import {Row,Col,Typography,Avatar} from 'antd'
import {UserOutlined} from '@ant-design/icons';

const { Title ,Text} = Typography;
    

export default  ({handleLogout})=>{
    return (
    <>
       <Row align='top' justify='end' className='mini-logo'>
        Logo Itesa
       </Row>
       <Row justify='space-between'  align='top'>
        <Col>
        <Title className='dashboard'>Dashboard</Title>
        <Text type="secondary" className='subtitulo'>Bienvenido a Itesa, xxx :)</Text>
        </Col>
        <Col className='avatar'>
        <Avatar size={64} icon={<UserOutlined />} className='avatar' />
        <Text type="secondary" >nombre de usuario</Text>

        </Col>
       </Row>
        
    </>
    )
}