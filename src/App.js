import { Route, Switch, Link, Redirect } from "react-router-dom";
import RegisterFreelancerContainer from "./containers/RegisterFreelancerContainer";
import React, { useEffect, useState } from "react";
import LoginContainer from "./containers/loginContainer";
import { AuthProvider } from "../auth/auth";
import AdminContainer from "./containers/AdminContainer";
import UserContainer from "./containers/userContainer";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/register" component={RegisterFreelancerContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/freelancer" component={UserContainer} />
        <Route exact path="/admin" component={AdminContainer} />
        <Route path="/" component={RegisterFreelancerContainer} />
        <Redirect to="/" />
      </Switch>
    </AuthProvider>
  );
}

export default App;
