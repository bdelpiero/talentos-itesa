import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

export default ({hanledChangeEmail,hanledChangePassword,hanledSubmit,email,password}) =>{
  

    return(
        <div className="container">
        <Form
            name="basic"
            initialValues={{
                remember: false,
            }}
            // onSubmit={()=>console.log("sub")}
            onFinish={hanledSubmit}
            // onFinishFailed={onFinishFailed}
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

            <Form.Item  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}