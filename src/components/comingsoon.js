import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default class comingsoon extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container d-flex justify-content-center">
          <div class="jumbotron">
            <i class="fa fa-5x fa-commenting" aria-hidden="true"></i>
            <h3 class="display-4">Coming soon!</h3>

            <p class="lead">
              <Link
                to="/lectures"
                className="btn btn btn-lg btn-outline-dark"
                target="_newtab"
                style={{
                  backgroundColor: "#2e856e",
                  color: "beige",
                  fontFamily: "Righteous",
                }}
              >
                Go To Lectures Page
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
