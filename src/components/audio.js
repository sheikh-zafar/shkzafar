import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { audios } from "../data";
import { Link } from "react-router-dom";
import Jummuah from "../img/jummaicon.jpg";
import tafseer from "../img/tafseericon.jpg";
import Moon from "../img/moon.jpg";

export default class audio extends Component {
  handleClick() {
    this.props.history.push("shkzafar/audio/tadweensunnah");
  }
  constructor(props) {
    super(props);
    this.state = {
      iframe: audios,
    };
  }

  render() {
    return (
      <div>
        <Navbar />

        {/*Rounded button links 1*/}
        <section className="embed-section">
          <div className="container-fluid py-3">
            <div className="row text-center">
              <div className="col-md-3 col-sm-12 col-xs-6 d-flex justify-content-center d-sm-flex justify-content-center mx-auto">
                <Link to="/audio/jummuah">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Jummuah}
                      className="img-fluid rounded-circle"
                      alt="jummuah khutbah"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Jumu'ah Khutbah</h3>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-6 d-flex justify-content-center d-sm-flex justify-content-center mx-auto">
                <Link to="/audio/qurantafseer">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={tafseer}
                      className="img-fluid rounded-circle"
                      alt="jummuah khutbah"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Quran Tafseer</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-6 d-flex justify-content-center d-sm-flex justify-content-center">
                <Link
                  to="/comingsoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h3 className="rounded-headname">Arkan al-Islam</h3>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-6 d-flex justify-content-end d-sm-flex justify-content-center ">
                <Link to="/audio/mausamiyat">
                  <div className="rounded-links rounded-circle">
                  <img
                      src={Moon}
                      className="img-fluid rounded-circle"
                      alt="jummuah khutbah"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Mausamiat</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*Rounded button links 2 */}
        <section className="embed-section">
          <div className="container py-3">
            <div className="row text-center">
              <div className="col-md-4 col-sm-12 col-xs-6 d-flex justify-content-center d-sm-flex justify-content-center">
                <Link to="/audio/taweel">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h3 className="rounded-headname">
                      {" "}
                      Dawrah ilmiyyah
                      <br />
                      <p className="lead">(Taweel)</p>
                    </h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-6 d-flex justify-content-center d-sm-flex justify-content-end ">
                <Link to="/audio/muktasar">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h3 className="rounded-headname">
                      Dawrah ilmiyyah
                      <br />
                      <p className="lead">(Mukhtasar)</p>
                    </h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-6 d-flex justify-content-center d-sm-flex justify-content-center">
                <Link to="/audio/aam">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h3 className="rounded-headname">Aam Duroos</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*audio cards */}
        <section className="embed-section"></section>
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
