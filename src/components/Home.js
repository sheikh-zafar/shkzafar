import React, { Component } from "react";
import Navbar from "./Navbar";
import Calendar from "react-calendar";
import Footer from "./footer";
import "react-calendar/dist/Calendar.css";
import bam2 from "../img/bam2.jpg";
import bamslide from "../img/bamslide.jpg";
import shamail1 from "../img/shamail1.jpg";
import shamail2 from "../img/shamail2.jpg";
import shamailslide from "../img/shamailslide.jpg";
import sharhsunnah2 from "../img/sharhsunnah2.jpg";
import sharhsunnah3 from "../img/sharhsunnah3.jpg";
import mosque from "../img/mosque.jpg";

export default class Home extends Component {
  state = {
    date: new Date(),
  };
  onChange = (date) => this.setState({ date });
  render() {
    return (
      <div>
        {/*Heading name and Navigation bar*/}

        <section className="heading-section">
          <div className="container d-flex justify-content-center">
            <div>
              <h1 className="heading-name">
                فضيلة الشيخ ظفر الحسن مدني حفظه اللّه
              </h1>
            </div>
            <hr />
          </div>
          <div className="text-center mt-0">
            <p className="heading-lead mt-0">SHAIKH ZAFAR UL HASAN MADANI</p>
          </div>
          <Navbar />
        </section>

        {/*Banner section*/}

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
                    <div class="carousel-item active" data-interval="5000">
                      <img
                        src={sharhsunnah2}
                        className="d-block w-100"
                        alt="sharh as sunnah"
                        height="400px"
                        width="100%"
                      />
                    </div>
                    <div class="carousel-item" data-interval="2000">
                      <img
                        src={shamail1}
                        className="d-block w-100"
                        alt="shamail"
                        height="400px"
                        width="100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={shamail2}
                        className="d-block w-100"
                        alt="shamail"
                        height="400px"
                        width="100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={bamslide}
                        className="d-block w-100"
                        alt="bulugh al maram"
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

        {/*Calendar and Mixlr section*/}
        <section className="embed-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-10 col-xs-12">
                <section className="mixlr-section">
                  <iframe
                    title="calendar"
                    src="https://calendar.google.com/calendar/embed?height=250&amp;wkst=1&amp;bgcolor=%23009688&amp;ctz=Asia%2FDubai&amp;src=OXB0dG5lNmxwdWU5dmRsbTdxZm42czg5bGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043&amp;showPrint=0&amp;showCalendars=0&amp;showDate=1&amp;mode=AGENDA&amp;showTabs=0&amp;showNav=0"
                    frameborder="0"
                    width="100%"
                    height="80%"
                    scrolling="no"
                  ></iframe>
                  <div className="d-flex justify-content-center mb-1">
                    <a
                      href="#link"
                      type="button"
                      className="btn btn btn-outline-dark"
                      style={{ backgroundColor: "#5c4033", color: "white" }}
                    >
                      Show Calendar
                    </a>
                  </div>
                </section>
                {/*Modal*/}
                <div
                  className="modal fade"
                  id="exampleModalLong"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLongTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-9 col-md-8 col-sm-10 col-xs-12">
                <section className="mixlr-section">
                  <iframe
                    title="shaikh-zafar"
                    src="https://mixlr.com/zafarulhasan/embed"
                    className="mixlr"
                    width="100%"
                    height="10px"
                    scrolling="no"
                    frameborder="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/*Youtube, Image ,Showreel*/}
        <section className="embed-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <div className="container-fluid">
                  <div className="row pt-5">
                    <div
                      class="g-ytsubscribe"
                      data-channelid="UC2zD7wY_3TCGCyA9Cy_Nu9w"
                      data-layout="full"
                      data-count="default"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 ">
                <section className="mixlr-img-section">
                  <img
                    src={shamailslide}
                    alt="shamail"
                    className="img-responsive"
                  />
                </section>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6">
                <section className="mixlr-section">
                  <iframe
                    title="shaikh-zafar"
                    src="https://mixlr.com/zafarulhasan/showreel/"
                    className="mixlr "
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameborder="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/*Banner1*/}

        <section className="mosque ">
          <div class="container-fluid ">
            <div class="row text-center ">
              <div class="col-md-12">
                <h5 className="display-head">
                  <i class="fa fa-2x fa-calendar" aria-hidden="true"></i>
                  Event List
                </h5>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <div className="row justify-content-center">
              <div className="col-md-8 displayimg  d-flex justify-content-center">
                <img
                  src={mosque}
                  alt="jumuah khutbah"
                  className="img-responsive"
                />
              </div>
            </div>

            <div className=" container text-center">
              <div className="row justify-content-center">
                <h5 className="display-title">Jumu'ah Khutbah</h5>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <div className="row justify-content-center">
              <div className="col-md-8 displayimg  d-flex justify-content-center">
                <img
                  src={sharhsunnah3}
                  alt="Sharh as-Sunnah
                "
                  className="img-responsive displayimg"
                />
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="text-center">
                  <h5 className="display-title">Sharh as-Sunnah</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-8 displayimg  d-flex justify-content-center">
                <img
                  src={bam2}
                  alt="bulugh al maram
  "
                  className="img-responsive displayimg"
                />
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="text-center">
                  <h5 className="display-title">Bulugh Al Maram</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <div className="row justify-content-center">
              <div className="col-md-8 displayimg  d-flex justify-content-center">
                <img
                  src={shamail2}
                  alt="at tirmidhi
                "
                  className="img-responsive displayimg"
                />
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="text-center">
                  <h5 className="display-title">Shama'il at Tirmidhi</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Full month calendar*/}
        <section className="embed-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <section className="calendar-section" id="link">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="shaikh zafar class"
                      src="https://calendar.google.com/calendar/embed?src=9pttne6lpue9vdlm7qfn6s89lc@group.calendar.google.com&ctz=Asia/Dubai"
                      height="270px"
                      frameborder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
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
