import React from 'react';
import ReactExport from 'react-data-export';
import { Button } from 'antd'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


export default ({ pendingPayments }) => {

	console.log(pendingPayments)

	const dataCells = () => {
		let paymentsData = []
		pendingPayments.map((payment, i) => 
			paymentsData = [...paymentsData, {
				referencia: payment.projectName,
				importe: payment.monto,
				fecha: payment.fecha,
				cbu: payment.user.bankDetails.cbu,
				cuit: payment.user.bankDetails.cuit,
				denominacion: payment.user.freelancerType,
				email: payment.user.email,
			}]
		)
		let allRows = []
		paymentsData.map((payment) => {
			let row = []
			Object.values(payment).map( (data) =>{ 
				let newCell = {
					value: data, 
					style: {
						font: {bold: true}, 
						alignment: { vertical: 'center', horizontal: 'center'}
					}
				}
				row = [...row, newCell]
			})
			allRows = [...allRows, row]
		})
		return allRows
	}

	let date = new Date().toDateString()
	console.log(date)

	const multiDataSet = [
		{
			columns: [
				{
					title: "REFERENCIA", 
					width: {wpx: 200}, //pixels w
					style: {
						fill: {patternType: "solid", fgColor: {rgb: "FF808080"}}, 
						font: {color: {rgb: "FFffffff", bold: true}}, 
						alignment: { vertical: 'center', horizontal: 'center'}, 
						border: { style: 'medium', color: {rgb: "FF000000"} } 
					}
				},
				{
					title: "IMPORTE", 
					width: {wpx: 125}, //char w
					style: {
						fill: {patternType: "solid", fgColor: {rgb: "FF808080"}}, 
						font: {color: {rgb: "FFffffff"}}, 
						alignment: { vertical: 'center', horizontal: 'center'}, 
						border: { style: 'medium', color: {rgb: "FF000000"} } 
					}
				},
				{
					title: "FECHA DE PAGO", 
					width: {wpx: 200},
					style: {
						fill: {patternType: "solid", fgColor: {rgb: "FF808080"}}, 
						font: {color: {rgb: "FFffffff"}}, 
						alignment: { vertical: 'center', horizontal: 'center'}, 
						border: { style: 'medium', color: {rgb: "FF000000"} } 
					}
				},
				{
					title: "CBU BENEFICIARIO", 
					width: {wpx: 200},
					style: {
						fill: {patternType: "solid", fgColor: {rgb: "FF808080"}}, 
						font: {color: {rgb: "FFffffff"}}, 
						alignment: { vertical: 'center', horizontal: 'center'}, 
						border: { style: 'medium', color: {rgb: "FF000000"} } 
					}
				},
				{
					title: "CUIT/CUIL BENEFICIARIO", 
					width: {wpx: 200},
					style: {
						fill: {patternType: "solid", fgColor: {rgb: "FF808080"}}, 
						font: {color: {rgb: "FFffffff"}}, 
						alignment: { vertical: 'center', horizontal: 'center'}, 
						border: { style: 'medium', color: {rgb: "FF000000"} } 
					}
				},
				{
					title: "DENOMINACION BENEFICIARIO", 
					width: {wpx: 200},
					style: {
						fill: {patternType: "solid", fgColor: {rgb: "FF808080"}}, 
						font: {color: {rgb: "FFffffff"}}, 
						alignment: { vertical: 'center', horizontal: 'center'}, 
						border: { style: 'medium', color: {rgb: "FF000000"} } 
					}
				},
				{
					title: "EMAIL BENEFICIARIO", 
					width: {wpx: 200}, 
					style: {
						fill: {patternType: "solid", fgColor: {rgb: "FF808080"}}, 
						font: {color: {rgb: "FFffffff"}}, 
						alignment: { vertical: 'center', horizontal: 'center'}, 
						border: { style: 'medium', color: {rgb: "FF000000"} } 
					}
				},

			],
			data: dataCells()
		}
	];

        return (
            
                <ExcelFile  element={<Button  style={{width:"150px !important", margin:"5px"}}className='modal-button2'>Descargar Pagos</Button>} filename={`TransferenciasMasivas_${date}`}>
                    <ExcelSheet dataSet={multiDataSet} name="Transferencias"/>
                </ExcelFile>
            
        );
}
