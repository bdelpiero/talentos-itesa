import React, { Component } from "react";
// Ant-Desing
import { Button, Row, Col, List, Avatar, Card } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

export default ({user}) => {
    return (
      <>
          <Title level={3} style={{width: '100%'}}>
            Pagos a realizar este mes
          </Title>
          <Card >          
            <Row className="paymentsCards">  
            <Col className="gutter-row" span={2} >
            <Avatar size={55} src={user.avatar} className='avatar' />
              </Col>          
            <Col  span={4} >              
            <h1>80.000</h1>        
              <b style={{color:"#9e39ff"}}>Proyecto:</b>
              <b>ITS202|Satapp</b>
            </Col>
            <Col className="gutter-row"  span={6}>
              <b style={{color:"#9e39ff"}}>Factura:</b><b>1 de 4</b>              
            </Col>
            <Col 
            className="gutter-row"  
            span={6}
            >
              <b style={{color:"#9e39ff"}}>Fecha de pago:</b>
              <b>02/05/2020</b>
            </Col> 
            <Col className="gutter-row" span={6}> 
            <Button 
            className="list-button-paymentsFree" 
            shape="round"
            >
            Ver comprobante de pago <DownloadOutlined />
          </Button> 
          </Col> 
            </Row>                              
          </Card>  
      </>
    )
  }



