import React, { Component } from "react";
// Ant-Desing
import { Button, Radio, Card, Row, Col, List, Avatar } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DownloadOutlined } from "@ant-design/icons";

const data = [
  {
    valor: "$80.000",
  },
  {
    valor: "$80.000",
  },
];

class PendingPayments extends Component {
  render() {
    return (
      <>
        <Card className="bodyCard2">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      id="imgPagos"
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  }
                  title={
                    <a href="/freelance" className="titlePagos">
                      {item.valor}
                    </a>
                  }
                  description={
                    <Row justify="end">
                      <Col span={6}>
                        <p className="subtittle2">Proyecto:</p>
                        <p className="text2">ITS202|Satapp</p>
                      </Col>
                      <Col span={6}>
                        <p className="subtittle2">Factura:</p>
                        <p className="text2">1 de 4</p>
                      </Col>
                      <Col span={6}>
                        <p className="subtittle2">Fecha de pago</p>
                        <p className="text2">02/05/2020</p>
                      </Col>
                      <Col span={6}>
                        <Button className="buttonPagos2" shape="round">
                          Pagar Factura
                        </Button>
                      </Col>
                    </Row>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      </>
    );
  }
}

export default PendingPayments;
