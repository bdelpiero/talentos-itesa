import React, { useState } from "react";
import Login from "../components/login";
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
    setEmail("");
    setPassword("");
    login(email, password);
    console.log("AQUI", valores);
    // form.resetFields();
    history.push("/frelance");
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
