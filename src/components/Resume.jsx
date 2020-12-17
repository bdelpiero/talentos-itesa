import React from 'react'
import ExcelDownload from "./ExcelDownload";
import {Card,Row,Col, Divider,Button} from 'antd'
import {RightCircleOutlined } from '@ant-design/icons';

export default ({ pendingPayments, setItem })=>{
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
            <ExcelDownload pendingPayments={pendingPayments} />
        <Button className="modal-button"
        onClick={() => setItem(7)}>Todos los pagos
        </Button>
            </Row>
        </Card>
    </div>
    )
}

