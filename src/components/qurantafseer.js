import React, { Component } from "react";
import Navbar from "./Navbar";

export default class tadweensunnah extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container d-flex justify-content-center">
          <div className="row text-center">
            <h3> Tadween sunnah from Archive Embed</h3>
            <div className="container d-flex justify-content-center">
              <iframe
                title="sheikh-zafar"
                src="https://archive.org/embed/tadween-as-sunnah&playlist=1&autoplay=1"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <h3>Using iframe embed - Grid view</h3>
            <iframe
              title="sheikh-zafar"
              src="https://drive.google.com/embeddedfolderview?id=1F7mRlSHiaPJH0ugBAdYLIVc5vD7FyVLh#grid"
              scrolling="no"
              style={{ width: "100%", height: "1000px", border: 0 }}
            ></iframe>
          </div>
          <div className="row">
            <h3>Using iframe embed - List view</h3>
            <iframe
              title="sheikh-zafar"
              src="https://drive.google.com/embeddedfolderview?id=1F7mRlSHiaPJH0ugBAdYLIVc5vD7FyVLh#list"
              scrolling="no"
              style={{ width: "100%", height: "1000px", border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
