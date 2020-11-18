import React, { useState } from "react";
import RegisterFreelancer from '../components/RegisterFreelancer'
import { db } from '../../firebase/firebase'
import SignatureCanvas from 'react-signature-canvas'

function RegisterFreelancerContainer() {

    const [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        freelancerType: '',
    })

    const [bankData, setBankData] = useState({
        bankName: '',
        accountName: '',
        alias: '',
        cbu: '',
        dni: ''
    })

    const [step, setStep] = useState(1)


    const handleChange = (e) => {
        if (step == 1) setData({
            ...data, [e.target.name]: e.target.value
        })
        if (step == 2) setBankData({
            ...bankData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('ESTO ES DATA', data)
        if (step < 3) setStep(step + 1)
        else (
            data.bankDetails = bankData,
            db.collection('users').add(data),
            setData({
                name: '',
                lastName: '',
                email: '',
                password: '',
                freelancerType: ''
            }),
            setBankData({
                bankName: '',
                accountName: '',
                alias: '',
                cbu: '',
                dni: ''
            })
        )
    }

    return (
        <div>
            <div style={{ width: 500, border: '1px solid black' }}>
                <SignatureCanvas penColor='green'
                    canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
            </div>

            <RegisterFreelancer
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                data={data}
                bankData={bankData}
                step={step} />
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