import React, { useState } from "react";
// import db from '../../firebase/firebase'
import Login from '../components/login'
import {authUser} from '../../auth/auth'

export default ()=>{
    const [email, setEmail]=useState('em')
    const [password, setPassword]=useState('pa')

    const {login}=authUser()
    
    const hanledChangeEmail=(e)=>{
        setEmail(e.target.value)
        console.log("email",e.target.value,email)
    }

    const hanledChangePassword=(e)=>{
        setPassword(e.target.value)
        console.log("pass",e.target.value,password)
    }

    const hanledSubmit =(valores)=>{
        // e.preventDefault()
        // login(email,password)
       console.log("AQUI",valores)
       setEmail("")
       setPassword('')

    }

        return(
            <Login
            hanledChangeEmail={hanledChangeEmail}
            hanledChangePassword={hanledChangePassword}
            hanledSubmit={hanledSubmit}
            email={email}
            password={password}
            />
        )
}