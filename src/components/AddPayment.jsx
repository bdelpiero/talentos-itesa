// import React from "react";
// import {} from "@ant-design/icons";
// import Briefing from "../../views/briefing.svg";
// import { Modal, Button, Card } from "antd";

// function AddPayment() {
//   return (
//     <div className="Modal">

//         <Button className="modal-button" >
//         Ingresar un Pago
//       </Button>

//     </div>
//   );
// }

// export default AddPayment;


import React from "react";

import { Modal, Button, Card, Form, Input, Select, DatePicker } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

function NewProject({
  handleChangeName,
  handleChangeTerm,
  handleChangeStartDate,
  handleChangeEndDate,
  closeModal,
  success,
  openModal,
  modal,
  form
}) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };


  return (
    <div className="Modal">
      <Button onClick={openModal} className="modal-button">
        Ingresar un Pago
      </Button>

      <Modal
        visible={modal}
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
        onCancel={closeModal}
        onOk={success}
        closeIcon={<CloseCircleOutlined className="close-button" />}
        bodyStyle={{ color: "#9e39ff" }}
      >
        <div className="modal-style">
          <h1>Crear Proyecto</h1>
          <p style={{ color: "grey" }}>
            Ingrese los datos para crear el proyecto
          </p>
        </div>
        <br/>
        <Form
          {...layout}
          initialValues={{ remember: true }}
          onFinish={success}
          form={form}
          // onFinishFailed={onFinishFailed}
        >
          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            NOMBRE DEL PROYECTO
          </h5>
          <Form.Item
            className="modal-formularios"
            name="name"
            onChange={handleChangeName}
            rules={[
              {
                required: true,
                message: "Por favor ingrese Nombre del Proyecto",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <h5 style={{ color: "grey", marginLeft: "95px" }}>DURACIÓN</h5>
          <Form.Item
            className="modal-formularios"
            name="term"
            onChange={handleChangeTerm}
            rules={[
              {
                required: true,
                message: "Por favor ingrese duración del Proyecto",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <h5 style={{ color: "grey", marginLeft: "95px" }}>FECHA DE INICIO</h5>
          <Form.Item
            name="startDate"
            className="modal-formularios"
            rules={[
              { required: true, message: "Por favor ingrese fecha de inicio" },
            ]}
          >
            <DatePicker
              id="startDate"
              name="startDate"
              onChange={handleChangeStartDate}
              style={{ width: "100%" }}
              format="YYYY-MM-DD"
              placeholder={"Fecha de Inicio"}
            />
          </Form.Item>

          <h5 style={{ color: "grey", marginLeft: "95px" }}>
            FECHA DE FINALIZACION
          </h5>
          <Form.Item
            name="endDate"
            className="modal-formularios"
            rules={[
              {
                required: true,
                message: "Por favor ingrese fecha de finalizacion",
              },
            ]}
          >
            <DatePicker
              id="endDate"
              name="endDate"
              onChange={handleChangeEndDate}
              style={{ width: "100%" }}
              format="YYYY-MM-DD"
              placeholder={"Fecha de Finalizacion"}
            />
          </Form.Item>

          <div className="modal-input">
            <button className="ok-button" type="submit">
              CREAR PROYECTO
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default NewProject;
