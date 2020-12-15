import React, { useState } from "react";
import { user } from "../atoms/index";
import { db, storage } from '../../firebase/firebase'
import { useRecoilState } from "recoil";

// STYLES
import { Upload, Modal, Button, Typography, message } from "antd";
import { CloseCircleOutlined, DeleteOutlined, InboxOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Dragger } = Upload;

export default ({ handleModal, modalCargarFactura, selected }) => {

    const [currentUser, setCurrentUser] = useRecoilState(user);
    const [factura, setFactura] = useState({})
    const [disable, setDisable] = useState(true)
    const [buttonLoading, setButtonLoading] = useState(false)

    const props = {
        name: "file",
        multiple: true,
        action: (file) => {
            setFactura(file)
            disable ? setDisable(false): setDisable(true)
        }
    };
    
    const handleClick = async () => {
        if (factura.name) {
            setButtonLoading(true)
            const storageRef = storage.ref();
            const task = storageRef.child(`facturas/${factura.name}`);
            await task.put(factura);
            await task.getDownloadURL()
                .then((downloadUrl) => {
                    db.collection("payments").where('cuota', '==', selected.cuota).where('projectName', '==', selected.projectName).where('userId', '==', currentUser.id).get()
                        .then((payment) => {
                            let paymentId = payment.docs[0].id
                            db.collection('payments').doc(paymentId).update({ factura: downloadUrl })
                                .then(() => {
                                    setFactura({})
                                    setButtonLoading(false)
                                    setDisable(true)
                                    handleModal()
                                    console.log('URL and Document Uploaded')
                                })
                                .then(() => {
                                    Modal.success({
                                        bodyStyle: {
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        },
                                        content: "¡Factura Cargada!",
                                        centered: "true",
                                        okText: "VOLVER",
                                        icon: <CheckCircleOutlined style={{ color: "#9e39ff" }} />,
                                        okButtonProps: {
                                            style: {
                                                display: 'flex',
                                                alignSelf: "center",
                                                backgroundColor: "#9e39ff",
                                                border: "none",
                                                borderRadius: "10px",
                                            },
                                        },
                                    })
                                })
                        })
                        .catch((err) => console.log('ERROR', err))
                });
        }
    }

    return (
        <Modal
            visible={modalCargarFactura}
            centered="true"
            cancelButtonProps={{ hidden: true }}
            okButtonProps={{ hidden: true }}
            onCancel={handleModal}
            closeIcon={<CloseCircleOutlined className="close-button" />}
            width={600}
            title='Carga tu factura'
        >
            <div id='modal-invoice'>
                {disable ?
                (
                    <Dragger {...props} >
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined style={{fontSize: '4rem', color: '#9e39ff'}}/>
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                ) : (
                    <div id='invoice-uploaded'>
                        <p style={{margin: '0'}}> Uploaded File: {factura.name} </p>
                        <DeleteOutlined 
                        style={{fontSize: '1rem', color: 'red'}}
                        onClick={() => (setFactura({}), setDisable(true))}/>
                    </div>
                )}
                <Button 
                shape='round' 
                className="freelancer-card-buttons" 
                id='cargar-factura-button' 
                onClick={handleClick} 
                loading={buttonLoading}
                disabled={disable}
                >
                    Cargar Factura
                </Button>

            </div>
        </Modal>
    )
}
