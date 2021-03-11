import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
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
import jummuah from "./jummuah";
import mausamiyat from "./mausamiyat";
import subscribe from "./subscribe";
import comingsoon from "./comingsoon";
import SignIn from "./signIn";
import header from "./header";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/audio" component={audio} />
    <Route exact path="/audio/qurantafseer" component={qurantafseer} />
    <Route exact path="/audio/aam" component={aam} />
    <Route exact path="/audio/arkan" component={arkan} />
    <Route exact path="/audio/taweel" component={taweel} />
    <Route exact path="/audio/muktasar" component={muktasar} />
    <Route exact path="/audio/khutbah" component={khutbah} />
    <Route exact path="/audio/jummuah" component={jummuah} />
    <Route exact path="/audio/mausamiyat" component={mausamiyat} />
    <Route exact path="/books" component={books} />
    <Route exact path="/about" component={about} />
    <Route exact path="/subscribe" component={subscribe} />
    <Route exact path="/comingsoon" component={comingsoon} />
    <Route exact path="/signIn" component={SignIn} />
    <Route exact path="/header" component={header} />
  </Switch>
);

export default Main;
