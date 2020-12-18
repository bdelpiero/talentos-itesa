import React, { useState } from "react";

import { Modal, Button, Typography, Select, Upload } from "antd";

import {
  CloseCircleOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Dragger } = Upload;
const { Option } = Select;
const { Title } = Typography;

function AddSinglePayment({
  closeModal,
  success,
  openModal,
  modal,
  form,
  setFileUrl,
  fileUrl,
}) {
  const [dragger, setDragger] = useState(false);
  const [boton, setBoton] = useState(true);

  const props = {
    name: "file",
    onChange(info) {
      setFileUrl(info);
      setBoton(false);
      setDragger(true);
    },
  };

  return (
    <div className="Modal">
      <Button
        onClick={openModal}
        style={{ borderRadius: "32px" }}
        id="list-button-paymentsList"
      >
        Pago
      </Button>
      <Modal
        visible={modal}
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
        onCancel={closeModal}
        closeIcon={<CloseCircleOutlined className="close-button" />}
        width={600}
      >
        <div id="modal-invoice">
          <Title level={3}> Adjuntar Comprobante </Title>
          {!dragger ? (
            <Dragger {...props} className="modal-factura-dragger">
              <p className="ant-upload-drag-icon">
                <PlusOutlined style={{ fontSize: "4rem", color: "#9e39ff" }} />
              </p>
              <p className="ant-upload-text">Arrastra o carga tu factura acá</p>
            </Dragger>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "80%",
                width: "80%",
                border: "dashed",
                borderColor: "green",
                padding: "25px",
              }}
            >
              <p style={{ margin: "0" }}>
                {" "}
                Uploaded File: {fileUrl.file.name}{" "}
              </p>
              <DeleteOutlined
                style={{ fontSize: "1rem", color: "red" }}
                onClick={() => {
                  setFileUrl({});
                  setDragger(false);
                }}
              />
            </div>
          )}
          <Button
            shape="round"
            className="freelancer-card-buttons"
            id="cargar-factura-button"
            onClick={success}
            // disabled={disable}
          >
            Pago
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default AddSinglePayment;
