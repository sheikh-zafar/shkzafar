import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import pics from "../img/bam2.jpg";

export default class audio extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">أقسام الموقع</h5>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Rounded button links 1*/}
        <section className="embed-section">
          <div className="container py-3">
            <div className="row text-center">
              <div className="col-md-4 d-flex justify-content-start d-md-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle"></div>
                  <h3 className="rounded-headname">خطبة</h3>
                </a>
              </div>
              <div className="col-md-4 d-flex justify-content-center d-md-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle"></div>
                  <h3 className="rounded-headname">خطبة</h3>
                </a>
              </div>
              <div className="col-md-4 d-flex justify-content-end d-md-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle"></div>
                  <h3 className="rounded-headname">خطبة</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Rounded button links 2 */}
        <section className="embed-section">
          <div className="container py-3">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-md-5 d-flex justify-content-end d-md-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle"></div>
                  <h3 className="rounded-headname">خطبة</h3>
                </a>
              </div>
              <div className="col-md-5 d-flex justify-content-start d-md-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <img
                    className="rounded-links rounded-circle"
                    src={pics}
                    alt="pics"
                    rel="noopener noreferrer"
                  />
                  <h3 className="rounded-headname">خطبة</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Footer section */}
        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
