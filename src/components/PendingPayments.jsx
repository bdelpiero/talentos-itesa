import React, { Component } from "react";
// Ant-Desing
import { Button, Row, Col, List, Avatar, Card } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { pagos, allUsersState } from "../atoms/index";
import { useRecoilValue } from "recoil";

import AddPaymentContainer from "../containers/AddPaymentContainer"

const { Title } = Typography;

export default ({ user }) => {
  const users = useRecoilValue(allUsersState)
  const paymentsInAtom = useRecoilValue(pagos);
  const pendingPayments = paymentsInAtom.pending.map((payment)=>{
    const usuario = users.filter((user)=> user.id == payment.userId)[0]
    const newPayment = {...payment, user: usuario }
    return newPayment
  })

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
