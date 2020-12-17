import React, { useState } from "react";

import {
  Modal,
  Button,
  Card,
  Select,
  AutoComplete,
  Row,
  Col,
  Upload,
} from "antd";

import {
  CloseCircleOutlined,
  PlusOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  DashOutlined,
} from "@ant-design/icons";
import SeePaymentsContainer from "../containers/SeePaymentsContainer";

const { Dragger } = Upload;
const { Option } = Select;

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
        width={800}
      >
        <div style={{ width: "70%", marginLeft: "70px" }}>
          <h1>Pagos</h1>
        </div>
        <div>
          {myPayments.map((payment) => {
            return (
              <Card>
                <Row>
                  <Col span={6}>
                    <h5 style={{ color: "grey", marginLeft: "70px" }}>
                      PROYECTO : 
                    </h5>
                    <h5 style={{ color: "grey", marginLeft: "70px" }}>
                    {payment.projectName}
                    </h5>
                    
                    </Col>
                    <Col span={6}>
                    <h5 style={{ color: "grey", marginLeft: "70px" }}>
                      Cuota: 
                    </h5>
                    <h5 style={{ color: "grey", marginLeft: "70px" }}>
                    {payment.cuota}
                    </h5>
                    </Col>
                    <Col span={6}>
                    <h5 style={{ color: "grey", marginLeft: "70px" }}>
                      Estado:
                    </h5>
                    <h5 style={{ color: "grey", marginLeft: "70px" }}>
                    {payment.state}
                    </h5>
                    </Col>
                    <Col span={6}>
                    <div >
                      <button type="submit">
                        Ver Comprobante
                      </button>
                    </div>

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
