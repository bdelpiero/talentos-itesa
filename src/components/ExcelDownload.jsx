import React, { useState } from "react";
import Workbook from 'react-excel-workbook'
import {Button} from 'antd'


export default ({pendingPayments})=>{
    console.log(" PENDING PAYMENTS ", pendingPayments)

    const ExcelData=[]
    pendingPayments.map((cuota,i)=>{
        ExcelData.push({
            referencia:++i,
            importe:cuota.monto,
            fecha:cuota.fecha,
            cbu:cuota.user.bankDetails.cbu,
            cuit:cuota.user.bankDetails.cuit,
            denominacion:cuota.user.freelancerType,
            email:cuota.user.email
        })
    })
    return(
   
        <Workbook filename="example.xlsx" 
        element={
            <Button  className="modal-button">
                Descargar Pagos
            </Button>
        }>
        <Workbook.Sheet data={ExcelData} name="Sheet A">
            <Workbook.Column label="REFERENCIA" value="referencia"/>
            <Workbook.Column label="IMPORTE" value="importe"/>
            <Workbook.Column label="FECHA" value="fecha"/>
            <Workbook.Column label="CBU BENEFICIARIO" value="cbu"/>
            <Workbook.Column label="CUIT/CUIL BENEFICIARIO" value="cuit"/>
            <Workbook.Column label="DENOMINACIO BENEFICIARIO" value="denominacion"/>
            <Workbook.Column label="EMAIL BENEFICIARIO" value="email"/>
        </Workbook.Sheet>
        </Workbook>
    
    )
}
 