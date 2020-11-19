
import React from "react";
import { Route, Switch } from 'react-router-dom'
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
