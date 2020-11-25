import React from 'react'
import {Card,Row,Col} from 'antd'
import {RightCircleOutlined } from '@ant-design/icons';

export default ({handleLogout})=>{
    return (
    <div>   
        <Card bordered={false} title="TU RESUMEN" bordered={false} >
            <h3></h3>
            
            <Row gutter={24}>
            <Col span={8}>
            Proyectos on going
            </Col>
            <Col span={8}>
            Pagos pendientes
            </Col>
            <Col span={8}>
            Proyectos totales
            </Col>
            </Row>
            <hr/>
            <h6> RECORDATORIO </h6>
            <RightCircleOutlined />
        </Card>
        </div>
    )
}

