import React, { useState } from "react";
import RegisterFreelancer from "../components/RegisterFreelancer";
import { db } from "../../firebase/firebase";
import SignatureCanvas from "react-signature-canvas";
import html2pdf from "html2pdf.js";
import { storage } from "../../firebase/firebase";

function RegisterFreelancerContainer() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    freelancerType: "",
  });

  const [bankData, setBankData] = useState({
    bankName: "",
    accountName: "",
    alias: "",
    cbu: "",
    dni: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ESTO ES DATA", data);
    if (step < 3) setStep(step + 1);
    const element = document.getElementById("to-print");

    const worker = html2pdf()
      .from(element)
      .toPdf()
      .output("blob", "signature.pdf");
    worker.then((file) => {
      const storageRef = storage.ref();
      const pdfsRef = storageRef.child("pdfs/contract.pdf");
      pdfsRef.put(file).then(function (snapshot) {
        console.log("Uploaded a blob or file!");
      });
    });

    // const storageRef = storage.ref();
    // const pdfsRef = storageRef.child("pdfs");
    // pdfsRef.put(pdfFile).then(function (snapshot) {
    //   console.log("Uploaded a blob or file!");
    // });
    // else (
    //     data.bankDetails = bankData,
    //     db.collection('users').add(data),
    //     setData({
    //         name: '',
    //         lastName: '',
    //         email: '',
    //         password: '',
    //         freelancerType: ''
    //     }),
    //     setBankData({
    //         bankName: '',
    //         accountName: '',
    //         alias: '',
    //         cbu: '',
    //         dni: ''
    //     })
    // )
  };

  return (
    <div id='to-print'>
      <div style={{ width: 500, border: "1px solid black" }}>
        <SignatureCanvas
          penColor='green'
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        />
      </div>

      <RegisterFreelancer
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        data={data}
        bankData={bankData}
        step={step}
      />
    </div>
  );
}

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
