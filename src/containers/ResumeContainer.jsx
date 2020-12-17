import React, { useState } from "react";
import Resume from "../components/Resume";



export default ({ pendingPayments, setItem, setProject }) => {
 
  const [projects, setProjects] = useState([]);
  const [count, setCount] = useState(0);

  
 function handleCount(){
    co
 }

  return (

    <Resume
    setItem={setItem}
    pendingPayments={pendingPayments}
    />
    
  );
};
