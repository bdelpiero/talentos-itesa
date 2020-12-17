import React, {useState } from "react";
import {Link} from "react-router-dom"
// Ant-Desing
import {  
  Button,
  Row,
  Col,
  Avatar,
  Card,
  Typography,
  Pagination,
  Table,
  Dropdown,
  Menu, } from "antd";
import { DownloadOutlined,
  EllipsisOutlined,
  DeleteOutlined, } from "@ant-design/icons"
  import AddPaymentContainer from "../containers/AddPaymentContainer";
  import AddSinglePaymentContainer from "../containers/AddSinglePaymentContainer";
  import ExcelDownload from "./ExcelDownload";
  import { db } from "../../firebase/firebase";


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
  
  
  function menu(payment) {
    return (
      <Menu>
        <Menu.Item>
          <div>
            <Button className="list-button-paymentsList">
              <a
                href={payment.factura}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver factura
              </a>
            </Button>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div>
            <Button 
            className='list-button-paymentsList'
            >
              <a 
              href={payment.comprobantePago} 
              target="_blank" 
               rel="noopener noreferrer">
              Ver pago 
              </a>
            </Button>
          </div>
        </Menu.Item>
        
      </Menu>
    );
  }
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
              <div className="prueba paymentCards-card">
                <Row align={"middle"} className="prueba1" gutter={24}>                 
                   <Col cxs={4} sm={4} md={4} lg={2}>
                     <Avatar 
                     size={48}
                     src={user && user.avatar}/>
                   </Col>
                   <Col xs={4} sm={4} md={4} lg={2}>
                     <h1>{"$" + payment.monto}</h1>
                   </Col>
                   <Col xs={6} sm={6} md={4} lg={3}>
                     <p style={{ color: "#9e39ff", margin: 0 }}>Proyecto:</p>
                     <p style={{ margin: 0 }}> {payment.projectName}</p>
                   </Col>
                   <Col cxs={4} sm={4} md={4} lg={3}>
                     <p style={{ color: "#9e39ff", margin: 0 }}>Factura:</p>
                     <p style={{ margin: 0 }}> {payment.cuota}</p>
                   </Col>
                   <Col xs={4} sm={4} md={4} lg={3} className="hide-button">
                     <p style={{ color: "#9e39ff", margin: 0 }}>
                       Fecha de pago:
                     </p>
                     <p style={{ margin: 0 }}> {payment.fecha}</p>
                   </Col>
                   <Col xs={1} sm={1} md={1} lg={5}>
                   <a href={payment.comprobantePago} target="_blank" download>
                     <Button className='list-button-paymentsList hide-button' shape='round'>
                       Ver pago <DownloadOutlined />
                     </Button>
                     </a>
                   </Col>
                   <Col xs={2} sm={2} md={2} lg={5}>
                   <a href={payment.factura} target="_blank" download>
                     <Button className='list-button-paymentsList hide-button' shape='round'>
                       Ver factura <DownloadOutlined />
                     </Button>
                     </a>
                   </Col>
                   <div className="show-ellipsis">
                    <Col xs={2} sm={2} md={2} lg={4}>
                      {" "}
                      <Dropdown overlay={menu(payment)} placement="bottomLeft">
                        <EllipsisOutlined className="single-icon" />
                      </Dropdown>
                    </Col>
                  </div>
                 </Row>
               </div>
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


