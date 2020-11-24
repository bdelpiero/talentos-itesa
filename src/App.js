import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginContainer from './containers/loginContainer';
import { AuthProvider } from '../auth/auth';
import CardsFreelace from './components/CardsFreelace';
import UserContainer from './containers/userContainer';
import AdminContainer from './containers/adminContainer';
import PagosFreelace from './components/PagosFreelace';
import RegisterFreelancerContainer from "./containers/RegisterFreelancerContainer";



function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/register' component={RegisterFreelancerContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/freelance' component={UserContainer} />
        <Route exact path='/pruebacard' component={CardsFreelace}/>
        <Route exact path='/pruebacard2' component={PagosFreelace}/>
        <Route exact path='/admin' component={AdminContainer} />
        <Route exact path="/"  component={LoginContainer} />

        <Redirect from="/" to="/" />
    </Switch>
        
     
    </AuthProvider>
  );
}

export default App;
