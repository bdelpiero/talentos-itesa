import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "../auth/auth";

// CONTAINERS
import RegisterFreelancerContainer from "./containers/RegisterFreelancerContainer";
import LoginContainer from "./containers/LoginContainer";
import AdminContainer from "./containers/AdminContainer";
import UserContainer from "./containers/UserContainer";

//OTHERS
import { Layout, Menu, Typography } from "antd";
import InviteComponent from "./components/InviteComponent";


function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/register' component={RegisterFreelancerContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/freelancer' component={UserContainer} />
        <Route exact path='/admin' component={AdminContainer} />
        <Route path='/' component={RegisterFreelancerContainer} />
        <Redirect from="/" to='/' />
      </Switch>
    </AuthProvider>
  );
}

export default App;
