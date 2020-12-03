import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from '../firebase/auth';

// CONTAINERS
import RegisterFreelancerContainer from "./containers/RegisterFreelancerContainer";
import LoginContainer from "./containers/LoginContainer";
import AdminDashboardContainer from "./containers/AdminDashboardContainer";
import PagosFreelace from "./components/PagosFreelace";
import UserContainer from "./containers/UserContainer";
import ForgotPassContainer from "./containers/ForgotPassContainer";
// import AllProjectsContainer from "./containers/AllProjectsContainer";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/reset-password' component={ForgotPassContainer} />
        <Route exact path='/freelancer' component={UserContainer} />
        <Route exact path='/admin' component={AdminDashboardContainer} />
        <Route exact path='/pruebacard2' component={PagosFreelace} />
        <Route path='/register' component={RegisterFreelancerContainer} />
        <Redirect from='/' to='/login' />
      </Switch>
    </AuthProvider>
  );
}

export default App;
