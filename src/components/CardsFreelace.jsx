import React, { Component } from 'react';
// Ant-Desing
import { Button, Radio , Card, DatePicker, InputNumber, Row, Col} from 'antd';
import { Content } from 'antd/lib/layout/layout';

export class CardsFreelace extends Component {
  render() {
    return (
      // cards del dashboard del freelance , sujetas a modificar los campos que deben cambiar.// inputs, y los nombres del freelance...

        <Row gutter={16}  >
          <Col className="gutter-row" span={6}>
        <Card className="bodyCard"  >   
        <h3 id="tittleCard">OFERTA DE PROYECTO</h3>    
         <p id="subtittle">PROYECTO</p>
         <p>"ITS202|SATAPP"</p>      
         <p id="subtittle">DURACION</p>
         <p>4 SEMANAS</p>     
         <p id="subtittle">MONTO</p>
         <p><InputNumber 
            defaultValue={50000}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} /></p>                    
        <Button  className="buttonCard" shape="round" >Firma Contrato</Button>
        </Card>
        </Col>
        <Col className="gutter-row" span={6}>
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
        </Col>
        <Col  className="gutter-row" span={6}>
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
        </Col>
        </Row>

         )
  }
}

export default CardsFreelace





