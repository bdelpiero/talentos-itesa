import React from "react";
// Ant-Desing
import { Button, Row, Col, Avatar, Card,Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import AddPaymentContainer from "../containers/AddPaymentContainer"

const { Title } = Typography;

export default ({pendingPayments }) => {
  return (
    <>
      <Title level={3} style={{ width: "100%" }}>
        Pagos a realizar este mes
      </Title>
      {pendingPayments &&
        pendingPayments.map((payment) => {
          return (
            <Card>
              <Row className="paymentsCards">
                <Col className="gutter-row" span={2}>
                  <Avatar size={55} src={payment.user.avatar} className="avatar" />
                </Col>
                <Col span={3}>
                  <h1>${payment.monto}</h1>
                  <b style={{ color: "#9e39ff" }}>Proyecto:</b>
                  <b> {payment.projectName}</b>
                </Col>
                <Col className="gutter-row" span={3}>
                  <b style={{ color: "#9e39ff" }}>Factura:</b>
                  <b> {payment.cuota}</b>
                </Col>
                <Col className="gutter-row" span={3}>
                  <b style={{ color: "#9e39ff" }}>Fecha de pago:</b>
                  <b> {payment.fecha}</b>
                </Col>
                <Col className="gutter-row" span={3}>
                  <b style={{ color: "#9e39ff" }}>Perfil:</b>
                  <b> {`${payment.user.name} ${payment.user.lastName}`}</b>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Button className="list-button-paymentsFree" shape="round">
                    Ver comprobante de pago <DownloadOutlined />
                  </Button>
                </Col>
                <Col className="gutter-row" span={4}>
                  <AddPaymentContainer/>
                </Col>
              </Row>
            </Card>
          );
        })}
    </>
  );
};
