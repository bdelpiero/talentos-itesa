import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route } from 'react-router-dom'

// import FirebaseAppProvider f

var mountNode = document.getElementById("app");
ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  mountNode
);
