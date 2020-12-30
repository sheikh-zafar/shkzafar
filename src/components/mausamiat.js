import React, { Component } from "react";
import Navbar from "./Navbar";

class mausamiat extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">موساميات</h5>
                <hr />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default mausamiat;
