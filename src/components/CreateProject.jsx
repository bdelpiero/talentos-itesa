// import React from 'react'
// import { Modal, Button, Form, Input } from 'antd';
// import CreateProjectForm from "./CreateProjectForm"

// function ModalUser(){
//   const [visible, setVisible] = React.useState(false);
//   const [confirmLoading, setConfirmLoading] = React.useState(false);
//   const [modalText, setModalText] = React.useState('Content of the modal');

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleOk = () => {
//     setModalText('The modal will be closed after two seconds');
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setVisible(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

//   const handleCancel = () => {
//     console.log('Clicked cancel button');
//     setVisible(false);
//   };

//   const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 8 },
//   };
//   const tailLayout = {
//     wrapperCol: { offset: 8, span: 8 },
//   };

//   const onReset = () => {
//     form.resetFields();
//   };

//   return (
//     <>
//       <Button style={{ color: "#9749f8" }} onClick={showModal}>
//         INVITAR
//       </Button>
//       <Modal
//         title="Title"
//         visible={visible}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//       >
//         <Form
//         {...layout}
//         initialValues={{ remember: true }}
//         onFinish={handleSubmit}
//         // onFinishFailed={onFinishFailed}
//       >
//         <Form.Item
//           label="Nombre del Proyecto"
//           name="name"
//           onChange={handleChangeName}
//           rules={[
//             {
//               required: true,
//               message: "Por favor ingrese Nombre del Proyecto",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Duración"
//           name="term"
//           onChange={handleChangeTerm}
//           rules={[
//             {
//               required: true,
//               message: "Por favor ingrese duración del Proyecto",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Inicio"
//           name="startDate"
//           onChange={handleChangeStartDate}
//           rules={[
//             { required: true, message: "Por favor ingrese fecha de inicio" },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Finalización"
//           name="endDate"
//           onChange={handleChangeEndDate}
//           rules={[
//             {
//               required: true,
//               message: "Por favor ingrese fecha de finalizacion",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Estado"
//           name="status"
//           onChange={handleChangeStatus}
//           rules={[{ required: true }]}
//         >
//           <Select onChange={handleChangeStatus} allowClear>
//             <Option value="ondevolpment">On Devolpment </Option>
//             <Option value="finished"> Finished </Option>
//           </Select>
//         </Form.Item>

//         <Form.Item {...tailLayout}>
//           <Button type="primary" htmlType="submit">
//             Crear Proyecto
//           </Button>
//         </Form.Item>
//       </Form>
//       </Modal>
//     </>
//   );
// };

// export default ModalUser;