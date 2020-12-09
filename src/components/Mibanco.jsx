import React from "react";

import { Modal, Button, Card, Form, Input, Select, DatePicker } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

function MiBanco({
  handleChangeBank,
  closeModal,
  success,
  openModal,
  modal,
  form
}) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className='Modal card-button-container'>
      <Button onClick={openModal} className="modal-button buttonCard">
        Modificar Datos
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
      >
        <div className="modal-style">
          <h1>MI BANCO</h1>
          <p style={{ color: "grey" }}>
            Ingrese los datos que desea cambiar
          </p>
        </div>
        <br/>
        <Form
          {...layout}
          initialValues={{ remember: true }}
          onFinish={success}
          // onFinishFailed={onFinishFailed}
        >
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            Banco
          </h5>
          <Form.Item
            className="modal-formularios"
            name="name"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Por favor ingrese Nombre del Banco ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            Name
          </h5>
          <Form.Item
            className="modal-formularios"
            name="name"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Por favor ingrese Nombre del titular",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            alias
          </h5>
          <Form.Item
            className="modal-formularios"
            name="name"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Por favor ingrese Nombre ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            Cuit
          </h5>
          <Form.Item
            className="modal-formularios"
            name="name"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Por favor ingrese cuit valido ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
          Tipo de Factura
          </h5>
          <Form.Item
            className="modal-formularios"
            name="name"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Por favor ingrese tipo de factura ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            Direccion
          </h5>
          <Form.Item
            className="modal-formularios"
            name="name"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Ingrese direccion",
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <div className="modal-input">
            <button className="ok-button" type="submit">
              Actualizar Datos
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default MiBanco;
