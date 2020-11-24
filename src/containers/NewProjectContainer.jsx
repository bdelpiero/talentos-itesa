import React, { useEffect, useState } from "react";

import NewProject from "../components/NewProject";

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Modal, Button } from "antd";

function NewProjectContainer() {
  return <NewProject />;
}

export default NewProjectContainer;
