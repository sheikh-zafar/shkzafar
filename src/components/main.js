import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import audio from "./audio";
import books from "./books";
import about from "./about";

const Main = () => (
  <BrowserRouter>
    <Route exact path="/shkzafar" component={Home} />
    <Route exact path="/shkzafar/audio" component={audio} />
    <Route exact path="/shkzafar/books" component={books} />
    <Route exact path="/shkzafar/about" component={about} />
  </BrowserRouter>
);

export default Main;
