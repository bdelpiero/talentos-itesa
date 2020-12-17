import React from "react";
import { cbu } from 'arg.js'

import { Modal, Button, Card, Form, Input, Select, DatePicker, Alert } from "antd";
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
    <div>
      <Button 
      onClick={openModal} 
      shape='round'
      className="freelancer-card-buttons"
      >
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
            name="bankName"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Por favor ingrese Nombre del Banco ",
              },
            ]}
          >
            <Input  placeholder='Banco' name="bankName"/>
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            Name
          </h5>
          <Form.Item
            className="modal-formularios"
            name="accountName"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Por favor ingrese Nombre del titular",
              },
            ]}
          >
            <Input name="accountName" placeholder='Nombre'/>
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            Alias
          </h5>
          <Form.Item
            className="modal-formularios"
            name="alias"
            onChange={handleChangeBank}
            rules={[
              {
                required: true,
                message: "Por favor ingrese Alias ",
              },
            ]}
          >
            <Input placeholder='Alias' name="alias"/>
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            Cuit
          </h5>
          <Form.Item
            className="modal-formularios"
            name="cuit"
            onChange={handleChangeBank}
            rules={[
              () => ({
                validator(rule, value) {
                  const regExp = new RegExp( /\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]/g )
                  const test = regExp.test(value)
                  if(value == undefined) {
                    return Promise.reject("CUIT is required");
                  } else if (value.length > 11) {
                    return Promise.reject("CUIT cannot be longer than 11 characters");
                  }else {
                    if (test) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Enter a valid CUIT");
                  }
                }
              })
            ]}
          >
            <Input placeholder='CUIT' name="cuit"/>
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
           Cbu
          </h5>
          <Form.Item
            className="modal-formularios"
            name="cbu"
            onChange={handleChangeBank}
            rules={[
              () => ({
                validator(rule, value) {
                  let test = cbu.isValid(value)
                  if(value == undefined) {
                    return Promise.reject("CBU is required");
                  } else {
                    if (test) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Enter a valid CBU");
                  }
                }
              }),
            ]}
          >
            <Input placeholder='CBU' name="cbu" />
          </Form.Item>
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
          Tipo de Factura
          </h5>
          <Form.Item
            className="modal-formularios"
            name="type"
            rules={[
              {
                required: true,
                message: "Por favor ingrese tipo de factura ",
              },
            ]}
          >
           <Select 
            onChange={handleChangeBank}
            name="type"
            placeholder='Tipo de factura a emitir'
            bordered={false}
            //className='register-input' 
            >
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
              <Option value="E">E</Option>
            </Select>            
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
