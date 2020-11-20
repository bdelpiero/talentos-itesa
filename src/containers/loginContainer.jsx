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
        
    }

    const hanledChangePassword=(e)=>{
        setPassword(e.target.value)
       
    }

    const hanledSubmit =(e)=>{
         
         login(email,password)
           

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