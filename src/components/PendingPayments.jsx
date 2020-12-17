import React, { useState } from "react";
// Ant-Desing
import { Button, Row, Col, Avatar, Card, Typography, Pagination } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import AddPaymentContainer from "../containers/AddPaymentContainer";
import AddSinglePaymentContainer from "../containers/AddSinglePaymentContainer";
import ExcelDownload from "./ExcelDownload";

const { Title } = Typography;

export default ({ pendingPayments, setItem }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);
  const numEachPage = 4;

  const handleChange = (value) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue(value * numEachPage);
    setCurrentPage(value);
  };

  return (
    <>
      <div className='div-excel'>
        <Title level={3} style={{ width: "100%" }}>
          Pagos a realizar este mes
        </Title>
        <ExcelDownload pendingPayments={pendingPayments} />
        <Button onClick={() => setItem(7)}>Todos los pagos</Button>
      </div>
      <div>
        {pendingPayments.length > 0 &&
          pendingPayments.slice(minValue, maxValue).map((payment, index) => {
            if (!payment.user) {
              return <div></div>;
            }
            return (
              <Card
                key={index}
                className='paymentCards-card'
                style={{
                  borderRadius: 25,
                  marginBottom: 15,
                  boxShadow: "-5px 5px lightgray",
                }}>
                <Row className='paymentsCards' align='middle'>
                  <Col className='gutter-row' span={2}>
                    <Avatar
                      size={55}
                      src={payment.user && payment.user.avatar}
                      className='avatar'
                    />
                  </Col>
                  <Col span={3}>
                    <h1>${payment.monto}</h1>
                  </Col>
                  <Col span={3}>
                    <p style={{ color: "#9e39ff", margin: 0 }}>Proyecto:</p>
                    <p style={{ margin: 0 }}> {payment.projectName}</p>
                  </Col>
                  <Col className='gutter-row' span={3}>
                    <p style={{ color: "#9e39ff", margin: 0 }}>Factura:</p>
                    <p style={{ margin: 0 }}> {payment.cuota}</p>
                  </Col>
                  <Col className='gutter-row' span={3}>
                    <p style={{ color: "#9e39ff", margin: 0 }}>
                      Fecha de pago:
                    </p>
                    <p style={{ margin: 0 }}> {payment.fecha}</p>
                  </Col>
                  <Col className='gutter-row' span={3}>
                    <p style={{ color: "#9e39ff", margin: 0 }}>Perfil:</p>
                    <p style={{ margin: 0 }}>
                      {" "}
                      {`${payment.user.name} ${payment.user.lastName}`}
                    </p>
                  </Col>
                  <Col className='gutter-row' span={4}>
                    <Button className='list-button-paymentsFree' shape='round'>
                      Ver pago <DownloadOutlined />
                    </Button>
                  </Col>
                  <Col className='gutter-row' span={3}>
                    <AddSinglePaymentContainer payment={payment} />
                  </Col>
                </Row>
              </Card>
            );
          })}
        <div
          style={{ display: "flex", justifyContent: "flex-end", margin: 20 }}>
          <Pagination
            //defaultCurrent={1}
            current={currentPage}
            defaultPageSize={numEachPage}
            total={pendingPayments.length}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
