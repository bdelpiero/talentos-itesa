import React from "react";
import {Link} from 'react-router-dom'
import { Form, Input, Button, Typography,Alert } from "antd";

export default ({ handleInputChange, handleSubmit, data, form,isLogin, message }) => {
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
        <h1 style={{ color: "gray", textAlign: "center" }}>Reset Password</h1>         
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
        {isLogin.errorCode && 
        <Form.Item>
        <Alert
          message="Error"
          description={isLogin.errorMessage}          
          type="error"
          showIcon
        />
       </Form.Item>
          }
        <Form.Item>
          <Button
            loading={isLogin.loading}
            style={{ backgroundColor: "#a77ffa", border: 0 }}
            shape='round'          
            block
            type='primary'
            htmlType='submit'
            className='register-button'>
            Reset Password
          </Button>          
        </Form.Item>
        <div className='register-link'>
            <Link to='/register' style={{ color: "gray" }}>
              Don't have an account? Register
            </Link>   
         </div>
       <div className='register-link' >
       <Link to='/login' style={{ color: "gray" }}>
            Login?
            </Link>
       </div>
      </Form>
     
    </div>
  );
};


