import React, { Component } from "react";
import Navbar from "./Navbar";
import Calendar from "react-calendar";
import Footer from "./footer";
import "react-calendar/dist/Calendar.css";
import Iframe from "react-iframe";
import Youtube from "../img/youtube.jpg";

export default class Home extends Component {
  state = {
    date: new Date(),
  };
  onChange = (date) => this.setState({ date });
  render() {
    return (
      <div>
        <section className="heading-section">
          <div className="container d-flex justify-content-center">
            <div>
              <h1 className="heading-name">
                فضيلة الشيخ ظفر الحسن مدني حفظه الله
              </h1>
            </div>
            <hr />
          </div>
          <div className="text-center mt-0">
            <p className="heading-lead mt-0">SHAIKH ZAFAR UL HASAN MADANI</p>
          </div>
          <div className="container-fluid my-2 text-center ">
            <div>
              <div
                className="container-fluid d-flex justify-content-between"
                id="fixed"
              >
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i
                    className="fa fa-3x fa-google"
                    style={{ color: "#e1c699" }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i
                    className="fa fa-3x fa-facebook-square"
                    style={{ color: `#e1c699` }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i
                    className="fa fa-3x fa-twitter-square"
                    style={{ color: "#e1c699" }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i
                    className="fa fa-3x fa-linkedin-square"
                    style={{ color: "#e1c699 " }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i
                    className="fa fa-3x fa-instagram"
                    style={{ color: "#e1c699" }}
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <Navbar />
        </section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <section className="banner-section">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="10000">
                      <img
                        src="..."
                        className="d-block w-100"
                        alt="..."
                        height="400px"
                        width="100%"
                      />
                    </div>
                    <div class="carousel-item" data-interval="2000">
                      <img
                        src="..."
                        className="d-block w-100"
                        alt="..."
                        height="400px"
                        width="100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="..."
                        className="d-block w-100"
                        alt="..."
                        height="400px"
                        width="100%"
                      />
                    </div>
                  </div>
                  <a
                    className="left carousel-control"
                    href="#myCarousel"
                    data-slide="prev"
                  >
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    class="right carousel-control"
                    href="#myCarousel"
                    data-slide="next"
                  >
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="embed-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-10 col-xs-12">
                <div className="calendar-section">
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      title="shaikh zafar class"
                      src="https://calendar.google.com/calendar/embed?src=9pttne6lpue9vdlm7qfn6s89lc@group.calendar.google.com&ctz=Asia/Dubai"
                      height="270px"
                      frameborder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="mixlr-section col-lg-9 col-md-8 col-sm-10 col-xs-12">
                <div className="col-md-2 mt-3">
                  <iframe
                    title="mixlr"
                    src="https://mixlr.com/users/7312955/embed"
                    scrolling="no"
                    frameborder="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <small>
                    <a href="https://mixlr.com/a_jamal">
                      Updates from A_jamal lectures
                    </a>
                  </small>
                </div>

                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
        <section className="embed-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-10 col-xs-12">
                <section className="telegram-section">
                  <iframe
                    title="jummuah khutbah"
                    src="https://api.telegram.org/bot1423133292:AAFMCjhsJznoVrxiApdX-khwspnqFMgQYYc/getUpdates/
                    "
                    frameborder="0"
                    height="215px"
                  ></iframe>
                </section>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-10 col-xs-12">
                <section className="latest-section">
                  <iframe
                    title="jummuah khutbah"
                    src="https://www.youtube.com/embed/videoseries?list=PLmZP1KIsC-hnB5SYT-dP55VpAM4jFuwtW"
                    frameborder="0"
                    height="215px"
                  ></iframe>
                </section>
              </div>
            </div>
          </div>
        </section>
        <div className="col-md-12 text-center">
          <Footer />
        </div>
      </div>
    );
  }
}
