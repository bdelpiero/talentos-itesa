import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../views/logo-itesa.svg";

export default function ({ showSidebar }) {
  return (
    <div className="navbar-style">
      <MenuOutlined onClick={showSidebar} className="menu-bars" />
      <img src={logo} className="logo-mobile" />
    </div>
  );
}