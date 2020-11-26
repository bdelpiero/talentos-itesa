import React from "react";
import { Form, Input, Button, Typography,Alert } from "antd";

export default ({ handleInputChange, handleSubmit, data, form,isLogin }) => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const { Title } = Typography;

  return (
    <div className='login-formContainer'>
      <Form
        onFinish={handleSubmit}
        form={form}
        className='refister-form'>
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
        {isLogin.errorCode && 
        <Form.Item>
        <Alert
          message="Error"
          description={isLogin.errorMessage}
          type="error"
          showIcon
        />
        </Form.Item>}
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
      </Form>
    </div>
  );
};


