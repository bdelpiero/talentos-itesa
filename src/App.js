import React from "react";
import { Route, Switch } from 'react-router-dom'
import RegisterFreelancerContainer from './containers/RegisterFreelancerContainer'

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={RegisterFreelancerContainer} />
      </Switch>
    </div>
  )
}

export default App;
