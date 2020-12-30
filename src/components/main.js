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
      <Route exact path="/" component={Home} />
      <Route path="/audio" component={audio} />
      <Route path="/audio/qurantafseer" component={qurantafseer} />
      <Route path="/audio/aam" component={aam} />
      <Route path="/audio/arkan" component={arkan} />
      <Route path="/audio/taweel" component={taweel} />
      <Route path="/audio/muktasar" component={muktasar} />
      <Route path="/audio/khutbah" component={khutbah} />
      <Route path="/books" component={books} />
      <Route path="/about" component={about} />
    </Switch>
  </BrowserRouter>
);

export default Main;
