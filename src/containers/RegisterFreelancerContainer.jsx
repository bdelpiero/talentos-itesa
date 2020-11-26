import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import RegisterFreelancer from "../components/RegisterFreelancer";
import { db } from "../../firebase/firebase";
import { authUser } from "../../auth/auth";
import { storage } from "../../firebase/firebase";

// UTILS
import Logo from "../../views/logo-itesa.svg";
import SignedDocument from "../components/pdfs/SignedDocument";
import Contract from "../components/pdfs/Contract";
import { pdf } from "@react-pdf/renderer";

function RegisterFreelancerContainer() {
  const signatureRef = useRef({});
  const history = useHistory();
  const { signup } = authUser();
  const [imageData, setImageData] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorSignature, setErrorSignature] = useState(false);
  const [invited, setInvited] = useState(true);

  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    freelancerType: "",
  });

  const [bankData, setBankData] = useState({
    bankName: "",
    accountName: "",
    alias: "",
    // cbu: "",
    cuit: "",
    type: "",
    // dni: "",
    address: "",
  });

  const saveSignature = (signature) => {
    setImageData(signature);
  };

  const handleChange = (e) => {
    if (step == 1)
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    if (step == 2)
      setBankData({
        ...bankData,
        [e.target.name]: e.target.value,
      });
  };

  const handleConfirm = () => {
    if (step === 1) {
      db.collection("invites")
        .get()
        .then(function (querySnapshot) {
          const matches = [];
          querySnapshot.forEach(function (doc) {
            const email = doc.data().email;
            if (email == data.email) matches.push(email);
          });
          return matches.length !== 0;
        })
        .then((invited) => {
          if (invited) setStep(step + 1);
          else setInvited(false);
        });
    } else {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e, div) => {
    if (!imageData) return setErrorSignature(true);
    setIsLoading(true);
    const blob = pdf(
      <SignedDocument
        imageData={imageData}
        name={data.name}
        lastName={data.lastName}
        cuit={bankData.cuit}
        address={bankData.address}
        freelancerType={data.freelancerType}
      />
    );

    signup(data.email, data.password, data.name)
      .then((res) => res.user.uid)
      .then((uid) => {
        blob.toBlob().then((file) => {
          const storageRef = storage.ref();
          const pdfsRef = storageRef.child(`pdfs/${uid}.pdf`);
          pdfsRef.put(file).then(function (snapshot) {
            console.log("Uploaded a blob or file!");
          });
        });
        db.collection("users")
          .doc(uid)
          .set({
            name: data.name,
            lastName: data.lastName,
            freelancerType: data.freelancerType,
            bankDetails: bankData,
          })
          .then(() => {
            setIsLoading(false);
            history.push("/freelancer");
          });
      })
      .then(() => {
        db.collection("invites").doc(`${data.email}`).delete();
      });
  };

  return (
    <div>
      <div className="register-header">
        <img src={Logo} className="register-logo" />
      </div>
      <div className="register-container">
        {step !== 3 ? (
          <div className="register-left"></div>
        ) : (
          <Contract
            show={true}
            name={data.name}
            lastName={data.lastName}
            cuit={bankData.cuit}
            address={bankData.address}
            freelancerType={data.freelancerType}
          />
        )}

        <RegisterFreelancer
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          data={data}
          bankData={bankData}
          step={step}
          handleConfirm={handleConfirm}
          invited={invited}
          signatureRef={signatureRef}
          saveSignature={saveSignature}
          setData={setData}
          errorSignature={errorSignature}
          setErrorSignature={setErrorSignature}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default RegisterFreelancerContainer;
