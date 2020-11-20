import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterFreelancerContainer from "./containers/RegisterFreelancerContainer";
import React, { useEffect, useState } from "react";

import RegisterAdminContainer from "./containers/RegisterAdminContainer";

import { AuthProvider } from "../auth/auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/admin" component={RegisterAdminContainer} />
          <Route exact path="/" component={RegisterFreelancerContainer} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
