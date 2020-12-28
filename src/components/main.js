import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import audio from "./audio";
import books from "./books";
import about from "./about";
import qurantafseer from "./qurantafseer";
import muktasar from "./muktasar";
import khutbah from "./khutbah";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/shkzafar" component={Home} />
      <Route exact path="/shkzafar/audio" component={audio} />
      <Route
        exact
        path="/shkzafar/audio/qurantafseer"
        component={qurantafseer}
      />
      <Route exact path="/shkzafar/audio/muktasar" component={muktasar} />
      <Route exact path="/shkzafar/audio/khutbah" component={khutbah} />
      <Route exact path="/shkzafar/books" component={books} />
      <Route exact path="/shkzafar/about" component={about} />
    </Switch>
  </BrowserRouter>
);

export default Main;
