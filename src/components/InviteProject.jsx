import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import UserLogo from "../../views/man.svg";
import { Modal, Button, Row, Col, Input, Form, DatePicker, Select } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

function InviteProject({
  handleChange,
  closeModal,
  handleMonto,
  openModal,
  modal,
  users,
  handleFinish,
  selectedUser,
  setSelectedUser,
  asignData,
  setAsignData
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
          <Form onFinish={handleFinish}>
            <div style={{ width: "70%", marginLeft: "30px" }}>
              <h1>Asignar Proyecto</h1>

              {/* 
              <Form.Item>
                <Select placeholder="Seleccione Proyecto" allowClear>
                  <Option key="" value="male"> ITESA 2020 </Option>
                </Select>
              </Form.Item> */}
            </div>

            <br />
            <div>
              {/*  <h5 style={{ width: "70%", marginLeft: "38px", color: "grey" }}>
                NOMBRE DEL PROYECTO
              </h5> */}
              <Row style={{marginLeft:"30px"}}>
                <Col span={3} style={{textAlign:"center"}}>
                  <h6> Perfil </h6>
                </Col>
                <Col span={6} 
style={{textAlign:"center"}}
>
                  <h6> Plazos </h6>
                </Col>
                <Col span={3} style={{textAlign:"center"}}>
                  <h6> Servicios</h6>
                </Col>
                <Col span={3} style={{textAlign:"center"}}>
                  <h6> Cuota 1 </h6>
                </Col>
                <Col span={3} style={{textAlign:"center"}}>
                  <h6> Cuota 2</h6>
                </Col>
                <Col span={3} style={{textAlign:"center"}}>
                  <h6> Cuota 3</h6>
                </Col>
                <Col span={3} style={{textAlign:"center"}}>
                  <h6> Cuota 4</h6>
                </Col>
              </Row>
            </div>
            <div>
              <Row style={{marginLeft:"30px"}}>
                <Col span={3}>
                  <Form.Item>
                    <Select
                    style={{ width: "95%",marginRight:"5%" }}
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
                <Col span={6}>
                  <Form.Item>
                    <RangePicker
                    style={{ width: "90%",margin:"0 5%" }}
                    format="DD/MM/YYYY"
                    placeholder={["Inicio","Finalizacion"]} 
                    onChange={(value,dataString)=>{
                      setAsignData({
                        ...asignData,
                        plazos: dataString ,
                      });
                    }}
                    />
                  </Form.Item>
                </Col>
                <Col span={3}  >
                  <Form.Item>
                    <Select 
                    placeholder="Servicio" 
                    allowClear 
                    style={{ width: "90%",margin:"0 5%" }}
                    onChange={(value) => {
                      setAsignData({...asignData, servicios: value});
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
                <Col span={3} >
                  <Form.Item>
                    <Input
                    name = "cuota1"
                    value = {asignData.cuota1.monto}
                    onChange={handleMonto}
                    style={{ width: "45%",marginLeft:"5%" }}
                    ></Input>
                    <DatePicker
                    name = "cuota1"
                    // value = {asignData.cuota1.fecha}
                    format="DD/MM/YYYY"
                    style={{ width: "45%",marginRight:"5%"}}
                    onChange={(value,dataString)=>{
                      setAsignData({
                        ...asignData,
                        cuota1: { ...asignData.cuota1, fecha: dataString } ,
                      });
                    }}
                    />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                  <Input
                  name = "cuota2"
                  value = {asignData.cuota2.monto}
                  onChange={handleMonto}
                    style={{ width: "45%",marginLeft:"5%" }}
                    ></Input>
                    <DatePicker
                    name = "cuota2"
                    // value = {asignData.cuota2.fecha}
                    format="DD/MM/YYYY"
                    style={{ width: "45%",marginRight:"5%"}}
                    onChange={(value,dataString)=>{
                      setAsignData({
                        ...asignData,
                        cuota2: { ...asignData.cuota2, fecha: dataString } ,
                      });
                    }}
                    />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                  <Input
                    name = "cuota3"
                    value = {asignData.cuota3.monto}
                    onChange={handleMonto}
                    style={{ width: "45%",marginLeft:"5%" }}
                    ></Input>
                    <DatePicker
                    name = "cuota3"
                    // value = {asignData.cuota3.fecha}
                    onChange={(value,dataString)=>{
                      setAsignData({
                        ...asignData,
                        cuota3: { ...asignData.cuota3, fecha: dataString } ,
                      });
                    }}
                    format="DD/MM/YYYY"
                    style={{ width: "45%",marginRight:"5%"}}
                    />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                  <Input
                  name = "cuota4"
                  value = {asignData.cuota4.monto}
                  onChange={handleMonto}
                    style={{ width: "45%",marginLeft:"5%" }}
                    ></Input>
                    <DatePicker
                    name = "cuota4"
                    // value = {asignData.cuota4.fecha}
                    format="DD/MM/YYYY"
                    style={{ width: "45%",marginRight:"5%"}}
                    onChange={(value,dataString)=>{
                      setAsignData({
                        ...asignData,
                        cuota4: { ...asignData.cuota4, fecha: dataString } ,
                      });
                    }}
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
