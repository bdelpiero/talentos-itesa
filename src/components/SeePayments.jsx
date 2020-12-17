import React, { useState } from "react";

import { Modal, Button, Card, Row, Col, Tooltip } from "antd";

import { CloseCircleOutlined } from "@ant-design/icons";

function SeePayments({
  closeModal,
  success,
  openModal,
  modal,
  form,
  myPayments,
}) {
  return (
    <div className="Modal">
      <Button
        onClick={openModal}
        className="modal-button buttonCard"
        style={{ backgroundColor: "#7513D3", color: "white" }}
      >
        Ver Pago
      </Button>

      <Modal
        visible={modal}
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
        onCancel={closeModal}
        onOk={success}
        closeIcon={<CloseCircleOutlined className="close-button" />}
        bodyStyle={{ color: "#9e39ff" }}
        width={700}
      >
        <div style={{ width: "70%", marginLeft: "30px" }}>
          <h1>Pagos</h1>
        </div>
        <div>
          {myPayments.map((payment) => {
            return (
              <Card
                style={{
                  borderRadius: 25,
                  marginBottom: 15,
                  boxShadow: "-1px 3px 15px -6px gray",
                }}
              >
                <Row>
                  <Col
                    span={6}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h5 style={{ color: "grey" }}>PROYECTO :</h5>
                    <h4>{payment.projectName}</h4>
                  </Col>
                  <Col
                    span={6}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h5 style={{ color: "grey" }}>CUOTA:</h5>
                    <h4>{payment.cuota}</h4>
                  </Col>
                  <Col
                    span={6}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h5 style={{ color: "grey" }}>ESTADO:</h5>
                    <h4>{payment.state}</h4>
                  </Col>
                  <Col
                    span={6}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {payment.state == "completed" ? (
                      <a
                        href={payment.comprobantePago}
                        target="_blank"
                        download
                      >
                        <Button
                          className="modal-button buttonCard buttonProjects botonPagos"
                          style={{
                            backgroundColor: "#9E39FF",
                            color: "white",
                            margin: "auto",
                          }}
                          shape="round"
                        >
                          Ver Comprobante
                        </Button>
                      </a>
                    ) : (
                      <Button
                        className="modal-button buttonCard buttonProjects"
                        style={{
                          backgroundColor: "lightgrey",
                          color: "white",
                          margin: "auto",
                        }}
                        shape="round"
                        disabled={true}
                      >
                        Pago Pendiente
                      </Button>
                    )}
                  </Col>
                </Row>
              </Card>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}

export default SeePayments;
