import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import UserLogo from "../../views/man.svg";
import { Modal, Button, Row, Col, Input, Form, DatePicker, Select } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

function InviteProject({
  handleChange,
  closeModal,
  success,
  openModal,
  modal,
  users,
  handleFinish,
  selectedUser,
  setSelectedUser,
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
        onCancel={closeModal}
        closeIcon={<CloseCircleOutlined className="close-button" />}
        bodyStyle={{ color: "#9e39ff" }}
        width={1000}
      >
        <>
          <Form onFinish={handleFinish}>
            <div style={{ width: "70%", marginLeft: "38px" }}>
              <h1>Asignar Proyecto</h1>
              <h5 style={{ color: "grey" }}>NOMBRE DEL PROYECTO</h5>
              {/* 
              <Form.Item>
                <Select placeholder="Seleccione Proyecto" allowClear>
                  <Option key="" value="male"> ITESA 2020 </Option>
                </Select>
              </Form.Item> */}
            </div>

            <br />
            <div>
              <h5 style={{ width: "70%", marginLeft: "38px", color: "grey" }}>
                NOMBRE DEL PROYECTO
              </h5>
              <Row>
                <Col span={1} style={{ justifyItems: "center" }}></Col>
                <Col span={3} style={{ alignContent: "center" }}>
                  <h6> Perfil </h6>
                </Col>
                <Col span={3}>
                  <h6> Plazos </h6>
                </Col>
                <Col span={3}>
                  <h6> Servicios</h6>
                </Col>
                <Col span={3}>
                  <h6> Cuota 1 </h6>
                </Col>
                <Col span={3}>
                  <h6> Cuota 2</h6>
                </Col>
                <Col span={3}>
                  <h6> Cuota 3</h6>
                </Col>
                <Col>
                  <h6> Cuota 4</h6>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col span={1}>
                  <input type="checkbox" />
                </Col>
                <Col span={3}>
                  <Form.Item>
                    <Select
                      value={selectedUser}
                      onChange={(value) => {
                        setSelectedUser(value);
                      }}
                      placeholder="Perfil"
                      allowClear
                    >
                      {users.map((user1) => {
                        return (
                          <Option key={user1.id} value={user1.id}>
                            {user1.name}
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                    <RangePicker placeholder="Plazo" />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                    <Select placeholder="Servicio" allowClear>
                      <Option key="male" value="male">
                        Developer
                      </Option>
                      <Option key="female" value="female">
                        Disigner
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                    <Input></Input>
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <Row>
              <div className="modal-input">
                <button className="ok-button" type="submit">
                  Add a Row
                </button>
              </div>
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
