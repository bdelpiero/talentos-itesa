import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { RecoilRoot } from "recoil";
import AdminContainer from "./containers/AdminContainer";

// import FirebaseAppProvider f

var mountNode = document.getElementById("app");
ReactDOM.render(
  <RecoilRoot>
    <App />
    <AdminContainer></AdminContainer>
  </RecoilRoot>,
  mountNode
);
