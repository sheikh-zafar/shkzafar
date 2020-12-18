import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";

const Main = () => (
  <BrowserRouter>
    <Route exact path="/shkzafar" component={Home} />
  </BrowserRouter>
);

export default Main;
