import React, { useState } from "react";
import { storage, db } from "../../firebase/firebase";
import {
  UserOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Typography, Avatar, Upload, Modal, Input, Form } from "antd";

const { Title, Text } = Typography;

// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }

export default ({ user, setCurrentUser }) => {
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState(user.name || "");
  const [userLastName, setUserLastName] = useState(user.lastName || "");
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
          name: userName,
          lastName: userLastName,
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
        .then(() => {})
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <div onClick={openModal} style={{ cursor: "pointer" }}>
        {user.avatar ? (
          <Avatar size={55} src={user.avatar} className="avatar" />
        ) : (
          <Avatar size={55} icon={<UserOutlined />} className="avatar" />
        )}
        <Text type="secondary">
          {user.name} {user.lastName}
        </Text>
      </div>
      <Modal
        visible={modal}
        centered="true"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{
          hidden: true,
        }}
        onCancel={closeModal}
        // closeIcon={<CloseCircleOutlined className='close-button' />}
        bodyStyle={{ color: "#9e39ff" }}
      >
        <>
          <div className="modal-editProfile-container">
            <h1 className="modal-editProfile-header">Editar datos de perfil</h1>
            <div className="modal-editProfile">
              <div className="modal-editProfile-avatar">
                <label
                  style={{
                    cursor: "pointer",
                    marginTop: "70px",
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
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    onChange={handleCV}
                  >
                    {loaded ? <CheckCircleOutlined /> : uploadButton}
                  </Upload>
                </div>
              </div>

              <Form>
                <div>
                  <Form.Item
                    // style={{ width: "60%", marginLeft: "95px" }}
                    name="userName"
                    onChange={handleInputChange}
                  >
                    <Input placeholder={userName} name="userName" />
                  </Form.Item>
                </div>

                <div>
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="userLastName"
                    onChange={handleInputChange}
                  >
                    <Input placeholder={userLastName} name="userLastName" />
                  </Form.Item>
                </div>
                <div className="modal-input" style={{ marginTop: 30 }}>
                  <button
                    className="ok-button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Confirmar cambios
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};
