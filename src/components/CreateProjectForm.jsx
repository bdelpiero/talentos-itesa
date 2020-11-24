// import React from "react";
// import { Link } from "react-router-dom";
// import Tabla from "./Table";
// import { Form, Input, Button, Select } from "antd";

// function CreateProyect({
//   handleChangeName,
//   handleChangeTerm,
//   handleChangeStatus,
//   handleChangeStartDate,
//   handleChangeEndDate,
//   handleSubmit,
//   status,
// }) {
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

//   const { Option } = Select;

//   return (
//     <>
//       <Form
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
// {/* 
//       <div>
//         <Tabla />
//       </div> */}
//     </>
//   );
// }

// export default CreateProyect;
