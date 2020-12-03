import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography, Alert } from "antd";

export default ({ handleInputChange, handleSubmit, data, form, isLogin }) => {
  const layout = {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 2,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 2,
      span: 2,
    },
  };
  const { Title } = Typography;

  return (
    <div className='login-formContainer'>
      <Form onFinish={handleSubmit} form={form} className='refister-form'>
        <h1 style={{ color: "gray", textAlign: "center" }}>Login</h1>
        <Form.Item
          name='email'
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input
            name='email'
            placeholder='Email'
            value={data.email}
            onChange={handleInputChange}
            className='register-input'
          />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password
            name='password'
            placeholder='Password'
            value={data.password}
            onChange={handleInputChange}
            bordered={false}
            style={{
              borderBottomWidth: 0.3,
              borderBottomStyle: "solid",
              borderBottomColor: "lightgray",
            }}
            className='register-input'
          />
        </Form.Item>
        {isLogin.errorCode && (
          <Form.Item>
            <Alert
              message='Error'
              description={isLogin.errorMessage}
              type='error'
              showIcon
            />
          </Form.Item>
        )}
        <Form.Item>
          <Button
            loading={isLogin.loading}
            style={{ backgroundColor: "#a77ffa", border: 0 }}
            shape='round'
            block
            type='primary'
            htmlType='submit'
            className='register-button'>
            LOGIN
          </Button>
        </Form.Item>
        <div className='register-link'>
          <Link to='/register' style={{ color: "gray" }}>
            Don't have an account? Register
          </Link>
        </div>
        <div className='register-link'>
       <Link to='/reset-password' style={{ color: "gray" }}>
            Forgot Password?
            </Link>
       </div>
      </Form>
    </div>
  );
};
