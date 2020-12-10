import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Modal, Form } from "antd";
import MiBanco from "../components/Mibanco";
import { useRecoilState } from "recoil";
import { user, projectInvited } from "../atoms/index";

function MiBancoContainer() {
  const [currentUser, setcurrentUser] = useRecoilState(user);
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();

  const [bankData, setBankData] = useState({
    accountName: currentUser.bankDetails.accountName || "",
    alias: currentUser.bankDetails.alias || "",
    cuit: currentUser.bankDetails.cuit || "",
    type: currentUser.bankDetails.type || "",
    address: currentUser.bankDetails.address || "",
  });

  const handleChangeBank = (e) => {
    console.log("esto es e target name", e.target.name);

    setBankData({
      ...bankData,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  function success() {
    closeModal();
    db.collection("users")
      .doc(currentUser.id)
      .update({
        bankDetails: bankData,
      })
      .then(() => {
        console.log("cambios realizados con éxito");
      })
      .then(() => {
        Modal.success({
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
          content: "¡Datos Actualizados!",
          centered: "true",
          okText: "VOLVER",
          icon: <CheckCircleOutlined style={{ color: "#9e39ff" }} />,
          okButtonProps: {
            style: {
              backgroundColor: "#9e39ff",
              border: "none",
              borderRadius: "10px",
            },
          },
        });
      });
  }

  return (
    <MiBanco
      handleChangeBank={handleChangeBank}
      closeModal={closeModal}
      success={success}
      openModal={openModal}
      modal={modal}
      form={form}
    />
  );
}

export default MiBancoContainer;
