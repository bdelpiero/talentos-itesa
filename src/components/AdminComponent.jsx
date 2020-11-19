import React from "react";

/*

admin {
    name: "",
    lastName: "",
    email: "",
    password: "",
}

 */

function AdminComponent({ handleChange, handleSubmit, hClick }) {
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        Nombre
        <input name="name" onChange={handleChange} type="text" />
        <br />
        Apellido
        <input name="lastName" onChange={handleChange} type="text" />
        <br />
        Email
        <input name="email" onChange={handleChange} type="email" />
        <br />
        Contraseña
        <input name="password" onChange={handleChange} type="password" />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default AdminComponent;
