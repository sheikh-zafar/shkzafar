import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { audios } from "../data";
import AudioEmbed from "./AudioEmbed";
import { Link } from "react-router-dom";
import history from "./history";

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
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex justify-content-start d-md-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="rounded-headname">خطبة</h3>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center ">
                <Link to="/shkzafar/audio/tadweensunnah">
                  <a
                    href="/shkzafar/audio/tadweensunnah"
                    type="button"
                    onClick={() =>
                      history.push("/shkzafar/audio/tadweensunnah")
                    }
                  >
                    <div className="rounded-links rounded-circle">
                      <i
                        className="fa fa-5x fa-calendar pt-4"
                        style={{ color: "#2e856e" }}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h3 className="rounded-headname">
                      تدوين <br />
                      السنة
                    </h3>
                  </a>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="rounded-headname">
                    أركان <br />
                    الإسلام
                  </h3>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="rounded-headname">تفسير</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Rounded button links 2 */}
        <section className="embed-section">
          <div className="container py-3">
            <div className="row text-center">
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="rounded-headname">
                    عام <br />
                    دروس
                  </h3>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="rounded-headname">
                    مختصر <br />
                    دورة
                  </h3>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="rounded-headname">
                    طويل <br />
                    دورة
                  </h3>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center ">
                <a href="/" rel="noopener noreferrer">
                  <div className="rounded-links rounded-circle">
                    <i
                      className="fa fa-5x fa-calendar pt-4"
                      style={{ color: "#2e856e" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="rounded-headname">موسمية</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*audio cards */}
        <section className="embed-section">
          <div className="container">
            <div className="row">
              <h1>Using iframe embed - Grid view</h1>
              <iframe
                title="sheikh-zafar"
                src="https://drive.google.com/embeddedfolderview?id=1F7mRlSHiaPJH0ugBAdYLIVc5vD7FyVLh#grid"
                scrolling="no"
                style={{ width: "100%", height: "1000px", border: 0 }}
              ></iframe>
            </div>
            <div className="row">
              <h1>Using iframe embed - List view</h1>
              <iframe
                title="sheikh-zafar"
                src="https://drive.google.com/embeddedfolderview?id=1F7mRlSHiaPJH0ugBAdYLIVc5vD7FyVLh#list"
                scrolling="no"
                style={{ width: "100%", height: "1000px", border: 0 }}
              ></iframe>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <h1>Using json embed from inner file</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <AudioEmbed iframeAudios={this.state.iframe} />
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
