import React, { useState } from "react";
import { storage, db } from "../../firebase/firebase";
import {
  UserOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
  InboxOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Typography, Avatar, Upload, Modal, Input, Button, message } from "antd";
import { useEffect } from "react/cjs/react.development";

const { Title, Text } = Typography;


const { Dragger } = Upload;

export default ({ user, setCurrentUser }) => {
  const [modal, setModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const [image, setImage] = useState("");
  const [previewUrl, setPreviewUrl] = useState(user.avatar || "");
  const [cv, setCv] = useState('')

  const handleChange = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    handleCV(cv)
    setIsLoading(true);
    const file = image;
    const storageRef = storage.ref();
    const task = storageRef.child(`images/${file.name}`);
    await task.put(file);
    await task.getDownloadURL().then((downloadUrl) => {
      db.collection("users")
        .doc(user.id)
        .update({
          avatar: downloadUrl || user.avatar,
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    });
    closeModal();
  };

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleCV = async (info) => {
    setFileUrl(URL.createObjectURL(info.file.originFileObj));
    setLoaded(true);
    const file = info.file.originFileObj;
    const storageRef = storage.ref();
    const task = storageRef.child(`cvs/${info.file.name}`);
    await task.put(file);
    await task.getDownloadURL().then((downloadUrl) => {
      db.collection("users")
        .doc(user.id)
        .update({
          cv: downloadUrl,
        })
        .then(() => { })
        .catch((err) => console.log(err));
    });
  };

  const [dragger, setDragger] = useState(false);
  const [boton, setBoton] = useState(true);

  const props = {
    name: 'file',
    multiple: true,
    action: 'cv',
    onChange(cv) {
      setCv(cv);
      setBoton(false),
        setDragger(true);
    },
  };

  return (
    <>
      <div onClick={openModal} style={{ cursor: "pointer" }}>
        {user.avatar ? (

          <Avatar size={55} src={user.avatar} className="avatar" />

        ) : (
            <Avatar size={55} icon={<UserOutlined />} className="avatar" />
          )}
      </div>
      <Modal
        visible={modal}
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{
          hidden: true,
        }}
        onCancel={closeModal}
        bodyStyle={{ color: "#9e39ff" }}
      >
        <>
          <div className="modal-editProfile-container">
            <h1 className="modal-editProfile-header">Editar datos de perfil</h1>
            <div className="modal-editProfile">
              
                <label
                  style={{
                    cursor: "pointer",                    
                  }}
                  >
                  <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={handleChange}
                    accept="image/png, image/jpeg"
                  />
                  {previewUrl ? (
                    <Avatar size={100} src={previewUrl} className="avatar" />
                  ) : (
                      <Avatar
                        size={100}
                        icon={<UserOutlined />}
                        className="avatar"
                      />
                    )}
                </label>
                <div style={{ margin: "30px 0 50px 0" }}>
                  {!dragger ? (
                    <Dragger {...props} style={{ width: "80%" }}>
                      <p className='ant-upload-drag-icon'>
                        <PlusOutlined style={{ color: "#9e39ff" }} />
                      </p>
                      <p className='ant-upload-text'>
                        Click para cargar CV
                  </p>
                    </Dragger>
                  ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "80%",
                          width: "80%",
                          border: "dashed",
                          borderColor: "gray",
                          padding: "25px",
                        }}>
                        <p style={{ color: "gray" }}> </p>
                        <p>
                          <DeleteOutlined
                            style={{ fontSize: "20px", color: "#9e39ff" }}
                            onClick={() => {
                              setCv({});
                              setDragger(false);
                            }}
                          />
                        </p>
                      </div>
                    )}
                </div>              
            </div>
            <Button
                className="list-button-paymentsFree"
                type="submit"
                onClick={handleSubmit}
              >
                Confirmar cambios
            </Button>            
          </div>
          
        </>
      </Modal>
    </>
  );
};
