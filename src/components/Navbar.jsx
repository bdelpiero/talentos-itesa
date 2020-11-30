import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export default function ({ showSidebar }) {
  return (
    <div className="navbar1">
      <MenuOutlined onClick={showSidebar} className="menu-bars" />
    </div>
  );
}
