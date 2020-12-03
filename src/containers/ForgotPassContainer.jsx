import React, { useState } from "react";
import ForgotPassword from "../components/ForgotPassword";
import { authUser } from "../../firebase/auth";
import Logo from "../../views/logo-itesa.svg";
import { useRecoilState } from "recoil";

import { isLoading } from "../atoms";
import { atomLogin } from "../atoms";
import { Form, message } from "antd";

export default () => {
  const [data, setData] = useState({
    email: "",
  });
  const [error, setError] = useState("")
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useRecoilState(atomLogin);
  const { login } = authUser();
  const {resetPassword }=authUser();
  const [message, setMessage] = useState("")
  const info = () => {
    message.info("Check your inbox for further instructions");
  };
  

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setIsLogin({
      loading: false,
      errorCode: "",
      errorMessage: "",
    });
  };


  const handleSubmit = () => {  
    resetPassword(data.email);
    setData({ email: ""});
    setMessage("Check your inbox for further instructions")
    form.resetFields();
  };

  return (
    <div>
      <div className="register-header">
        <img src={Logo} className="register-logo" />
      </div>
      <div className="login-container">
        <div className="register-left"></div>
        <ForgotPassword
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          data={data}
          form={form}
          isLogin={isLogin}
          message={message}
        />
      </div>
    </div>
  );
};
