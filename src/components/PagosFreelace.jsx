import React, { Component } from "react";
// Ant-Desing
import { Button, Radio, Card, Row, Col, List, Avatar } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DownloadOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

const data = [
  {
    valor: "$80.000",
  },
  {
    valor: "$20.000",
  },
  {
    valor: "$80.000",
  },
  {
    valor: "$20.000",
  },
];

class PagosFreelace extends Component {
  render() {
    return (
      <>
          <Title level={3} style={{width: '100%'}}>
            Pagos 
          </Title> 
          <Card className="Payments" >       
          <List           
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.valor}>                
                <List.Item.Meta                
                  avatar={ 
                  <Avatar
                    className='avatar-payments'
                    id="avatar-payments"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                  }
                  title={item.valor}
                  description={
                      <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='list-description'>
                          <p>Proyecto:</p>
                          <p>ITS202|Satapp</p>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}className='list-description'>
                          <p>Factura:</p>
                          <p>1 de 4</p>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='list-description'>
                          <p>Fecha de pago:</p>
                          <p>02/05/2020</p>
                        </Col>
                      </Row>
                  }
                />
                <Button className="list-button-payments" shape="round">
                  Ver comprobante de pago <DownloadOutlined />{" "}
                </Button>
                
              </List.Item>
            )}
          />
      </Card>
      </>
    )
  }
}

export default PagosFreelace;


