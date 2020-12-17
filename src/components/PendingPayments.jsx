import React, { useState } from "react";
// Ant-Desing
import {
  Button,
  Row,
  Col,
  Avatar,
  Card,
  Typography,
  Pagination,
  Table,
  Dropdown,
  Menu,
} from "antd";
import { DownloadOutlined, EllipsisOutlined } from "@ant-design/icons";
import AddPaymentContainer from "../containers/AddPaymentContainer";
import AddSinglePaymentContainer from "../containers/AddSinglePaymentContainer";
import ExcelDownload from "./ExcelDownload";

const { Title } = Typography;

export default ({ pendingPayments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);
  const numEachPage = 4;

  const handleChange = (value) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue(value * numEachPage);
    setCurrentPage(value);
  };
  function menu(payment) {
    return (
      <Menu>
        <Menu.Item>
          <div>
            <Button
              className="modal-button2"
              /*    onClick={() => handleClick(proyecto)} */
            >
              {" "}
              VER MÁS{" "}
            </Button>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div>
            <AddSinglePaymentContainer payment={payment} />
          </div>
        </Menu.Item>
        <Menu.Item>
          <Button className="modal-button2">ESTADO</Button>
        </Menu.Item>
      </Menu>
    );
  }

  return (
    <>
      <div className="div-excel">
        <Title level={3} style={{ width: "100%" }}>
          Pagos a realizar este mes
        </Title>
        <ExcelDownload pendingPayments={pendingPayments} />
      </div>

      <div>
        {pendingPayments.length > 0 &&
          pendingPayments.slice(minValue, maxValue).map((payment) => {
            if (!payment.user) {
              return <div></div>;
            }
            return (
              <div className="prueba paymentCards-card">
                <Row align={"middle"} className="prueba1" gutter={24}>
                  <Col xs={4} sm={4} md={4} lg={1} span={1}>
                    <Avatar src={payment.user && payment.user.avatar}></Avatar>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={2} span={2}>
                    {"$" + payment.monto}
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={2} span={2}>
                    <p style={{ color: "#9e39ff", margin: 0 }}>Freelancer:</p>
                    <p style={{ margin: 0 }}>
                      {" "}
                      {payment.user.name + "" + payment.user.lastName}
                    </p>
                  </Col>

                  <Col xs={4} sm={4} md={4} lg={2} span={2}>
                    <p style={{ color: "#9e39ff", margin: 0 }}>Proyecto:</p>
                    <p style={{ margin: 0 }}> {payment.projectName}</p>
                  </Col>
                  <Col
                    className="hide-button"
                    xs={4}
                    sm={4}
                    md={4}
                    lg={2}
                    span={2}
                  >
                    <p style={{ color: "#9e39ff", margin: 0 }}>Factura:</p>
                    <p style={{ margin: 0 }}>{payment.cuota}</p>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={3}
                    className="hide-button"
                    span={3}
                  >
                    <p style={{ color: "#9e39ff", margin: 0 }}>
                      Fecha de pago:
                    </p>
                    <p style={{ margin: 0 }}> {payment.fecha}</p>
                  </Col>
                  <Col
                    xs={1}
                    sm={1}
                    md={1}
                    lg={4}
                    className="hide-button"
                    span={4}
                  >
                    <AddSinglePaymentContainer payment={payment} />
                  </Col>
                  <Col xs={1} sm={1} md={1} lg={4} span={4}>
                    {" "}
                    <Button
                      className="list-button-paymentsFree hide-button"
                      shape="round"
                    >
                      Ver pago <DownloadOutlined />
                    </Button>
                  </Col>
                  <Col xs={1} sm={1} md={1} lg={4} span={4}>
                    {" "}
                    <Button
                      className="list-button-paymentsFree hide-button"
                      shape="round"
                    >
                      Ver pago <DownloadOutlined />
                    </Button>
                  </Col>
                  <div className="show-ellipsis">
                    <Col xs={2} sm={2} md={2} lg={4} span={4}>
                      {" "}
                      <Dropdown overlay={menu(payment)} placement="bottomLeft">
                        <EllipsisOutlined className="single-icon" />
                      </Dropdown>
                    </Col>
                  </div>
                </Row>
              </div>
            );
          })}
        <div
          style={{ display: "flex", justifyContent: "flex-end", margin: 20 }}
        >
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
