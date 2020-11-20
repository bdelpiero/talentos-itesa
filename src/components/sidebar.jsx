import React from 'react'
import {Card,Row,Col} from 'antd'
import {LogoutOutlined,BarChartOutlined,HomeOutlined} from '@ant-design/icons';

export default ({handleLogout})=>{
    return (<>
       
        <Card className='card-sider'>
        <HomeOutlined className='icono-sider'/>
            <h3>Home</h3>
        </Card>
        <Card className='card-sider'>
            <BarChartOutlined className='icono-sider'/>
            <h3>Mis Proyectos</h3>
        </Card>
    
        <Card className='card-sider logaut' onClick={handleLogout}>
            <LogoutOutlined className='icono-sider'/>
            <h3>Logout</h3>
        </Card>
    
        
        </>
    )
}