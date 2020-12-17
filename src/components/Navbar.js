import React, { Component } from 'react';
import { Layout,  Navigation, Drawer, Header,Content } from "react-mdl";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light mx-auto justify-content-between">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Audios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Books</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">About Shaikh</a>
      </li>
    </ul>
  </div>
</nav>
      </div>
    )
  }
}
