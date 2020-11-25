import React from 'react';
import { Form, Input, Button, Checkbox,Row,Col,Typography } from 'antd';


export default ({hanledChangeEmail,hanledChangePassword,hanledSubmit,email,password,form, }) =>{
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
      const {Title} =Typography

     
    const onFinishFailed = (errorInfo) => {
        form.resetFields()

        console.log('Failed:', errorInfo);
    };
  
   

    return(
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
        
        </>
    )
}