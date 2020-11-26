import React from "react";
import Briefing from "../../views/briefing.svg";
import { Modal, Button, Card, Form, Input, Select } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

function NewProject({
  handleChangeName,
  handleChangeTerm,
  handleChangeStatus,
  handleChangeStartDate,
  handleChangeEndDate,
  handleSubmit,
  status,
  closeModal,
  success,
  openModal,
  modal,
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
    <div className="Modal">
      <Card className="admin-cards" onClick={openModal}>
        <img src={Briefing} className="icono-sider" />
        <div className="admin-button">
          <h4 style={{ color: "#9e39ff" }}>Crear proyecto nuevo</h4>
        </div>
      </Card>

      <Modal
        title="Modal invite"
        visible={modal}
        okText="Crear Proyecto"
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{
          style: { backgroundColor: "#9e39ff", border: "none" },
          shape: "round",
        }}
        onCancel={closeModal}
        onOk={success}
        closeIcon={<CloseCircleOutlined style={{ color: "#9e39ff" }} />}
        bodyStyle={{ color: "#9e39ff" }}
      >
        <h2>Crear Proyecto </h2>
        <Form
          {...layout}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Nombre del Proyecto"
            name="name"
            onChange={handleChangeName}
            rules={[
              {
                required: true,
                message: "Por favor ingrese Nombre del Proyecto",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Duración"
            name="term"
            onChange={handleChangeTerm}
            rules={[
              {
                required: true,
                message: "Por favor ingrese duración del Proyecto",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Inicio"
            name="startDate"
            onChange={handleChangeStartDate}
            rules={[
              { required: true, message: "Por favor ingrese fecha de inicio" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Finalización"
            name="endDate"
            onChange={handleChangeEndDate}
            rules={[
              {
                required: true,
                message: "Por favor ingrese fecha de finalizacion",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Estado"
            name="status"
            onChange={handleChangeStatus}
            rules={[{ required: true }]}
          >
            <Select onChange={handleChangeStatus} allowClear>
              <Option value="ondevolpment">On Devolpment </Option>
              <Option value="finished"> Finished </Option>
            </Select>
          </Form.Item>
          {/* 
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Crear Proyecto
          </Button>
        </Form.Item> */}
        </Form>
      </Modal>
    </div>
  );
}

export default NewProject;
