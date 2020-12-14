import React, {useState} from "react";
import { useRecoilState } from "recoil";
import { user,projectInvited } from "../atoms/index";

// STYLES
import { Modal, Button, Card, Typography, Upload, message} from "antd";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import MiBancoContainer from "../containers/MiBancoContainer";

const { Title } = Typography;
const { Dragger } = Upload;



export default ({setItem}) => {
  const [currentUser,serCurrentUser]=useRecoilState(user)
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);
  const [modalCargarFactura, setModalCargarFactura] = useState(false)
  const [factura, setFactura] = useState({})

  const props = {
    name: "file",
    multiple: true,
    action: (file) => setFactura(file)
  };

  const handleClick = async () => {
    if(factura.name) {
      const storageRef = storage.ref();
      const task = storageRef.child(`facturas/${factura.name}`);
      await task.put(file);
      await task.getDownloadURL()
        .then((downloadUrl) => {
        db.collection("payments").doc(user.id)
          .update({
            cv: downloadUrl,
          })
          .then(() => {
            console.log("cambios realizados con éxito");
          })
          .catch((err) => console.log(err));
    });
    }
  }

  const FreelancerCards = (props) => {
    const getDatesBetweenDates = (startDate, endDate) => {
      const sd=startDate.split('/')
      const ed=endDate.split('/')
      let dates = []
      //to avoid modifying the original date
      const theDate = new Date(sd[2],sd[1],sd[0])
      const theEndDate = new Date(ed[2],ed[1],ed[0])
  
      while (theDate < theEndDate) {
        dates = [...dates, new Date(theDate)]
        theDate.setDate(theDate.getDate() + 1)
      }
      return Math.floor(dates.length /7) 
    }

    const calculoRemuneracion =(arr)=>{
      return arr.reduce((pre,act)=> pre + parseInt(act.monto),0)
    } 

    if(props.inviteds.invited.length > 0){

      const duracion= getDatesBetweenDates(props.inviteds.selected.plazos[0],props.inviteds.selected.plazos[1])
      const monto=calculoRemuneracion(props.inviteds.selected.cuotasDB)

      if(props.inviteds.invited.length > 1){
        console.log("mas de un proyecto",props.inviteds, props.inviteds.selected)
        return (
          <Card className="freelancer-cards" >
            <Title level={5} id="title-freelancer-card">OFERTA DE PROYECTO</Title>
            <p id="subtittle-freelancer-card">PROYECTO</p>
            <p id='text-freelancer-card'>"{props.inviteds.selected.proyecto}"</p>
            <p id="subtittle-freelancer-card">DURACION</p>
            <p id='text-freelancer-card'>{duracion} semanas</p>
            <p id="subtittle-freelancer-card">MONTO</p>
            <div className='container-freelancer-button'>
              <p id='text-freelancer-card'>"$ {monto}"</p>
              <Button className="freelancer-card-buttons" onClick={()=>setItem(5)} shape="round"> Firma Contrato </Button>
            </div>   
            <div className='freelancer-card-stepers-container'>
              {props.inviteds.map((p,i)=>{
                return (
                <Button shape='round' key={i} onClick={() => {
                  console.log("AQUI",props.inviteds.invited[i])
                  setInvitedProject({...invitedProject, selected : props.inviteds.invited[i]})
                }} className='freelancer-card-stepers'> </Button>
                )
              })}
            </div>
          </Card>
        )
      } else {
        return (
          <Card className="freelancer-cards" key={props.inviteds.selected.proyecto}>
            <Title level={5} id="title-freelancer-card">OFERTA DE PROYECTO</Title>
            <p id="subtittle-freelancer-card">PROYECTO</p>
            <p id='text-freelancer-card'>"{props.inviteds.selected.proyecto}"</p>
            <p id="subtittle-freelancer-card">DURACION</p>
            <p id='text-freelancer-card'>{duracion} semanas</p>
            <p id="subtittle-freelancer-card">MONTO</p>
            <div className='container-freelancer-button'>
              <p id='text-freelancer-card'> "${monto}"</p>
              <Button className="freelancer-card-buttons" onClick={()=>setItem(5)} shape="round"> Firma Contrato </Button>
            </div>          
          </Card>
        )
      }
    } else {
      return (
        <Card className="freelancer-cards">
          <Title level={5} id="title-freelancer-card">OFERTA DE PROYECTO</Title>
          <p id="subtittle-freelancer-card">NO TIENES PROYECTOS</p>
        </Card>
      )
    }    
  }

  return (
    <>
      {/* CARD OFERTA DE PROYECTO */}
      {invitedProject && <FreelancerCards inviteds={invitedProject}/>}

      {/* CARD PROXIMO PAGO */}
      <Card className='freelancer-cards'>
        <Title level={5} id="title-freelancer-card">PROXIMO PAGO</Title>
        <p id='subtittle-freelancer-card'>PROYECTO</p>
        <p id='text-freelancer-card'>Project Name</p>
        <p id='subtittle-freelancer-card'>FECHA DE PAGO</p>
        <p id='text-freelancer-card'>Fecha de Pago</p>
        <p id='subtittle-freelancer-card'>MONTO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>"$50.000"</p>
          <Button shape='round' className="freelancer-card-buttons" onClick={() => modalCargarFactura ? setModalCargarFactura(false) : setModalCargarFactura(true)}> 
            Cargar Factura 
          </Button>
        </div>

        {/* ------- MODAL ------- */}

        <Modal
        visible={modalCargarFactura}
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
        /* onCancel={closeModal} */
        /* onOk={success} */
        closeIcon={<CloseCircleOutlined className="close-button" />}
        bodyStyle={{ color: "#9e39ff" }}
        width={800}
      >
        <div style={{ width: "70%", marginLeft: "70px" }}>
          <h1>Carga tu factura</h1>
        </div>
        <br />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <PlusOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
            <button className="ok-button" onClick={handleClick}>
              Cargar Factura
            </button>
      </Modal>

      {/* ------- MODAL ------- */}

      </Card>
      {/* CARD MI BANCO */}
      <Card className='freelancer-cards'>
        <Title level={5} id="title-freelancer-card">MI BANCO</Title>
        <p id='subtittle-freelancer-card'>CBU/Alias</p>
        <p id='text-freelancer-card'>{currentUser.bankDetails.alias}</p>
        <p id='subtittle-freelancer-card'>TITULAR</p>
        <p id='text-freelancer-card'>{currentUser.bankDetails.accountName}</p>
        <p id='subtittle-freelancer-card'>BANCO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>{currentUser.bankDetails.bankName} </p>
          <MiBancoContainer/>
        </div>
      </Card>
    </>
  );
}

