import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import countapi from "countapi-js";

export default class HitCount extends Component {
  updateVisitCount() {
    countapi.visits("global").then((result) => {
      console.log(result.value);
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <p>This page was viewed</p>
        <h1 id={this.updateVisitCount}>{this.updateVisitCount()}</h1>
        <p>times</p>
        <Footer />
      </div>
    );
  }
}
