import React from "react";
import { Link } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { Form, Input, Select, Button, Steps, Alert } from "antd";
import {
  PDFViewer,
  pdf,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Contract from "../components/pdfs/Contract";

const styles = StyleSheet.create({
  viewer: {
    width: "75%",
    margin: "1rem",
    height: "45rem",
  },
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 30,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: "10pt",
  },
  subtitles: {
    fontSize: 10,
    textAlign: "justify",
    marginBottom: "10pt",
    fontWeight: "bold",
  },
  textContent: {
    fontSize: 10,
    textAlign: "justify",
    marginBottom: "10pt",
  },
  signature: {
    width: "30%",
    height: "auto",
    alignSelf: "center",
  },
  signatureTexts: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 10,
    marginBottom: "10pt",
  },
  martinSignature: {
    width: "30%",
    height: "auto",
    alignSelf: "center",
  },
});

const { Step } = Steps;

const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${name} is not a valid email!",
    number: "${name} is not a valid number!",
    password: "${name} please input your password!",
  },
};

function RegisterFreelancer({
  handleChange,
  handleSubmit,
  handleConfirm,
  data,
  bankData,
  step,
  signatureRef,
  handleClick,
  saveSignature,
  invited,
}) {
  return (
    <div className='register-formContainer'>
      {step == 1 && (
        <Form
          onFinish={handleConfirm}
          validateMessages={validateMessages}
          className='refister-form'>
          <h1 style={{ color: "gray", textAlign: "center" }}>Creá tu cuenta</h1>
          {!invited && (
            <Alert
              message='You must be invited in order to sign in'
              type='error'
              showIcon
              style={{ margin: 5 }}
            />
          )}
          <Form.Item
            hasFeedback
            name='freelancerType'
            value={data.freelancerType}
            onChange={handleChange}
            rules={[{ required: true, message: "Please select an option" }]}>
            <Select allowClear placeholder='Tipo de freelancer'>
              <Select.Option value='developer'>Developer</Select.Option>
              <Select.Option value='designer'>Designer</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='name'
            value={data.name}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Nombre' name='name' />
          </Form.Item>
          <Form.Item
            name='lastName'
            value={data.lastName}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Apellido' name='lastName' />
          </Form.Item>
          <Form.Item
            name='email'
            value={data.email}
            onChange={handleChange}
            rules={[
              {
                type: "email",
              },
            ]}>
            <Input placeholder='Email' name='email' />
          </Form.Item>
          <Form.Item
            name='password'
            value={data.password}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
              {
                min: 6,
                message: "Password must be minimum 6 characters.",
              },
            ]}>
            <Input.Password
              placeholder='Contraseña'
              name='password'
              style={{
                border: 0,
                borderBottomWidth: 0.3,
                borderBottomStyle: "solid",
                borderBottomColor: "lightgray",
              }}
            />
          </Form.Item>

          <Form.Item
            name='confirm'
            value={data.confirm}
            onChange={handleChange}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}>
            <Input.Password
              placeholder='Repetir Contraseña'
              name='confirm'
              style={{
                border: 0,
                borderBottomWidth: 0.3,
                borderBottomStyle: "solid",
                borderBottomColor: "lightgray",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ backgroundColor: "#a77ffa", border: 0 }}
              shape='round'
              block
              type='primary'
              htmlType='submit'
              className='register-button'>
              Confirmar
            </Button>
          </Form.Item>
          <div className='register-steps'>
            <Button shape='round' style={{ backgroundColor: "pink" }}>
              {" "}
            </Button>
            <Button shape='round'> </Button>
            <Button shape='round'> </Button>
          </div>
          <div className='register-link'>
            <Link to='/login' style={{ color: "gray" }}>
              Already have an account? Login
            </Link>
          </div>
        </Form>
      )}
      {step == 2 && (
        <Form
          onFinish={handleConfirm}
          validateMessages={validateMessages}
          className='refister-form'>
          <h1 style={{ color: "gray", textAlign: "center" }}>
            Registrá tus datos fiscales
          </h1>
          <Form.Item
            name='cuit'
            value={bankData.cuit}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Cuit' name='cuit' />
          </Form.Item>
          <Form.Item
            name='address'
            value={bankData.address}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Address' name='address' />
          </Form.Item>
          <Form.Item
            name='alias'
            value={bankData.alias}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Alias de cuenta' name='alias' />
          </Form.Item>
          <Form.Item
            name='bankName'
            value={bankData.name}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Banco' name='bankName' />
          </Form.Item>
          <Form.Item
            name='accountName'
            value={bankData.accountName}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Titular de cuenta' name='accountName' />
          </Form.Item>

          <Form.Item
            name='type'
            value={bankData.type}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Tipo de factura a emitir' name='type' />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ backgroundColor: "#a77ffa", border: 0 }}
              shape='round'
              block
              type='primary'
              htmlType='submit'
              className='register-button'>
              Confirmar
            </Button>
          </Form.Item>

          <div className='register-steps'>
            <Button shape='round'> </Button>
            <Button shape='round' style={{ backgroundColor: "orange" }}>
              {" "}
            </Button>
            <Button shape='round'> </Button>
          </div>
          <div className='register-link'>
            <Link to='/login' style={{ color: "gray" }}>
              Already have an account? Login
            </Link>
          </div>
        </Form>
      )}
      {step == 3 && (
        <div>
          <Contract
            show={true}
            name={data.name}
            lastName={data.lastName}
            cuit={bankData.cuit}
            address={bankData.address}
            freelancerType={data.freelancerType}
          />
          <br />
          <SignatureCanvas
            ref={signatureRef}
            velocityFilterWeight={0.3}
            penColor='black'
            canvasProps={{
              width: 400,
              height: 150,
              className: "sigCanvas",
              style: { border: "1px solid #000000" },
            }}
            onEnd={
              () =>
                saveSignature(
                  signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
                ) //base64
            }
          />
          <br />
          <button onClick={handleClick}> BLOB </button>
        </div>
      )}
    </div>
  );
}

export default RegisterFreelancer;
