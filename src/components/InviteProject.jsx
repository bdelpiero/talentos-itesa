import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Modal, Button, Row, Col, Input, Form, DatePicker, Select } from "antd";

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
  form
}) {
  return (
    <div className="Modal">
      <Button className="modal-button" onClick={openModal}>
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
          <Form onFinish={handleFinish}
          form={form}
          >
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
                  <Form.Item>
                    {/* <Input
                style={{ marginBottom: "1rem" }}
                value = {}
                onChange={onChange}
                placeholder='Buscar freelancer por nombre o email'
              /> */}
                    <Select
                      style={{
                        width: "95%",
                        marginRight: "5%",
                        marginLeft: "5%",
                      }}
                      value={selectedUser}
                      onChange={(value) => {
                        setSelectedUser(value);
                      }}
                      placeholder="Perfil"
                      allowClear
                    >
                      {users.map((user) => {
                        if (!user.isAdmin) {
                          return (
                            <Option key={user.id} value={user.id}>
                              {user.name}
                            </Option>
                          );
                        }
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <RangePicker
                      style={{ width: "90%", margin: "0 5%" }}
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
                        Disigner
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
                  <Form.Item>
                    <Input
                      name="cuota1"
                      value={cuotas.cuota1.monto}
                      onChange={(e) =>
                        handleCuotas(e.target.value, "monto", e.target.name)
                      }
                      style={{ width: "45%", marginLeft: "5%" }}
                    ></Input>
                    <DatePicker
                      name="cuota1"
                      format="DD/MM/YYYY"
                      style={{ width: "45%", marginRight: "5%" }}
                      onChange={(value, dataString) =>
                        handleCuotas(dataString, "fecha", "cuota1")
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item>
                    <Input
                      name="cuota2"
                      value={cuotas.cuota2.monto}
                      onChange={(e) =>
                        handleCuotas(e.target.value, "monto", e.target.name)
                      }
                      style={{ width: "45%", marginLeft: "5%" }}
                    ></Input>
                    <DatePicker
                      name="cuota2"
                      format="DD/MM/YYYY"
                      style={{ width: "45%", marginRight: "5%" }}
                      onChange={(value, dataString) =>
                        handleCuotas(dataString, "fecha", "cuota2")
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item>
                    <Input
                      name="cuota3"
                      value={cuotas.cuota3.monto}
                      onChange={(e) =>
                        handleCuotas(e.target.value, "monto", e.target.name)
                      }
                      style={{ width: "45%", marginLeft: "5%" }}
                    ></Input>
                    <DatePicker
                      name="cuota3"
                      onChange={(value, dataString) =>
                        handleCuotas(dataString, "fecha", "cuota3")
                      }
                      format="DD/MM/YYYY"
                      style={{ width: "45%", marginRight: "5%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item>
                    <Input
                      name="cuota4"
                      value={cuotas.cuota4.monto}
                      onChange={(e) =>
                        handleCuotas(e.target.value, "monto", e.target.name)
                      }
                      style={{ width: "45%", marginLeft: "5%" }}
                    ></Input>
                    <DatePicker
                      name="cuota4"
                      format="DD/MM/YYYY"
                      style={{ width: "45%", marginRight: "5%" }}
                      onChange={(value, dataString) =>
                        handleCuotas(dataString, "fecha", "cuota4")
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <Row>
              {/* <div className="modal-input">
                <button className="ok-button" type="submit">
                  Add a Row
                </button>
              </div> */}
            </Row>
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
