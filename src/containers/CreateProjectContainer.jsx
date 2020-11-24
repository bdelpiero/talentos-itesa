// import React, { useState, useEffect } from "react";
// import { db } from "../../firebase/firebase";
// import CreateProyectForm from "../components/CreateProyectForm";

// function CreateProyectContainer() {
//   const [name, setName] = useState("");
//   const [status, setStatus] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [term, setTerm] = useState("");
//   // const [users, setUsers] = useState([]);
//   // const [admins,setAdmin] = useState("")

//   const handleChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const handleChangeStatus = (e) =>{
//     setStatus(e.target.value)
//   }

//   const handleChangeStartDate = (e) =>{
//     setStartDate(e.target.value)
//   }

//   const handleChangeEndDate = (e) =>{
//     setEndDate(e.target.value)
//   }

//   const handleChangeTerm = (e) =>{
//     setTerm(e.target.value)
//   }


//   const handleSubmit = (e) => {
//     console.log("llego al submit");
//     db.collection("projects")
//       .add({
//         name,
//         status,
//         startDate,
//         endDate,
//         term,
//         // admins,
//       })
//       .then(() => {
//         console.log("Se creo correctamente");
//       });
//   };

//   // useEffect(()=>{
//   //   db.collection("admins").get()
//   //   .then((user)=>{
//   //     setUsers(user.docs)
//   //   })
//   // },[])

//   return (
//     <CreateProyectForm
//       // usuarios={users}
//       handleChangeName={handleChangeName}
//       handleChangeStatus={handleChangeStatus}
//       handleChangeStartDate={handleChangeStartDate}
//       handleChangeEndDate={handleChangeEndDate}
//       handleChangeTerm={handleChangeTerm}
//       handleSubmit={handleSubmit}
//       status={status}

//     ></CreateProyectForm>
//   );
// }

// export default CreateProyectContainer;
