import React from 'react'
import {Col,Row,Button} from 'antd'
import SignatureCanvas from "react-signature-canvas";


export default ()=>{
    return (<Row>
      <Col span={12} className='col-contract'>col-4</Col>
      <Col span={12} className='col-contract'>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height:'100%'}}>
        <SignatureCanvas
              // ref={signatureRef}
              velocityFilterWeight={0.3}
              penColor='black'
              canvasProps={{
                width: 400,
                height: 150,
                className: "sigCanvas",
                style: { border: "1px solid #000000", borderRadius: '25px' },
              }}
              onEnd={
                () =>{
                  console.log("aqui se firmo chingon")
                  // saveSignature(
                  //   signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
                  // ) //base64
                  // setErrorSignature(false)
              }}
            />
            <br></br>
            <Button
              // onClick={handleClick}
              style={{ backgroundColor: 'lightgray', border: 0, width: '30%' }}
              shape='round'
              block
              type='primary'
              htmlType='submit'
              className='register-button'
              onClick={() => {
                // signatureRef.current.clear();
                // saveSignature(null);
                }}
              >
                Reset
              </Button>
            <Button
              // onClick={handleSubmit}
              style={{ backgroundColor: '#a77ffa', border: 0 }}
              shape='round'
              block
              type='primary'
              htmlType='submit'
              className='register-button'
              >
                Firmar Contrato
              </Button>
              </div>
      </Col>
      </Row>
    )
}