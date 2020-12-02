import React, { Component } from "react";
// Ant-Desing
import { Button, Row, Col, List, Avatar } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

const data = [
  {
    valor: "$50.000",
  },
  {
    valor: "$80.000",
  },
];

class PendingPayments extends Component {
  render() {
    return (
      <div style={{width: '100%'}}>
          <Title level={3} style={{width: '100%'}}>
            Pagos a realizar este mes
          </Title>
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
                        <Col span={8} className='list-description'>
                          <p>Proyecto:</p>
                          <p>ITS202|Satapp</p>
                        </Col>
                        <Col span={8} className='list-description'>
                          <p>Factura:</p>
                          <p>1 de 4</p>
                        </Col>
                        <Col span={8} className='list-description'>
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
      </div>
    )
  }
}

export default PendingPayments;
