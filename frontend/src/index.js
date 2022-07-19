import React from "react";
import ReactDOM from "react-dom";
import { DeRep } from "./components/DeRep";

// We import bootstrap here, but you can remove if you want
import "bootstrap/dist/css/bootstrap.css";
import { Loading } from "./components/Loading";

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <React.StrictMode>
    <Loading />
  </React.StrictMode>,
  document.getElementById("root")
);