import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import NewProject from "../components/NewProject";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Modal, Form } from "antd";

function NewProjectContainer() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("On Development");
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [term, setTerm] = useState("");
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeStartDate = (value, dateString) => {
    setStartDate(dateString);
  };

  const handleChangeEndDate = (value, dateString) => {
    setEndDate(dateString);
  };

  const handleChangeTerm = (e) => {
    setTerm(e.target.value);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  function success() {
    closeModal();
    db.collection("projects")
      .add({
        name,
        status,
        startDate,
        endDate,
        term,
      })
      .then(() => {
        form.resetFields();
      })
      .then(() => {
        Modal.success({
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
          content: "¡Proyecto Creado!",
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
    <NewProject
      handleChangeName={handleChangeName}
      handleChangeStartDate={handleChangeStartDate}
      handleChangeEndDate={handleChangeEndDate}
      handleChangeTerm={handleChangeTerm}
      status={status}
      closeModal={closeModal}
      success={success}
      openModal={openModal}
      modal={modal}
      form={form}
    />
  );
}

export default NewProjectContainer;
