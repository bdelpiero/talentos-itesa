import React, { useState } from "react";
import Login from '../components/login'
import {authUser} from '../../auth/auth'
import {Form} from 'antd'
import { Link, useHistory } from "react-router-dom"

export default ()=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [form] =Form.useForm()
    const history = useHistory()

    const {login,currentUser}=authUser()
    
    const hanledChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const hanledChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const hanledSubmit =(valores)=>{
        setEmail("")
        setPassword('')
        login(email,password)
        console.log("AQUI USER",currentUser)
        form.resetFields()
        history.push("/frelance")
    }

        return(
            <Login
            hanledChangeEmail={hanledChangeEmail}
            hanledChangePassword={hanledChangePassword}
            hanledSubmit={hanledSubmit}
            email={email}
            password={password}
            form={form}
            />
        )
}