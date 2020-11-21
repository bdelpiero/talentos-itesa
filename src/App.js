<<<<<<< HEAD
import { Route, Switch, Link, Redirect } from "react-router-dom";
import RegisterFreelancerContainer from "./containers/RegisterFreelancerContainer";
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { useRecoilState } from "recoil";
import { userName } from "./atoms";
import { db } from "../firebase/firebase";
import LoginContainer from "./containers/loginContainer";
import { AuthProvider } from "../auth/auth";
import { Layout, Menu, Typography } from "antd";
import UserContainer from "./containers/userContainer";
import AdminContainer from "./containers/adminContainer";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

=======

import React from "react";
import { Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../auth/auth'
import RegisterFreelancerContainer from './containers/RegisterFreelancerContainer'

>>>>>>> 90bb50819e6b789791b3480d6ee3c074356ec05e
function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/register' component={RegisterFreelancerContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/freelancer' component={UserContainer} />
        <Route exact path='/admin' component={AdminContainer} />
        <Route path='/' component={RegisterFreelancerContainer} />
        <Redirect from='/' to='/' />
      </Switch>
    </AuthProvider>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 90bb50819e6b789791b3480d6ee3c074356ec05e
}

export default App;
