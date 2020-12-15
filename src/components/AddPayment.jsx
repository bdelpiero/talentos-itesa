import React from "react";

import {
  Modal,
  Button,
  Form,
  Select,
  AutoComplete,
  Row,
  Col,
  Upload,
} from "antd";

import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
const {Option} = Select

function AddPayment({
  selectedUser,
  setSelectedUser,
  users,
  closeModal,
  success,
  openModal,
  modal,
  form,
  selectedProject,
  setSelectedProject,
  projects,
  setFileUrl,
  fileUrl,
  handleCuota,
}) {
  const options = users.map((user) => {
    return {
      value: `${user.name} ${user.lastName}`,
      id: user.id,
      email: user.email,
    };
  });

  const optionsProjects = projects.map((project) => {
    return { value: project.proyecto, id: project.projectId };
  });

  const props = {
    name: "file",
    multiple: true,
    onChange(info){
      setFileUrl(info) 
     }
}

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
        width={800}
      >
        <div style={{ width: "70%", marginLeft: "70px" }}>
          <h1>Confirmar datos y adjuntar comprobante</h1>
          <p style={{ color: "red" }}>Todos los campos son obligatorios.</p>
        </div>
        <br />
        <Form initialValues={{ remember: true }} onFinish={success} form={form}>
          <Row>
            <Col span={12}>
              <h5 style={{ color: "grey", marginLeft: "70px" }}>PERFIL</h5>
              <Form.Item
                style={{ width: "70%", marginLeft: "70px" }}
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese Perfil",
                  },
                ]}
              >
                <AutoComplete
                  onChange={(userSelected) => {
                    const userSelect = options.filter((option) => {
                      if (userSelected == option.value) return true;
                    });
                    if (!userSelect[0] || !userSelect[0].id) return;
                    setSelectedUser(userSelect[0]);
                  }}
                  options={options}
                  placeholder="Nombre de Perfil"
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
              </Form.Item>

              <h5 style={{ color: "grey", marginLeft: "70px" }}>PROYECTO</h5>
              <Form.Item
                style={{ width: "70%", marginLeft: "70px" }}
                name="project"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese proyecto",
                  },
                ]}
              >
                <AutoComplete
                  onChange={(projectSelected) => {
                    const projectSelect = optionsProjects.filter((option) => {
                      if (projectSelected == option.value) return true;
                    });
                    setSelectedProject(projectSelect[0].id);
                  }}
                  options={optionsProjects}
                  placeholder="Nombre de Proyecto"
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
              </Form.Item>

              <h5 style={{ color: "grey", marginLeft: "70px" }}>
                SELECCIONAR CUOTA A CANCELAR
              </h5>
              <Form.Item
                style={{ width: "70%", marginLeft: "70px" }}
                name="cuota"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese Cuota a cancelar",
                  },
                ]}
              >
                <Select
                  onChange={(value)=>handleCuota(value)}
                  placeholder="Cuota"
                >
                  <Option value="CUOTA 1">Cuota 1</Option>
                  <Option value="CUOTA 2">Cuota 2</Option>
                  <Option value="CUOTA 3">Cuota 3</Option>
                  <Option value="CUOTA 4">Cuota 4</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Dragger {...props} >
                <p className="ant-upload-drag-icon">
                  <PlusOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or Drag file to upload
                </p>
              </Dragger>
            </Col>
          </Row>

          <div className="modal-input">
            <button className="ok-button" type="submit">
              CONFIRMAR PAGO
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AddPayment;
