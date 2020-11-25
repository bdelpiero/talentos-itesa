import React, { useState } from "react";
import Login from "../components/Login";
import { authUser } from "../../auth/auth";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../views/logo-itesa.svg";

export default () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //   const [form] = Form.useForm();
  const history = useHistory();

  const { login, currentUser } = authUser();

  const handleInputChange = (e) => {
    console.log("value", e.target.value);
    console.log("name", e.target.name);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleChangeEmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handleChangePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  const handleSubmit = (valores) => {
    console.log("user", data.email);
    console.log("pass", data.password);
    login(data.email, data.password);
    console.log("AQUI", valores);
    setData({ email: "", password: "" });
    // form.resetFields();
    // history.push("/freelancer");
  };

  return (
    <div>
      <div className='register-header'>
        <Logo className='register-logo' />
      </div>

      <div className='login-container'>
        <div className='register-left'></div>
        <Login
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          data={data}
        />
        {/* <Login
            hanledChangeEmail={hanledChangeEmail}
            hanledChangePassword={hanledChangePassword}
            hanledSubmit={hanledSubmit}
            email={email}
            password={password}
            form={form}
            /> */}
      </div>
    </div>
  );
};
