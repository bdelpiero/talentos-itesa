import { Route, Switch } from 'react-router-dom'
import RegisterFreelancerContainer from './containers/RegisterFreelancerContainer'
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { useRecoilState } from "recoil";
import { userName } from "./atoms";
import { db } from "../firebase"
import {AuthProvider} from '../auth/auth'

function App() {

  return (
      <AuthProvider>
        <h1>Hello {name}</h1>
        <button onClick={handleClick}></button>
        <Switch>
          <Route exact path='/' component={RegisterFreelancerContainer} />
        </Switch>
      </AuthProvider>
  )
}

export default App;
