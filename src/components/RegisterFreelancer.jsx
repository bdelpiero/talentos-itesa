import React from "react";
import { Link } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { Form, Input, Select, Button, Steps, Alert } from "antd";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const { Step } = Steps;
const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
 
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
  setData,
  errorSignature,
  setErrorSignature,
  isLogin
}) {
  return (
    <div className='register-formContainer'>
      {step == 1 && (
        <Form
          onFinish={handleConfirm}
          // validateMessages={validateMessages}
          className='register-form'>
          <h1 style={{ color: "gray", textAlign: "center" }}>Creá tu cuenta</h1>
          {!invited && (
            <Alert
              message='The email address you provided is not invited to register'
              type='error'
              showIcon
              style={{ margin: 5 }}
            />
          )}
          <Form.Item
            hasFeedback
            name='freelancerType'
            rules={[{ required: true, message: "Please select an option" }]}
            >
            <Select
            onChange={(value) => {
              setData({...data, 'freelancerType': value});
            }}
            value={data.freelancerType} 
            allowClear 
            placeholder='Tipo de freelancer'
            >
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
                message: "Name is required"
              }
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
                message: "Last Name is required"
              }
            ]}>
            <Input placeholder='Apellido' name='lastName' />
          </Form.Item>
          <Form.Item
            name='email'
            value={data.email}
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: "Email is required",
              },
              {
                message: "Must be a valid email",
                type: "email"
              }
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
                message: "Password is required"
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
                message: 'Confirm your password'
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
                message: 'CUIT is required'
              },
            ]}>
            <Input placeholder='CUIT' name='cuit' />
          </Form.Item>
          <Form.Item
            name='address'
            value={bankData.address}
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: 'Address is required'
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
                message: 'Alias is required'
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
                message: 'Bank Name is required'
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
                message: 'Account Name is required'
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
                message: 'Invoice type is required'
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
          <h1 style={{ color: "gray", textAlign: "center" }}>
            Firma del acuerdo de confidencialidad
          </h1>
         <br />
         {errorSignature && (
            <Alert
              message='You need to sign the document to complete the register'
              type='error'
              showIcon
              style={{ margin: 5 }}
            />
          )}
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <SignatureCanvas
            ref={signatureRef}
            velocityFilterWeight={0.3}
            penColor='black'
            canvasProps={{
              width: 400,
              height: 150,
              className: "sigCanvas",
              style: { border: "1px solid #000000", borderRadius: '25px' },
            }}
            onEnd={
              () =>{
                saveSignature(
                  signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
                ) //base64
                setErrorSignature(false)
            }}
          />
          <Button
            onClick={handleClick}
            style={{ backgroundColor: 'lightgray', border: 0, width: '30%' }}
            shape='round'
            block
            type='primary'
            htmlType='submit'
            className='register-button'
            onClick={() => {
              signatureRef.current.clear();
              saveSignature(null);
              }}
            >
              Reset
            </Button>
          </div>
          <br />
          <Button
            onClick={handleSubmit}
            style={{ backgroundColor: '#a77ffa', border: 0 }}
            shape='round'
            block
            type='primary'
            htmlType='submit'
            className='register-button'
            loading={isLogin}
            >
              Register
            </Button>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            </div>
          <div className='register-steps'>
            <Button shape='round'> </Button>
            <Button shape='round' > {' '}</Button>
            <Button shape='round' style={{ backgroundColor: "green" }}> </Button>
          </div>
          <div className='register-link'>
            <Link to='/login' style={{ color: "gray" }}>
              Already have an account? Login
            </Link>
          </div>

        </div>

      )}
    </div>
  );
}

export default RegisterFreelancer;
