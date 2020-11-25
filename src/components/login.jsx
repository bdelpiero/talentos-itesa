import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Typography } from "antd";

export default ({ handleInputChange, handleSubmit, data, form }) => {
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

  const onFinishFailed = (errorInfo) => {
    form.resetFields();

    console.log("Failed:", errorInfo);
  };

  return (
    <div className='login-formContainer'>
      <Form
        onFinish={handleSubmit}
        // validateMessages={validateMessages}
        className='refister-form'>
        <h1 style={{ color: "gray", textAlign: "center" }}>Login</h1>
        <Form.Item
          name='email'
          //   label='E-mail'
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input
            placeholder='Email'
            value={data.email}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          //   label='Password'

          name='password'
          //   style={{
          //     border: 0,
          //     borderBottomWidth: 0.3,
          //     borderBottomStyle: "solid",
          //     borderBottomColor: "lightgray",
          //   }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password
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
        <Form.Item>
          <Button
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

{
  /* </div>
        <>
        <Row justify='center'>
        <Title level={3} >LOGIN</Title>
        </Row>
        <Row align="middle" className='rowLogin' justify='center'>
        
            <Col span={12}>
                <Form
                name="basic"
                onFinish={hanledSubmit}
                onFinishFailed={onFinishFailed}
                form={form}
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input value={email} onChange={hanledChangeEmail}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password value={password} onChange={hanledChangePassword}/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                </Form.Item>
            </Form>
            </Col>
        </Row>
        
        </> */
}
