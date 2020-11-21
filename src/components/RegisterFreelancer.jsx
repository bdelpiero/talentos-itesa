import React from "react";
import SignatureCanvas from "react-signature-canvas";
// import { Form, Input, InputNumber, Button } from 'antd';

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };

function RegisterFreelancer({
  handleChange,
  handleSubmit,
  handleClick,
  data,
  bankData,
  step,
  error,
}) {
  return (
    <div style={{ maxWidth: "10rem" }}>
      <form onSubmit={handleSubmit}>
        {error.errorType == "empty" && error.errorMessage}
        {step == 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}>
            <label>
              {" "}
              Name:
              <input
                type='text'
                name='name'
                value={data.name}
                onChange={handleChange}
              />
            </label>
            <label>
              {" "}
              Last Name:
              <input
                type='text'
                name='lastName'
                value={data.lastName}
                onChange={handleChange}
              />
            </label>
            <label>
              {" "}
              Email:
              <input
                type='email'
                name='email'
                value={data.email}
                onChange={handleChange}
              />
            </label>
            <label>
              {" "}
              Password:
              <input
                type='password'
                name='password'
                value={data.password}
                onChange={handleChange}
              />
              {error.errorType == "password" && error.errorMessage}
            </label>
            <label>
              {" "}
              Type of freelancer:
              <select
                name='freelancerType'
                value={data.freelancerType}
                onChange={handleChange}>
                <option>Choose your type</option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
              </select>
              {error.errorType == "freelancerType" && error.errorMessage}
            </label>
          </div>
        )}
        {step == 2 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}>
            <label>
              {" "}
              Bank Name:
              <input
                type='text'
                name='bankName'
                value={bankData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              {" "}
              Account Name:
              <input
                type='text'
                name='accountName'
                value={bankData.accountName}
                onChange={handleChange}
              />
            </label>
            <label>
              {" "}
              Alias:
              <input
                type='text'
                name='alias'
                value={bankData.alias}
                onChange={handleChange}
              />
            </label>
            <label>
              {" "}
              CBU:
              <input
                type='number'
                name='cbu'
                value={bankData.cbu}
                onChange={handleChange}
              />
              {error.errorType == "cbu" && error.errorMessage}
            </label>
            <label>
              {" "}
              DNI:
              <input
                type='number'
                name='dni'
                value={bankData.dni}
                onChange={handleChange}
              />
            </label>
          </div>
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
                handleClick(e, element);
              }}>
              {" "}
              CREATE PDF
            </button>
          </div>
        )}
        <br />

        <button type='submit'> Next Step</button>
      </form>
    </div>
  );
}

export default RegisterFreelancer;
