
import { Route, Switch } from 'react-router-dom'
import RegisterFreelancerContainer from './containers/RegisterFreelancerContainer'
import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom'
import { hot } from "react-hot-loader/root";
import { useRecoilState } from "recoil";
import { userName } from "./atoms";
import { db } from "../firebase"

import { AuthProvider } from '../auth/auth'
import RegisterFreelancerContainer from './containers/RegisterFreelancerContainer'


function App() {

  return (

    <AuthProvider>
      <Switch>
        <Route exact path='/' component={RegisterFreelancerContainer} />
      </Switch>
    </AuthProvider>

  )
}

export default App;