/* 

import React from "react";

import {
  Modal,
  Button,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
  Upload,
  message,
} from "antd";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


function AddPayment({
  handleChangeName,
  handleChangeTerm,
  handleChangeStartDate,
  handleChangeEndDate,
  closeModal,
  success,
  openModal,
  modal,
  form,
}) {


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
        <Form

          initialValues={{ remember: true }}
          onFinish={success}
          form={form}
      
        >
          <Row>
            <Col span={12}>
              <h5 style={{ color: "grey", marginLeft: "70px" }}>PERFIL</h5>
              <Form.Item
                style={{ width: "70%", marginLeft: "70px" }}
                name="name"
                onChange={handleChangeName}
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese nombre del perfil",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <h5 style={{ color: "grey", marginLeft: "70px" }}>PROYECTO</h5>
              <Form.Item
                style={{ width: "70%", marginLeft: "70px" }}
                name="term"
                onChange={handleChangeTerm}
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese proyecto",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <h5 style={{ color: "grey", marginLeft: "70px" }}>
                SELECCIONAR CUOTA A CANCELAR
              </h5>
              <Form.Item
                style={{ width: "70%", marginLeft: "70px" }}
                name="term"
                onChange={handleChangeTerm}
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese Cuota a cancelar",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>

                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <PlusOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
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

export default AddPayment; */