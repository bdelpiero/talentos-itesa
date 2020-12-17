import React, { useState } from "react";
import { db, storage } from '../../firebase/firebase'

// STYLES
import { Upload, Modal, Button, Typography } from "antd";
import { CloseCircleOutlined, DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import CheckCircle from "../../views/check.svg";

const { Title } = Typography;
const { Dragger } = Upload;

export default ({ handleModal, modalCargarFactura, selected }) => {
  
  const [factura, setFactura] = useState({});
  const [disable, setDisable] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

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
                const paymentRef = db.collection("payments").doc(selected.paymentId)
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
                            content: <h1>¡Factura Cargada!</h1>,
                            centered: "true",
                            okText: "VOLVER",
                            icon: <img src={CheckCircle} className="icono-sider" />,
                            okButtonProps: {
                                style: {
                                  backgroundColor: "#9e39ff",
                                  border: "none",
                                  borderRadius: "20px",
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
        <Title level={3}>Cargá tu factura</Title>
        {disable ? (
          <Dragger {...props} className="modal-factura-dragger">
            <p className="ant-upload-drag-icon">
              <PlusOutlined style={{ fontSize: "4rem", color: "#9e39ff" }} />
            </p>
            <p className="ant-upload-text">
              Arrastra o carga tu factura acá
            </p>
          </Dragger>
        ) : (
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height:"80%",
            width:"80%",
            border: "dashed",
            borderColor:"green",
            padding:"25px"
          }}>
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
