import React, { useState,useEffect } from "react";
import Login from '../components/login'
import {authUser} from '../../auth/auth'
import {Form} from 'antd'
import { useHistory } from "react-router-dom"
import { useRecoilState } from "recoil";
import { isLoading } from "../atoms";

export default ()=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [form] =Form.useForm()
    const history = useHistory()
    const [loading, setLoading] = useRecoilState(isLoading);



    const {login,currentUser}=authUser()
    
    const hanledChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const hanledChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const hanledSubmit =()=>{
        setLoading(true)
        setEmail("")
        setPassword('')
        login(email,password)
        .then(()=>{
            console.log("SUMMT LOADING", loading)
        })
        form.resetFields()
        
        
    }
    

        return(
            <Login
            hanledChangeEmail={hanledChangeEmail}
            hanledChangePassword={hanledChangePassword}
            hanledSubmit={hanledSubmit}
            email={email}
            password={password}
            form={form}
            loading={loading}
            />
        )
}