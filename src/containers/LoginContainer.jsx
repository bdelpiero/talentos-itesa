import React, { useState } from "react";
import Login from "../components/Login";
import { authUser } from "../../auth/auth";
import Logo from "../../views/logo-itesa.svg";
import { useRecoilState } from "recoil";
import { atomLogin } from "../atoms";
import {Form} from 'antd'


export default () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [form] =Form.useForm()
  const [isLogin, setIsLogin] = useRecoilState(atomLogin);
  const { login } = authUser();

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setIsLogin({
      loading:false,
      errorCode:'',
      errorMessage:''
    })
  };


  const handleSubmit = () => {
    setIsLogin({loading:true})
    login(data.email, data.password)
    setData({ email: "", password: "" });
    form.resetFields()
  };

  return (
    <div>
      <div className='register-header'>
        <img src={Logo} className='register-logo'/>
      </div>

      <div className='login-container'>
        <div className='register-left'></div>
        <Login
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          data={data}
          form={form}
          isLogin={isLogin}
        />
       
      </div>
    </div>
  );
};
