import React, { Component } from 'react';
// Ant-Desing
import { Button, Radio, Card, DatePicker, InputNumber, Row, Col,Space } from 'antd';
import { Content } from 'antd/lib/layout/layout';

export class MiBanco extends Component {
  render() {
    return (
      // cards del dashboard del freelance , sujetas a modificar los campos que deben cambiar.// inputs, y los nombres del freelance...
     
        <Card className="bodyCard" >   
        <h3 id="tittleCard">MI BANCO</h3>    
         <p id="subtittle">CBU/Alias</p>
         <p>Banco EL pepino</p>      
         <p id="subtittle">TITULAR</p>
         <p>Agustin Fregossi</p>        
         <p id="subtittle">BANCO</p>
         <p>Santnader Rio</p>                    
        <Button  className="buttonCard" shape="round"  >Modificar datos</Button>
        </Card>
      
        
 
    )
  }
}

export default MiBanco





