import React from 'react'
import {Card,Row,Col, Divider} from 'antd'
import {RightCircleOutlined } from '@ant-design/icons';

export default ()=>{
    return (
    <div>
        <Card className='resumen-card'>
            <Row className='resumen-title'>
            TU RESUMEN
            </Row>
            <Divider style={{margin: '1rem auto'}}/>
            <Row gutter={24}>
            <Col span={8} className='resumen-col' style={{padding: 0}}>
            <p className='resumen-card-title' >2</p>
            <p className='resumen-text'> Proyectos on going </p>
            </Col>
            <Col span={8} className='resumen-col' style={{padding: 0}}>
            <p className='resumen-card-title' >$ 1000</p>
            <p className='resumen-text'> Pagos pendientes </p>
            </Col>
            <Col span={8} className='resumen-col' style={{padding: 0}}>
            <p className='resumen-card-title' >100</p>
            <p className='resumen-text'> Proyectos totales</p>
            </Col>
            <Divider style={{margin: '1rem auto'}}/>
            </Row>
            <Row className='resumen-recordatorio'>
                <p style={{ color: '#9e39ff', fontSize: '0.5rem'}}>RECORDATORIO</p>
                <br/>
                <RightCircleOutlined />
            </Row>
        </Card>
    </div>
    )
}

