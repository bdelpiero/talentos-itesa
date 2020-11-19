
import { Route, Switch } from 'react-router-dom'
import RegisterFreelancerContainer from './containers/RegisterFreelancerContainer'
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { useRecoilState } from "recoil";
import { userName } from "./atoms";
import { db } from "../firebase/firebase"
import LoginContainer from './containers/loginContainer'

import { AuthProvider } from '../auth/auth'


function App() {

  return (

    <AuthProvider>
      <Switch>
        {/* <Route exact path='/login' component={RegisterFreelancerContainer} /> */}
        <Route exact path='/' component={LoginContainer} />
      </Switch>
    </AuthProvider>

  )
}

export default App;
