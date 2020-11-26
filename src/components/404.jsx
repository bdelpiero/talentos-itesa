import React from "react";
import { useHistory } from "react-router-dom"
import { Result, Button } from 'antd';


export default () => {
    const history = useHistory();
  return (
    <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button 
            className="botonauth"
            type='primary'
            onClick={()=>history.push("/")}
            >Back Home</Button>}
  />
  );
};
