import React from 'react'
import {Card,Row,Col} from 'antd'
import {LogoutOutlined,BarChartOutlined,HomeOutlined} from '@ant-design/icons';

export default ({handleLogout})=>{
    return (<>
        <Row justify="end" className='sider-user-row' >
        <div className='logout'>
          
        <Card className='card-sider'>
        <HomeOutlined className='icono-sider'/>
            <h3>Home</h3>
        </Card>
        <Card className='card-sider'>
            <BarChartOutlined className='icono-sider'/>
            <h3>Mis Proyectos</h3>
        </Card>
        </div>
       
        <Row  className='logout' align="bottom">
        <Card className='card-sider' onClick={handleLogout}>
            <LogoutOutlined className='icono-sider'/>
            <h3>Logout</h3>
        </Card>
        </Row>
      
        </Row>
        
        </>
    )
}