import React, { useState, useRef } from "react";
import RegisterFreelancer from "../components/RegisterFreelancer";
import { db } from "../../firebase/firebase";
import { authUser } from "../../auth/auth";
import Logo from "../../views/logo-itesa.svg";
import { storage } from "../../firebase/firebase";
import SignedDocument from "../components/pdfs/SignedDocument";

import { pdf } from "@react-pdf/renderer";

// const validate = (data, setError, setStep, step) => {
//   /* if (Object.values(data).some(value => value === '')) {
//         setError({ errorType: 'empty', errorMessage: 'All fields must be completed' })
//         return setStep(step)
//     }

//     if (data.password && (data.password.length < 6)) {
//         setError({ errorType: 'password', errorMessage: 'Password must have at least 6 characters' })
//         return setStep(1)
//     }
//     if (data.freelancerType && (data.freelancerType == '')) {
//         console.log('data freelancer type')
//         setError({ errorType: 'freelancerType', errorMessage: 'You need to choose 1 Freelancer Type' })
//         return setStep(1)
//     }
//     if (data.cbu && (data.cbu.toString().length != 22)) {
//         setError({ errorType: 'cbu', errorMessage: 'CBU must have at least 22 numbers' })
//         return setStep(2)
//     }
//     else {
//         setError({ errorType: '', errorMessage: '' })
//         return setStep(step + 1)
//     } */
//   return setStep(step + 1);
// };

function RegisterFreelancerContainer() {
  const signatureRef = useRef({});
  const [imageData, setImageData] = useState("");

  const saveSignature = (signature) => {
    setImageData(signature);
  };

  const handleClick = () => {
    const blob = pdf(
      <SignedDocument
        imageData={imageData}
        name={data.name}
        lastName={data.lastName}
        cuit={bankData.cuit}
        address={bankData.address}
        freelancerType={data.freelancerType}
      />
    )
      .toBlob()
      .then((file) => {
        const storageRef = storage.ref();
        const pdfsRef = storageRef.child("pdfs/contract.pdf");
        pdfsRef.put(file).then(function (snapshot) {
          console.log("Uploaded a blob or file!");
        });
      });
  };

  // const handleClickContract = () => {
  //   if (toggle == false) setToggle(true)
  //   if (toggle == true) setToggle(false)
  // }

  const { signup } = authUser();

  const [data, setData] = useState({
    displayName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    freelancerType: "",
  });

  const [error, setError] = useState({
    // showError: false,
    errorType: "",
    errorMessage: "",
  });

  const [invited, setInvited] = useState(true);

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

  const [step, setStep] = useState(1);

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
    // e.preventDefault();
    // console.log("ESTO ES DATA", data);

    signup(data.email, data.password,data.displayName)
      .then((res) => res.user.uid)
      .then((uid) => {
        db.collection("users").doc(uid).set({
          displayName: data.name,
          lastName: data.lastName,
          freelancerType: data.freelancerType,
          bankDetails: bankData,
        });
      }),
      setData({
        displayName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
        freelancerType: "",
      }),
      setBankData({
        bankName: "",
        accountName: "",
        alias: "",
        cbu: "",
        dni: "",
      });
    const worker = html2pdf().from(div).toPdf().output("blob", "signature.pdf");
    worker.then((file) => {
      const storageRef = storage.ref();
      const pdfsRef = storageRef.child("pdfs/contract.pdf");
      pdfsRef.put(file).then(function (snapshot) {
        console.log("Uploaded a blob or file!");
      });
    });
  };

  // const handleClick = (e, div) => {
  //   console.log("este es el id", div);
  //   e.preventDefault();

  //   const worker = html2pdf().from(div).toPdf().output("blob", "signature.pdf");
  //   worker.then((file) => {
  //     const storageRef = storage.ref();
  //     const pdfsRef = storageRef.child("pdfs/contract.pdf");
  //     pdfsRef.put(file).then(function (snapshot) {
  //       console.log("Uploaded a blob or file!");
  //     });
  //   });
  // };

  return (
    <div>
      <div className='register-header'>
      <img src={Logo} className='register-logo'/>
      </div>

      <div className='register-container'>
        <div className='register-left'></div>
        <RegisterFreelancer
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          data={data}
          bankData={bankData}
          step={step}
          error={error}
          handleConfirm={handleConfirm}
          invited={invited}
          signatureRef={signatureRef}
          handleClick={handleClick}
          saveSignature={saveSignature}
        />
      </div>
    </div>
  );
}

// 1234567891234567891234

export default RegisterFreelancerContainer;

////// LOGICA DE FIRESTORE
/* useEffect(() => {
    db.collection("users")
      .doc("McdZHiZqbuwa6hFZ3Pi2")
      .onSnapshot((doc) => {
        console.log(doc.data());
        setName(doc.data().name);
      });
  }, []);

  const handleClick = () => {
    db.collection("users").doc("McdZHiZqbuwa6hFZ3Pi2").update({ name: "Nano" });
  }; */