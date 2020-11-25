import React, { Component } from 'react';

// Ant-Desing
import { Button, Radio, Card, DatePicker, InputNumber, Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';

export default class ProximoPago extends Component {
  render() {
    return (
        <Card className="bodyCard" >   
        <h3 id="tittleCard">PROXIMO PAGO</h3>    
         <p id="subtittle">PROYECTO</p>
         <p>"ITS202|SATAPP"</p>      
         <p id="subtittle">FECHA DE PAGO</p>
         <DatePicker/>        
         <p id="subtittle">MONTO</p>
         <p><InputNumber 
            defaultValue={50000}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} /></p>                    
        <Button  className="buttonCard" shape="round"  >Cargar Factura</Button>
        </Card>
    )
  }
}
