import React, { useState } from "react";
import { db, storage } from '../../firebase/firebase'
import { useRecoilState } from "recoil";
import { atomPayments } from "../atoms/index";


// STYLES
import { Upload, Modal, Button, Typography } from "antd";
import { CloseCircleOutlined, DeleteOutlined, InboxOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Dragger } = Upload;

export default ({ handleModal, modalCargarFactura}) => {
  
  const [factura, setFactura] = useState({});
  const [disable, setDisable] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [cargarFacturas, setCargarFacturas] = useRecoilState(atomPayments);


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
                const paymentRef = db.collection("payments").doc(cargarFacturas.selected.paymentId)
                paymentRef.update({factura: downloadUrl, loadedF: true})
                    .then(() => {
                        console.log('Factura cargada!')
                        handleModal()
                        setFactura({})
                        setButtonLoading(false)
                        setDisable(true)
                    }).then(() => {
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
                                    margin: '1rem auto',
                                    backgroundColor: "#9e39ff",
                                    border: "none",
                                    borderRadius: "10px",
                                },
                            },
                        })
                    })
                    .catch((err) => console.log('ERROR', err))
            })
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
    >
      <div id="modal-invoice">
        <Title level={3}>Carga tu factura</Title>
        {disable ? (
          <Dragger {...props} className="modal-factura-dragger">
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ fontSize: "4rem", color: "#9e39ff" }} />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        ) : (
          <div id="invoice-uploaded">
            <p style={{ margin: "0" }}> Uploaded File: {factura.name} </p>
            <DeleteOutlined
              style={{ fontSize: "1rem", color: "red" }}
              onClick={() => (setFactura({}), setDisable(true))}
            />
          </div>
        )}
        <Button
          shape="round"
          className="freelancer-card-buttons"
          id="cargar-factura-button"
          onClick={handleClick}
          loading={buttonLoading}
          disabled={disable}
        >
          Cargar Factura
        </Button>
      </div>
    </Modal>
  );
};
