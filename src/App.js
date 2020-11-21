import { Route, Switch, Redirect } from "react-router-dom";
import RegisterFreelancerContainer from "./containers/RegisterFreelancerContainer";
import React from "react";
import LoginContainer from "./containers/loginContainer";
import { AuthProvider } from "../auth/auth";
import UserContainer from "./containers/userContainer";
import AdminContainer from "./containers/adminContainer";

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
  );
}

export default App;
