import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import audio from "./audio";
import books from "./books";
import about from "./about";
import qurantafseer from "./qurantafseer";
import muktasar from "./muktasar";
import khutbah from "./khutbah";
import aam from "./aam";
import arkan from "./arkan";
import taweel from "./taweel";

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
      <Route exact path="/shkzafar/audio/aam" component={aam} />
      <Route exact path="/shkzafar/audio/arkan" component={arkan} />
      <Route exact path="/shkzafar/audio/taweel" component={taweel} />
      <Route exact path="/shkzafar/audio/muktasar" component={muktasar} />
      <Route exact path="/shkzafar/audio/khutbah" component={khutbah} />
      <Route exact path="/shkzafar/books" component={books} />
      <Route exact path="/shkzafar/about" component={about} />
    </Switch>
  </BrowserRouter>
);

export default Main;
