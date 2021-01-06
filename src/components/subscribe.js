import React, { Component } from "react";
import youtube from "../img/youtube.jpg";
import mixlr from "../img/mixlr.png";
import Navbar from "./Navbar";

export default class subscribe extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container ">
            <div className="row justify-content-center ">
              <div className="d-flex d-md-flex d-sm-flex d-xs-flex mr-1">
                <div className="p-2 subscribe-links subscribe-circle">
                  <i
                    className="fa  fa-youtube-play pt-4"
                    style={{ color: "#2e856e" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="col-md-5 col-lg-6 col-sm-7 col-xs-9 subscribe-links">
                Subscribe to Sheikh zafar's Youtube channel
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={mixlr}
                  className="subscribe-img rounded-circle"
                  alt="Jumu'ah Khutbah"
                />
              </div>
              <div className="col-md-8">Follow Sheikh zafar's on Mixlr</div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8"></div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8"></div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
