import React, {useState } from "react";
import {Link} from "react-router-dom"
// Ant-Desing
import { Button, Radio, Card, Row, Col, List, Avatar, Pagination } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DownloadOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;


export default ({user, receivedPayments})=>  {

  const [currentPage, setCurrentPage] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);
  const numEachPage = 4;

  const handleChange = (value) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue(value * numEachPage);
    setCurrentPage(value);
  };
  
    return (
       <>
       <div className='div-excel'>
         <Title level={3} style={{ width: "100%" }}>
         Pagos Recibidos
         </Title>

       </div>
       <div>
         {receivedPayments.length > 0 &&
           receivedPayments.slice(minValue, maxValue).map((payment) => {
             return (
               <Card
                 className='paymentCards-card'
                 style={{
                   borderRadius: 25,
                   marginBottom: 15,
                   boxShadow: "-5px 5px lightgray",
                 }}>
                 <Row className='paymentsCards' align='middle'>
                   <Col className='gutter-row' span={3}>
                     <Avatar
                       size={55}
                       src={user && user.avatar}
                       className='avatar'
                     />
                   </Col>
                   <Col span={3}>
                     <h1>${payment.monto}</h1>
                   </Col>
                   <Col span={4}>
                     <p style={{ color: "#9e39ff", margin: 0 }}>Proyecto:</p>
                     <p style={{ margin: 0 }}> {payment.projectName}</p>
                   </Col>
                   <Col className='gutter-row' span={4}>
                     <p style={{ color: "#9e39ff", margin: 0 }}>Factura:</p>
                     <p style={{ margin: 0 }}> {payment.cuota}</p>
                   </Col>
                   <Col className='gutter-row' span={4}>
                     <p style={{ color: "#9e39ff", margin: 0 }}>
                       Fecha de pago:
                     </p>
                     <p style={{ margin: 0 }}> {payment.fecha}</p>
                   </Col>
                   <Col className='gutter-row' span={3}>
                   <a href={payment.comprobantePago} target="_blank" download>
                     <Button className='list-button-paymentsFree' shape='round'>
                       Ver pago <DownloadOutlined />
                     </Button>
                     </a>
                   </Col>

                   <Col className='gutter-row' span={3}>
                   <a href={payment.factura} target="_blank" download>
                     <Button className='list-button-paymentsFree' shape='round'>
                       Ver factura <DownloadOutlined />
                     </Button>
                     </a>
                   </Col>
                 </Row>
               </Card>
             );
           })}
         <div
           style={{ display: "flex", justifyContent: "flex-end", margin: 20 }}>
           <Pagination
             //defaultCurrent={1}
             current={currentPage}
             defaultPageSize={numEachPage}
             total={receivedPayments.length}
             onChange={handleChange}
           />
         </div>
       </div>
     </>
    );
  
}

// export default PagosFreelace;
