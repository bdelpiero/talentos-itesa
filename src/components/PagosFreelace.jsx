import React, { Component } from 'react';
// Ant-Desing
import { Button, Radio, Card, DatePicker, InputNumber, Row, Col, Space } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { DownloadOutlined } from '@ant-design/icons';



export class PagosFreelace extends Component {
  render() {
    return (
      <div className="container">

        <h2>Pagos</h2>
        <Card className="bodyCard2" >
          <div className="space-align-container">
            <div className="space-align-block">
            <h3 className="textPagos">$ 80.000</h3>
              <img id="imgPagos" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"></img>
            <Row justify="end">                                          
                <Col span={5}>
                  <p className="subtittle2">Proyecto:</p>
                  <p className="text2">ITS202|Satapp</p>
                </Col>
                <Col span={5}>
                  <p className="subtittle2">Factura:</p>
                  <p className="text2">1 de 4</p>
                </Col>
                <Col span={5}>
                  <p className="subtittle2">Fecha de pago</p>
                  <p className="text2">02/05/2020</p>
                </Col>
                <Col span={5}>
                <Button className="buttonPagos" shape="round" >Ver comprobante de pago <DownloadOutlined /> </Button>
                </Col>
              </Row>
            </div>            
          </div>
        </Card>
      </div>
    )
  }
}

export default PagosFreelace





