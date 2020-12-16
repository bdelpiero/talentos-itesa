import React, { useState } from "react";
import Workbook from 'react-excel-workbook'
import {Button} from 'antd'
 
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

export default ()=>{
    return(
    <div className="row text-center" style={{marginTop: '100px'}}>
        <Workbook filename="example.xlsx" 
        element={
            <Button  className="modal-button">
                Descargar Pagos
            </Button>
        }>
        <Workbook.Sheet data={data1} name="Sheet A">
            <Workbook.Column label="Foo" value="foo"/>
            <Workbook.Column label="Bar" value="bar"/>
        </Workbook.Sheet>
        </Workbook>
    </div>
    )
}
 