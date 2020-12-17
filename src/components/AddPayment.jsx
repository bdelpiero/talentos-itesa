import React, { useState } from "react";

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

import {
  CloseCircleOutlined,
  PlusOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  DashOutlined,
} from "@ant-design/icons";

const { Dragger } = Upload;
const { Option } = Select;

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
  cuota,
  setFileUrl,
  fileUrl,
  setCuota,
  pendingPayments,
}) {
  // MAPEA TODOS LOS USUARIOS
  const usuarios = pendingPayments.map((payment) => {
    return {
      value: `${payment.user.name} ${payment.user.lastName}`,
      id: payment.user.id,
      email: payment.user.email,
    };
  });
  // ELIMINA USUARIOS DUPLICADOS
  const options = usuarios.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  );

  // MAPEA TODOS LOS PROJECTS
  const projectsFilter = pendingPayments
    .filter((payment) => {
      return (
        payment.user && selectedUser.id && payment.user.id == selectedUser.id
      );
    })
    .map((payment) => {
      return { value: payment.projectName, id: payment.projectId };
    });
  // ELIMINA PROJECTS DUPLICADOS
  const optionsProjects = projectsFilter.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  );

  const optionCuotas = pendingPayments
    .filter((payment) => {
      return (
        payment.user.id == selectedUser.id &&
        payment.projectId == selectedProject
      );
    })
    .map((payment) => {
      return { value: payment.cuota, id: payment.paymentId };
    });

  const [dragger, setDragger] = useState(false);
  const [boton, setBoton] = useState(true);

  const props = {
    name: "file",
    // action: (info) => {
    //   console.log(info)
    //   setFileUrl(info)
    // },
    onChange(info) {
      setFileUrl(info);
      setBoton(false);
      setDragger(true);
    },
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
                    // if (!projectSelected[0] || !projectSelected[0].id) return;
                    setSelectedProject(projectSelect[0].id);
                  }}
                  options={optionsProjects}
                  placeholder="Nombre de Proyecto"
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  disabled={!selectedUser.value}
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
                <AutoComplete
                  onChange={(cuotaSelected) => {
                    const cuotaSelect = optionCuotas.filter((option) => {
                      if (cuotaSelected == option.value) return true;
                    });
                    if (!cuotaSelect[0] || !cuotaSelect[0].id) return;
                    setCuota(cuotaSelect[0]);
                  }}
                  options={optionCuotas}
                  placeholder="Cuotas"
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  disabled={selectedProject == ""}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              {!dragger ? (
                <Dragger
                  {...props}
                  style={{ width: "80%" }}
                  disabled={!cuota.value}
                >
                  <p className="ant-upload-drag-icon">
                    <PlusOutlined style={{ color: "#9e39ff" }} />
                  </p>

                  <p className="ant-upload-text">
                    Click or Drag file to upload
                  </p>
                </Dragger>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "80%",
                    width: "80%",
                    border: "dashed",
                    borderColor: "green",
                    padding: "25px",
                  }}
                >
                  <p style={{ color: "green" }}>{fileUrl.file.name} </p>

                  <p>
                    <DeleteOutlined
                      style={{ fontSize: "20px", color: "red" }}
                      onClick={() => {
                        setFileUrl({});
                        setDragger(false);
                      }}
                    />
                  </p>
                </div>
              )}
            </Col>
          </Row>

          <div className="modal-input">
            <button className="ok-button" type="submit" disabled={boton}>
              CONFIRMAR PAGO
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AddPayment;
