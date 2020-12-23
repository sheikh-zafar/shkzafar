import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import audio from "./audio";
import books from "./books";
import about from "./about";
import tadweensunnah from "./tadweensunnah";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/shkzafar" component={Home} />
      <Route exact path="/shkzafar/audio" component={audio} />
      <Route path="/shkzafar/audio/tadweensunnah" component={tadweensunnah} />
      <Route exact path="/shkzafar/books" component={books} />
      <Route exact path="/shkzafar/about" component={about} />
    </Switch>
  </BrowserRouter>
);

export default Main;
