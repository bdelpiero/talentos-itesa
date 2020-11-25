import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "../dist/style.css";


// import FirebaseAppProvider 

var mountNode = document.getElementById("app");
ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  mountNode
);
