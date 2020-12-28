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
        <ul id="menu">
          <li>
            <a href="#L384">Section 1</a>
          </li>
          <li>
            <a href="#details">Section 2</a>
          </li>
          <li>
            <a href="#FAQ">Section 3</a>
          </li>
        </ul>
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
                <Link to="/shkzafar/audio/muktasar">
                  <a
                    href="/shkzafar/audio/muktasar"
                    rel="noopener noreferrer"
                    type="button"
                    onClick={() => history.push("/shkzafar/audio/muktasar")}
                  >
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
