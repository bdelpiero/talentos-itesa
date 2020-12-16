import React from "react";
import {} from "@ant-design/icons";
import { Modal, Button, Card } from "antd";
// import {ExcelFile, ExcelSheet} from "react-export-excel";
import Workbook from 'react-excel-workbook'
import { useRecoilState } from "recoil";
import {allUsersState,pagos } from "../atoms/index";


const data1 = [
  {
    foo: '123',
    bar: '456',
    baz: '789'
  },
  {
    foo: 'abc',
    bar: 'dfg',
    baz: 'hij'
  },
  {
    foo: 'aaa',
    bar: 'bbb',
    baz: 'ccc'
  }
]

const dataTest = [
  {
  RFERENCIA:"dato aleatorio",
  IMPORTE:"monto",
  "FECHA DE PAGO" : "fecha",
  "CBU BENEFICIARIO" : "",
  "CUIT/CUIL" : "",
  BENEFICIARIO : "",
  "DENOMINACION BENEFICIARIO": "",
  "EMAIL BENEFICIARIO": ""
  },
 
]


function AddPayment() {
  const [pagosPendientes, setPagosPendientes] = useRecoilState(pagos);
  console.log("pagos pendientes",pagosPendientes)
  console.log("data test",dataTest)

  return (
    <div className="Modal">
           
            <Button className="modal-button" >
              Facturas de pago
            </Button>

<div className="row text-center" style={{marginTop: '100px'}}>
    <Workbook filename="example.xlsx" element={<button className="btn btn-lg btn-primary">Try me!</button>}>
      <Workbook.Sheet data={data1} name="Sheet A">
        <Workbook.Column label="Foo" value="foo"/>
        <Workbook.Column label="Bar" value="bar"/>
      </Workbook.Sheet>
    </Workbook>
  </div>
        

    </div>
  );
}

export default AddPayment;
