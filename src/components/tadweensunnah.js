import React, { Component } from "react";
import Navbar from "./Navbar";

export default class tadweensunnah extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container d-flex justify-content-center">
          <div className="row text-center">
            <div class="col-md-6">
              <h1>Tadween sunnah</h1>
              <iframe
                title="sheikh-zafar"
                src="https://archive.org/embed/tadween-as-sunnah&playlist=1&autoplay=1"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
