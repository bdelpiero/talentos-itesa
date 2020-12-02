import React, { useState } from "react";
import { storage, db } from "../../firebase/firebase";
import {
  UserOutlined,
  UploadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Row,
  Col,
  Typography,
  Avatar,
  Upload,
  Modal,
  Button,
  Card,
  Input,
  Form,
} from "antd";

const { Title, Text } = Typography;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default ({ user, setCurrentUser }) => {
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState(user.name || "");
  const [userLastName, setUserLastName] = useState(user.lastName || "");

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const [image, setImage] = useState("");
  //const [url, setUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState(user.avatar || "");

  const handleChange = (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleInputChange = (e) => {
    if (e.target.name == "userName") setUserName(e.target.value);
    if (e.target.name == "userLastName") setUserLastName(e.target.value);
  };

  const handleSubmit = async (e) => {
    const file = image;
    const storageRef = storage.ref();
    const task = storageRef.child(`images/${file.name}`);
    await task.put(file);
    await task.getDownloadURL().then((downloadUrl) => {
      //console.log("downloadUlr", downloadUrl);
      db.collection("users")
        .doc(user.id)
        .update({
          avatar: downloadUrl || user.avatar,
          name: userName,
          lastName: userLastName,
        })
        .then(() => {
          console.log("cambios realizados con éxito");
        })
        .catch((err) => console.log(err));
    });
    closeModal();
  };

  return (
    <>
      <div onClick={openModal}>
        {user.avatar ? (
          <Avatar size={64} src={user.avatar} className='avatar' />
        ) : (
          <Avatar size={64} icon={<UserOutlined />} className='avatar' />
        )}
        <Text type='secondary'>
          {user.name} {user.lastName}
        </Text>
      </div>
      <Modal
        visible={modal}
        centered='true'
        // cancelButtonProps={{ hidden: true }}
        // okButtonProps={{
        //   hidden: true,
        // }}
        onCancel={closeModal}
        // closeIcon={<CloseCircleOutlined className='close-button' />}
        bodyStyle={{ color: "#9e39ff" }}>
        <>
          <div className='modal-style'>
            <h1>Editar perfil</h1>
            <br />
            {previewUrl ? (
              <Avatar size={64} src={previewUrl} className='avatar' />
            ) : (
              <Avatar size={64} icon={<UserOutlined />} className='avatar' />
            )}
            <label
              style={{
                border: "1px solid #ccc",
                display: "inline-block",
                padding: "6 12",
                cursor: "pointer",
              }}>
              <input
                style={{ display: "none" }}
                type='file'
                onChange={handleChange}
                accept='image/png, image/jpeg'
              />
              Upload image
            </label>

            <Form onFinish={handleSubmit}>
              <div>
                <Form.Item
                  // style={{ width: "60%", marginLeft: "95px" }}
                  name='userName'
                  onChange={handleInputChange}>
                  <Input placeholder={userName} name='userName' />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  // style={{ width: "60%", marginLeft: "95px" }}
                  name='userLastName'
                  onChange={handleInputChange}>
                  <Input placeholder={userLastName} name='userLastName' />
                </Form.Item>
              </div>
              <div className='modal-input'>
                <button className='ok-button' type='submit'>
                  Confirmar cambios
                </button>
              </div>
            </Form>
          </div>
          {/* <h5 style={{ color: "grey", marginLeft: "95px" }}>MAIL DEL PERFIL</h5>
          <Form onFinish={success}>
            <div>
              <Form.Item
                style={{ width: "60%", marginLeft: "95px" }}
                name='email'
                onChange={handleChange}
                rules={[
                  {
                    required: true,
                    message: "El email es requerido",
                  },
                  {
                    message: "Ingrese un mail válido",
                    type: "email",
                  },
                ]}>
                <Input placeholder='Ej: talentos@itesa.com.ar' name='email' />
              </Form.Item>
            </div>
            <div className='modal-input'>
              <button className='ok-button' type='submit'>
                INVITAR
              </button>
            </div>
          </Form> */}
        </>
      </Modal>
    </>
  );
};
