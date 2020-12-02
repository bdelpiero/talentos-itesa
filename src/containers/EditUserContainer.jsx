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

// export default ({ user }) => {

export default ({ user }) => {
  console.log("user en el avatar", user.avatar);
  const [modal, setModal] = useState(false);
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
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  // const handleInputChange = () => {

  // }

  const handleSubmit = async (e) => {
    console.log("image", image);
    const file = image;
    const storageRef = storage.ref();
    const task = storageRef.child(`images/${file.name}`);
    await task.put(file);
    await task.getDownloadURL().then((downloadUrl) => {
      console.log("downloadUlr", downloadUrl);
      db.collection("users")
        .doc(user.id)
        .update({
          avatar: downloadUrl,
        })
        .then(() => console.log("cambios realizados con éxito"))
        .catch((err) => console.log(err));
    });
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
            <br />
            {/* <Upload onChange={handleChange}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload> */}
            {previewUrl ? (
              <Avatar size={64} src={previewUrl} className='avatar' />
            ) : (
              <Avatar size={64} icon={<UserOutlined />} className='avatar' />
            )}
            <input type='file' onChange={handleChange} />
            <Button onClick={handleSubmit}>Confirmar cambios</Button>

            {/* <Form onFinish={handleSubmit}>
              <div>
                <Form.Item
                  style={{ width: "60%", marginLeft: "95px" }}
                  name='name'
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
                  Confirmar cambios
                </button>
              </div>
            </Form> */}
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
