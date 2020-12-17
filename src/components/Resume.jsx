import React from 'react'
import ExcelDownload from "./ExcelDownload";
import {Card,Row,Col, Divider,Button} from 'antd'
import {RightCircleOutlined } from '@ant-design/icons';

export default ({ pendingPayments, setItem,totalProject,pendingProjects,totalPagos })=>{
    
    return (
    <div>
        <Card className='resumen-card'>
            <Row className='resumen-title'>
            TU RESUMEN
            </Row>
            <Divider style={{margin: '1rem auto'}}/>
            <Row gutter={24}>
            <Col span={8} className='resumen-col' style={{padding: 0}}>
            <p className='resumen-card-title' >{pendingProjects}</p>
            <p className='resumen-text'> Proyectos on going </p>
            </Col>
            <Col span={8} className='resumen-col' style={{padding: 0}}>
            <p className='resumen-card-title' >${totalPagos}</p>
            <p className='resumen-text'> Pagos pendientes </p>
            </Col>
            <Col span={8} className='resumen-col' style={{padding: 0}}>
            <p className='resumen-card-title' >{totalProject}</p>
            <p className='resumen-text'> Proyectos totales</p>
            </Col>
            <Divider style={{margin: '1rem auto'}}/>
            </Row>
            <Row className='resumen-recordatorio' >
            <ExcelDownload pendingPayments={pendingPayments} />
        <Button style={{width:"150px !important", margin:"5px"}} className="modal-button2"
        onClick={() => setItem(7)}>Todos los pagos
        </Button>
            </Row>
        </Card>
    </div>
    )
}

