import React from 'react'
import {Card,Row,Col} from 'antd'
import {LogoutOutlined,BarChartOutlined,HomeOutlined} from '@ant-design/icons';

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
        </Card>
        </div>
    )
}


// import { Card, Col, Row } from 'antd';

// ReactDOM.render(
//   <div className="site-card-wrapper">
//     <Row gutter={16}>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//     </Row>
//   </div>,
//   mountNode,
// );