import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import lectures from "./lectures";
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
import comingsoon from "./comingsoon";
import SisterSection from "./sisters-section";
import Ramadan2021 from "./Ramadan-1442-2021";
import YouTubeChannel from "./YouTubeChannel";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/lectures" component={lectures} />
    <Route exact path="/jummuah" component={jummuah} />
    <Route exact path="/lectures/qurantafseer" component={qurantafseer} />
    <Route exact path="/lectures/aam" component={aam} />
    <Route exact path="/lectures/arkan" component={arkan} />
    <Route exact path="/lectures/taweel" component={taweel} />
    <Route exact path="/lectures/muktasar" component={muktasar} />
    <Route exact path="/lectures/khutbah" component={khutbah} />
    <Route exact path="/lectures/jummuah" component={jummuah} />
    <Route exact path="/lectures/mausamiyat" component={mausamiyat} />
    <Route exact path="/lectures/sisters-section" component={SisterSection} />
    <Route exact path="/Ramadan-1442-2021" component={Ramadan2021} />
    <Route exact path="/books" component={books} />
    <Route exact path="/about" component={about} />
    <Route exact path="/comingsoon" component={comingsoon} />
    <Route
      exact
      path="/YouTubeChannel"
      render={() =>
        (window.location = "https://www.youtube.com/c/ZafarulHasan/")
      }
    />
    <Route
      exact
      path="/mixlr"
      render={() => (window.location = "http://mixlr.com/zafarulhasan")}
    />
  </Switch>
);

export default Main;
