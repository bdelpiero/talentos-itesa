import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import {
  Modal,
  Button,
  Row,
  Col,
  Input,
  Form,
  DatePicker,
  Select,
  AutoComplete,
} from "antd";
import { user } from "../atoms";

const { Option } = Select;
const { RangePicker } = DatePicker;

function InviteProject({
  handleCuotas,
  cuotas,
  closeModal,
  openModal,
  modal,
  users,
  handleFinish,
  selectedUser,
  setSelectedUser,
  asignData,
  setAsignData,
  form,
  proyecto,
}) {
  const boton = proyecto.status == "On Development" ? false : true;

  const options = users.filter(user=> user.name !== undefined).map((user) => {
    return { value: `${user.name} ${user.lastName}`, id: user.id };
  });

  return (
    <div className="Modal">
      <Button
        disabled={boton}
        className="modal-button2 hide-button"
        onClick={openModal}
      >
        {" "}
        INVITAR
      </Button>

      <Modal
        visible={modal}
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{
          hidden: true,
        }}
        onOk={handleFinish}
        onCancel={closeModal}
        closeIcon={<CloseCircleOutlined className="close-button" />}
        bodyStyle={{ color: "#9e39ff" }}
        width={1000}
      >
        <>
          <Form onFinish={handleFinish} form={form}>
            <div style={{ width: "70%", marginLeft: "30px" }}>
              <h1>Asignar Proyecto</h1>
            </div>
            <br />
            <div>
              <Row>
                <Col span={6} style={{ textAlign: "center" }}>
                  <h6> Perfil </h6>
                </Col>
                <Col span={12} style={{ textAlign: "center" }}>
                  <h6> Plazos </h6>
                </Col>
                <Col span={6} style={{ textAlign: "center" }}>
                  <h6> Servicios</h6>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col span={6}>
                  <Form.Item
                    style={{
                      width: "90%",
                      marginLeft: "12px",
                    }}
                    name="freelancer"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese Freelancer",
                      },
                    ]}
                  >
                    <AutoComplete
                      onChange={(userSelected) => {
                        const userSelect = options.filter((option) => {
                          if (userSelected == option.value) return true;
                        });
                        if (!userSelected[0].id)
                          setSelectedUser(userSelect[0].id);
                      }}
                      options={options}
                      placeholder="Nombre de Freelancer"
                      filterOption={(inputValue, option) =>
                        option.value
                          .toUpperCase()
                          .indexOf(inputValue.toUpperCase()) !== -1
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="plazo"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese Fechas",
                      },
                    ]}
                    style={{ margin: "0 5%" }}
                  >
                    <RangePicker
                      style={{ width: "90%" }}
                      format="DD/MM/YYYY"
                      placeholder={["Inicio", "Finalizacion"]}
                      onChange={(value, dataString) => {
                        setAsignData({
                          ...asignData,
                          plazos: dataString,
                        });
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item>
                    <Select
                      placeholder="Servicio"
                      allowClear
                      style={{ width: "90%", margin: "0 5%" }}
                      onChange={(value) => {
                        setAsignData({ ...asignData, servicios: value });
                      }}
                      value={asignData.servicios}
                    >
                      <Option key="developer" value="developer">
                        Developer
                      </Option>
                      <Option key="designer" value="designer">
                        Designer
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              {/*  ------ ROW CUOTAS ------ */}
              <Row>
                <Col span={6} style={{ textAlign: "center" }}>
                  <h6> Cuota 1 </h6>
                </Col>
                <Col span={6} style={{ textAlign: "center" }}>
                  <h6> Cuota 2</h6>
                </Col>
                <Col span={6} style={{ textAlign: "center" }}>
                  <h6> Cuota 3</h6>
                </Col>
                <Col span={6} style={{ textAlign: "center" }}>
                  <h6> Cuota 4</h6>
                </Col>
              </Row>

              <Row>
                <Col span={6}>
                  {/*
                ------------------
                     CUOTA 1
                ------------------
                */}
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Form.Item
                      name="cuota1"
                      rules={[
                        {
                          required: true,
                          message: "Requerido",
                        },
                      ]}
                      style={{ width: "45%", marginLeft: "5%" }}
                    >
                      <Input
                        name="cuota1"
                        value={cuotas.cuota1.monto}
                        onChange={(e) =>
                          handleCuotas(e.target.value, "monto", e.target.name)
                        }
                      ></Input>
                    </Form.Item>
                    <Form.Item
                      name="date1"
                      rules={[
                        {
                          required: true,
                          message: "Requerido",
                        },
                      ]}
                      style={{ width: "45%" }}
                    >
                      <DatePicker
                        format="DD/MM/YYYY"
                        onChange={(value, dataString) =>
                          handleCuotas(dataString, "fecha", "cuota1")
                        }
                      />
                    </Form.Item>
                  </Row>
                </Col>

                {/*
                ------------------
                     CUOTA 2
                ------------------
                */}

                <Col span={6}>
                  <Form.Item>
                    <Input
                      style={{ width: "45%", marginLeft: "5%" }}
                      name="cuota2"
                      value={cuotas.cuota2.monto}
                      onChange={(e) =>
                        handleCuotas(e.target.value, "monto", e.target.name)
                      }
                      disabled={
                        cuotas.cuota1.fecha.length == 0 ||
                        cuotas.cuota1.monto == 0
                      }
                    ></Input>
                    <DatePicker
                      style={{ width: "45%", marginRight: "5%" }}
                      name="cuota2"
                      disabled={
                        cuotas.cuota1.fecha.length == 0 ||
                        cuotas.cuota1.monto == 0
                      }
                      format="DD/MM/YYYY"
                      onChange={(value, dataString) =>
                        handleCuotas(dataString, "fecha", "cuota2")
                      }
                    />
                  </Form.Item>
                </Col>
                {/*
                ------------------
                     CUOTA 3
                ------------------
                */}
                <Col span={6}>
                  <Form.Item>
                    <Input
                      style={{ width: "45%", marginLeft: "5%" }}
                      name="cuota3"
                      value={cuotas.cuota3.monto}
                      onChange={(e) =>
                        handleCuotas(e.target.value, "monto", e.target.name)
                      }
                      disabled={
                        cuotas.cuota2.fecha.length == 0 ||
                        cuotas.cuota2.monto == 0
                      }
                    ></Input>

                    <DatePicker
                      style={{ width: "45%", marginRight: "5%" }}
                      name="cuota3"
                      onChange={(value, dataString) =>
                        handleCuotas(dataString, "fecha", "cuota3")
                      }
                      disabled={
                        cuotas.cuota2.fecha.length == 0 ||
                        cuotas.cuota2.monto == 0
                      }
                      format="DD/MM/YYYY"
                    />
                  </Form.Item>
                </Col>
                {/*
                ------------------
                     CUOTA 4
                ------------------
                */}
                <Col span={6}>
                  <Form.Item>
                    <Input
                      style={{ width: "45%", marginLeft: "5%" }}
                      name="cuota4"
                      value={cuotas.cuota4.monto}
                      onChange={(e) =>
                        handleCuotas(e.target.value, "monto", e.target.name)
                      }
                      disabled={
                        cuotas.cuota3.fecha.length == 0 ||
                        cuotas.cuota3.monto == 0
                      }
                    ></Input>
                    <DatePicker
                      style={{ width: "45%", marginRight: "5%" }}
                      name="cuota4"
                      format="DD/MM/YYYY"
                      onChange={(value, dataString) =>
                        handleCuotas(dataString, "fecha", "cuota4")
                      }
                      disabled={
                        cuotas.cuota3.fecha.length == 0 ||
                        cuotas.cuota3.monto == 0
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <Row></Row>
            <div className="modal-input">
              <button className="ok-button" type="submit">
                CONFIRMAR
              </button>
            </div>
          </Form>
        </>
      </Modal>
    </div>
  );
}

export default InviteProject;
