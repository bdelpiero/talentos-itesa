import React, { Component } from 'react';
// Ant-Desing
import { Button, Radio, Card, DatePicker, InputNumber, Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';

export default class OfertaProyecto extends Component {
  render() {
    return (
      
          <Card className="bodyCard" >   
        <h3 id="tittleCard">OFERTA DE PROYECTO</h3>    
         <p id="subtittle">PROYECTO</p>
         <p>"ITS202|SATAPP"</p>      
         <p id="subtittle">DURACION</p>
         <p>4 Semanas</p>     
         <p id="subtittle">MONTO</p>
         <p><InputNumber 
            defaultValue={50000}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} /></p>                    
        <Button  className="buttonCard" shape="round" >Firma Contrato</Button>
        </Card>
        
      
    )
  }
}
