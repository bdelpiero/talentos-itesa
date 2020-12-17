import React, { useRef, useState,useEffect } from "react";
import { Col, Row, Button, Alert, Modal, Form, Input } from "antd";
import SignatureCanvas from "react-signature-canvas";
import ContractProjet from "./pdfs/ContractProjet";
import { useRecoilState } from "recoil";
import { projectInvited, user,isLoading } from "../atoms/index";
import { db } from "../../firebase/firebase";
import { storage } from "../../firebase/firebase";
import SignedContractProject from "../components/pdfs/signedContractProject";
import { pdf } from "@react-pdf/renderer";
import { ConsoleSqlOutlined } from "@ant-design/icons";

export default ({ setItem}) => {
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const signatureRef = useRef({});
  const [imageData, setImageData] = useState("");
  const [errorSignature, setErrorSignature] = useState(false);
  const [show, setShow] = useState(false);
  const [loadingbtn, setLoadingbtn] =useRecoilState(isLoading)



  useEffect(()=>{
    setLoadingbtn(false)
  },[])

  const showModal = () => {
    setShow(true);
  };

  const handleOk = () => {
    setShow(false);
    setItem(1);
  };

  const saveSignature = (signature) => {
    setImageData(signature);
  };

  const handleSubmit = (e, div) => {
    showModal();
    if (!imageData) return setErrorSignature(true);
    const blob = pdf(
      <SignedContractProject
        project={invitedProject.selected}
        imageData={imageData}
      />
    );
    blob
      .toBlob()
      .then((file) => {
        const storageRef = storage.ref();
        //nombre del pdf a guardar en el storage verificar
        const dataName =
          invitedProject.selected.proyecto + "-" + currentUser.lastName;
        const pdfsRef = storageRef.child(`contractUserProject/${dataName}.pdf`);
        pdfsRef
          .put(file)
          .then(function (snapshot) {
            console.log("Uploaded a blob or file!");
          })
          .then(() => {
            return pdfsRef.getDownloadURL().then((downloadUrl) => {
              db.collection("projects")
                .doc(invitedProject.selected.projectId)
                .collection("invitedUser")
                .doc(invitedProject.selected.id)
                .update({
                  status: "On Development",
                  urlContractProject: downloadUrl,
                  signed:true
                });
            });
          });
      })
      .then(() => {
        db.collection("payments")
          .where("userId", "==", invitedProject.selected.id)
          .where("projectId", '==', invitedProject.selected.projectId)
          .where('proyectoAceptado', '==', false)
          .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                let paymentRef = db.collection('payments').doc(doc.id)
                paymentRef.update({proyectoAceptado: true})
                .then(() => console.log('Payment Actualizado!'))
              })
            })
            .catch((err) => console.log('ERROR ACTUALIZANDO PAGOS', err))
      })
      .then(() => {
        let userRef = db.collection("users").doc(invitedProject.selected.id);
        userRef.get()
          .then((doc) => {
            if (!doc.exists) {
              console.log("No such document!");
            } else {
              let user = doc.data();
              userRef.update({
                activeProjectsCounter: user.activeProjectsCounter + 1,
              });
            }
          })
          .catch((err) => {
            console.log("Error getting document", err);
          });
      });
  };

  return (
    <Row>
      <Col span={12} className="col-contract">
        <ContractProjet project={invitedProject.selected} />
      </Col>

      <Col span={12} className="col-contract">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1 style={{ color: "gray", textAlign: "center" }}>
            Firma del acuerdo de confidencialidad
          </h1>
          <br />
          <SignatureCanvas
            ref={signatureRef}
            velocityFilterWeight={0.3}
            penColor="black"
            canvasProps={{
              width: 400,
              height: 150,
              className: "sigCanvas",
              style: { border: "1px solid #000000", borderRadius: "25px" },
            }}
            onEnd={() => {
              saveSignature(
                signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
              ); //base64
              setErrorSignature(false);
            }}
          />
          <br></br>
          <Button
            shape="round"
            block
            htmlType="submit"
            id='accept-project-button'
            onClick={() => {
              signatureRef.current.clear();
              saveSignature(null);
            }}
          >
            Reset
          </Button>
          {errorSignature && (
            <Alert
              message="You need to sign the document to complete the register"
              type="error"
              showIcon
              style={{ margin: 5 }}
            />
          )}
          <Button
            onClick={handleSubmit}
            shape="round"
            block
            htmlType="submit"
            id='accept-project-button'
            loading={show}
          >
            Firmar Contrato
          </Button>
          <Modal
            visible={show}
            centered="true"
            cancelButtonProps={{ hidden: true }}
            okButtonProps={{
              hidden: true,
            }}
            // onCancel={closeModal}
            // closeIcon={<CloseCircleOutlined className="close-button" />}
            bodyStyle={{ color: "#9e39ff" }}
          >
            <>
              <div className="modal-style">
                <br />
                <h3 style={{ color: "grey", textAlign: "center" }}>
                  OFERTA ACEPTADA
                </h3>
                <p style={{ color: "grey" }}> Tu firma ha sido registrada! </p>
                <br />
              </div>
              <div className="modal-input">
                <button className="ok-button" type="submit" onClick={handleOk}>
                  OK
                </button>
              </div>
            </>
          </Modal>
        </div>
      </Col>
    </Row>
  );
};
