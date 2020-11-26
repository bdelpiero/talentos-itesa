import React, { useState } from "react";
import Login from "../components/Login";
import { authUser } from "../../auth/auth";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../views/logo-itesa.svg";
import { useRecoilState } from "recoil";
import { isLoading } from "../atoms";
import { Form } from "antd";

export default () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [form] = Form.useForm();
  const history = useHistory();
  const [loading, setLoading] = useRecoilState(isLoading);
  const { login, currentUser } = authUser();

  const handleInputChange = (e) => {
    console.log("value", e.target.value);
    console.log("name", e.target.name);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (valores) => {
    setLoading(true);
    login(data.email, data.password);
    setData({ email: "", password: "" });
    form.resetFields();
  };

  return (
    <div>
      <div className="register-header">
        <img src={Logo} className="register-logo" />
      </div>

      <div className="login-container">
        <div className="register-left"></div>
        <Login
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          data={data}
          form={form}
          loading={loading}
        />
      </div>
    </div>
  );
};
