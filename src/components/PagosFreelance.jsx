import React, { Component } from "react";
// Ant-Desing
import { Button, Radio, Card, Row, Col, List, Avatar } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DownloadOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;



export default ({user})=>  {
  
    return (
      <>
      {/* className="list-description" */}
        <Title style={{ width: "100%" }}>
          Pagos
        </Title>
        
          <Card >          
            <Row gutter={{ xs: 6, sm: 8, md: 16, lg: 24 }}>  
            <Col className="gutter-row" span={2} >
            <Avatar size={55} src={user.avatar} className='avatar' />
              </Col>          
            <Col  span={4} >              
            <h1>80.000</h1>        
              <b>Proyecto:</b>
              <b>ITS202|Satapp</b>
            </Col>
            <Col className="gutter-row"  span={6}>
              <b>Factura:</b><b>1 de 4</b>              
            </Col>
            <Col 
            className="gutter-row"  
            span={6}
            >
              <b>Fecha de pago:</b>
              <b>02/05/2020</b>
            </Col> 
            <Col className="gutter-row" span={6}> 
            <Button 
            className="list-button-paymentsFree" 
            shape="round"
            style={{width:"80%", height:"auto"} }
            >
            Ver comprobante de pago <DownloadOutlined />
          </Button> 
          </Col> 
            </Row>                              
          </Card>       
      </>
    );
  
}

// export default PagosFreelace;
