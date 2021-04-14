import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

export default class Ramadan2021 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
