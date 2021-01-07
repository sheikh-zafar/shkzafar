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
                <div className="p-2 subscribe-circle rounded-circle">
                  <i
                    className="fa fa-youtube-play subscribeicon"
                    style={{ color: "red" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="col-md-5 col-lg-6 col-sm-7 col-xs-9 subscribe-links">
                Subscribe to Sheikh zafar's Youtube channel
              </div>
            </div>
          </div>

          <section className="embed-section">
            <div className="container">
              <div className="row justify-content-center ">
                <div className="d-flex d-md-flex d-sm-flex d-xs-flex mr-1">
                  <div className="p-2 subscribe-circle rounded-circle ">
                    <img
                      src={mixlr}
                      className="img-responsive rounded-circle subscribemixlr"
                      alt="Jumu'ah Khutbah"
                    />
                  </div>
                </div>
                <div className="col-md-5 col-lg-6 col-sm-7 col-xs-9 subscribe-links">
                  Subscribe to Sheikh zafar's Youtube channel
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
