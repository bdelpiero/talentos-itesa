import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AddPayment from "../components/AddPayment";
import { db } from "../../firebase/firebase";
import { authUser } from "../../auth/auth";

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Modal, Button } from "antd";

function AddPaymentContainer() {
  return <AddPayment />;
}

export default AddPaymentContainer;
