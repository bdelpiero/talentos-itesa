import React, { useState } from "react";
import ForgotPassword from "../components/ForgotPassword";
import { authUser } from "../../firebase/auth";

import Logo from "../../views/logo-itesa.svg";
import { useRecoilState } from "recoil";

import { atomLogin } from "../atoms";
import { Form } from "antd";

export default () => {
  const [data, setData] = useState({ email: "" });
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useRecoilState(atomLogin);
  const { resetPassword } = authUser();
  const [message, setMessage] = useState("")

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
    setError(false)
    setSuccess(false)
    resetPassword(data.email).then(res => {
      if (res) {
        setError(true)
        setMessage("This email is not registered")
      } else {
        setError(false)
        setSuccess(true)
        form.resetFields();
        setData({ email: "" });
        setMessage("Check your inbox for further instructions")
      }
    })
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
          error={error}
          success={success}
        />
      </div>
    </div>
  );
};
