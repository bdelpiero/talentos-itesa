import React from "react";
import { Link } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { Form, Input, Select, Button, Steps } from "antd";

const { Step } = Steps;

const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${name} is not a valid email!",
    number: "${name} is not a valid number!",
    password: "${name} please input your password!",
  },
};

function RegisterFreelancer({
  handleChange,
  handleSubmit,
  handleConfirm,
  data,
  bankData,
  step,
  error,
}) {
  return (
    <div className='register-formContainer'>
      {step == 1 && (
        <Form
          onFinish={handleConfirm}
          validateMessages={validateMessages}
          className='refister-form'>
          <h1 style={{ color: "gray", textAlign: "center" }}>Creá tu cuenta</h1>
          <Form.Item
            hasFeedback
            name='freelancerType'
            value={data.freelancerType}
            onChange={handleChange}
            rules={[{ required: true, message: "Please select an option" }]}>
            <Select allowClear placeholder='Tipo de freelancer'>
              <Select.Option value='developer'>Developer</Select.Option>
              <Select.Option value='designer'>Designer</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='name'
            value={data.name}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Nombre' name='name' />
          </Form.Item>
          <Form.Item
            name='lastName'
            value={data.lastName}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Apellido' name='lastName' />
          </Form.Item>
          <Form.Item
            name='email'
            value={data.email}
            onChange={handleChange}
            rules={[
              {
                type: "email",
              },
            ]}>
            <Input placeholder='Email' name='email' />
          </Form.Item>
          <Form.Item
            name='password'
            value={data.password}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
              {
                min: 6,
                message: "Password must be minimum 6 characters.",
              },
            ]}>
            <Input.Password
              placeholder='Contraseña'
              name='password'
              style={{
                border: 0,
                borderBottomWidth: 0.3,
                borderBottomStyle: "solid",
                borderBottomColor: "lightgray",
              }}
            />
          </Form.Item>

          <Form.Item
            name='confirm'
            value={data.confirm}
            onChange={handleChange}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}>
            <Input.Password
              placeholder='Repetir Contraseña'
              name='confirm'
              style={{
                border: 0,
                borderBottomWidth: 0.3,
                borderBottomStyle: "solid",
                borderBottomColor: "lightgray",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              shape='round'
              block
              type='primary'
              htmlType='submit'
              className='register-button'>
              Confirmar
            </Button>
          </Form.Item>
          <div className='register-steps'>
            <Button shape='round' style={{ backgroundColor: "pink" }}>
              {" "}
            </Button>
            <Button shape='round'> </Button>
            <Button shape='round'> </Button>
          </div>
          <div className='register-link'>
            <Link to='/login' style={{ color: "gray" }}>
              Already have an account? Login
            </Link>
          </div>
        </Form>
      )}
      {step == 2 && (
        <Form
          onFinish={handleConfirm}
          validateMessages={validateMessages}
          className='refister-form'>
          <h1 style={{ color: "gray", textAlign: "center" }}>
            Registrá tus datos fiscales
          </h1>
          <Form.Item
            name='cuit'
            value={bankData.cuit}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Cuit' name='cuit' />
          </Form.Item>
          <Form.Item
            name='alias'
            value={bankData.alias}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Alias de cuenta' name='alias' />
          </Form.Item>
          <Form.Item
            name='bankName'
            value={bankData.name}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Banco' name='bankName' />
          </Form.Item>
          <Form.Item
            name='accountName'
            value={bankData.accountName}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Titular de cuenta' name='accountName' />
          </Form.Item>

          <Form.Item
            name='type'
            value={bankData.type}
            onChange={handleChange}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder='Tipo de factura a emitir' name='type' />
          </Form.Item>
          <Form.Item>
            <Button
              shape='round'
              block
              type='primary'
              htmlType='submit'
              className='register-button'>
              Confirmar
            </Button>
          </Form.Item>

          <div className='register-steps'>
            <Button shape='round'> </Button>
            <Button shape='round' style={{ backgroundColor: "orange" }}>
              {" "}
            </Button>
            <Button shape='round'> </Button>
          </div>
          <div className='register-link'>
            <Link to='/login' style={{ color: "gray" }}>
              Already have an account? Login
            </Link>
          </div>
        </Form>
      )}
      {step == 3 && (
        <div>
          <div
            id='to-print'
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}>
            <div>PDF TEST HOLAAAAAAAAAAAAAAAAAA</div>
            {/* SIGNATURE */}
            <div style={{ width: 500, border: "1px solid black" }}>
              <SignatureCanvas
                penColor='green'
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: "sigCanvas",
                }}
              />
            </div>
          </div>
          <button
            onClick={(e) => {
              let element = document.getElementById("to-print");
              handleSubmit(e, element);
            }}>
            {" "}
            CREATE PDF
          </button>
        </div>
      )}
    </div>
    // <div style={{ maxWidth: "10rem" }}>
    //   <form onSubmit={handleSubmit}>
    //     {error.errorType == "empty" && error.errorMessage}
    //     {step == 1 && (
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "space-around",
    //         }}>
    //         <label>
    //           {" "}
    //           Name:
    //           <input
    //             type='text'
    //             name='name'
    //             value={data.name}
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           {" "}
    //           Last Name:
    //           <input
    //             type='text'
    //             name='lastName'
    //             value={data.lastName}
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           {" "}
    //           Email:
    //           <input
    //             type='email'
    //             name='email'
    //             value={data.email}
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           {" "}
    //           Password:
    //           <input
    //             type='password'
    //             name='password'
    //             value={data.password}
    //             onChange={handleChange}
    //           />
    //           {error.errorType == "password" && error.errorMessage}
    //         </label>
    //         <label>
    //           {" "}
    //           Type of freelancer:
    //           <select
    //             name='freelancerType'
    //             value={data.freelancerType}
    //             onChange={handleChange}>
    //             <option>Choose your type</option>
    //             <option value='developer'>Developer</option>
    //             <option value='designer'>Designer</option>
    //           </select>
    //           {error.errorType == "freelancerType" && error.errorMessage}
    //         </label>
    //       </div>
    //     )}
    //     {step == 2 && (
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "space-around",
    //         }}>
    //         <label>
    //           {" "}
    //           Bank Name:
    //           <input
    //             type='text'
    //             name='bankName'
    //             value={bankData.name}
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           {" "}
    //           Account Name:
    //           <input
    //             type='text'
    //             name='accountName'
    //             value={bankData.accountName}
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           {" "}
    //           Alias:
    //           <input
    //             type='text'
    //             name='alias'
    //             value={bankData.alias}
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           {" "}
    //           CBU:
    //           <input
    //             type='number'
    //             name='cbu'
    //             value={bankData.cbu}
    //             onChange={handleChange}
    //           />
    //           {error.errorType == "cbu" && error.errorMessage}
    //         </label>
    //         <label>
    //           {" "}
    //           DNI:
    //           <input
    //             type='number'
    //             name='dni'
    //             value={bankData.dni}
    //             onChange={handleChange}
    //           />
    //         </label>
    //       </div>
    //     )}
    //     {step == 3 && (
    //       <div>
    //         <div
    //           id='to-print'
    //           style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             justifyContent: "space-around",
    //           }}>
    //           <div>PDF TEST HOLAAAAAAAAAAAAAAAAAA</div>
    //           {/* SIGNATURE */}
    //           <div style={{ width: 500, border: "1px solid black" }}>
    //             <SignatureCanvas
    //               penColor='green'
    //               canvasProps={{
    //                 width: 500,
    //                 height: 200,
    //                 className: "sigCanvas",
    //               }}
    //             />
    //           </div>
    //         </div>
    //         <button
    //           onClick={(e) => {
    //             let element = document.getElementById("to-print");
    //             handleClick(e, element);
    //           }}>
    //           {" "}
    //           CREATE PDF
    //         </button>
    //       </div>
    //     )}
    //     <br />

    //     <button type='submit'> Next Step</button>
    //   </form>
    // </div>
  );
}

export default RegisterFreelancer;
