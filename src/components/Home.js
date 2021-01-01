import React, { Component } from "react";
import Navbar from "./Navbar";
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
        <Navbar />

        {/*Banner section*/}
        <div className="container">
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
                        src={shamailslide}
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
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-10 col-xs-12 py-4">
                <section className="mixlr-section calendar">
                  <iframe
                    title="calendar"
                    src="https://calendar.google.com/calendar/embed?height=250&amp;wkst=1&amp;bgcolor=%232e856e&amp;ctz=Asia%2FDubai&amp;src=M2I4cG9vczFic2lwdGhnYnA5NWhjYnZuaTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;mode=AGENDA"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    scrolling="no"
                  ></iframe>
                </section>
              </div>
              <div className=" col-lg-7 col-md-7 col-sm-10 col-xs-12">
                <div
                  className="container  px-0 pt-1"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Live Broadcast on Mixlr
                </div>
                <section className="mixlr-section">
                  <iframe
                    title="shaikh-zafar"
                    src="https://mixlr.com/zafarulhasan/embed"
                    className="mixlr"
                    width="100%"
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
        <div className="container pt-3">
          <section className="three-col-section">
            <div
              className="container-fluid py-4 "
              style={{
                color: "#5c4033",
                fontFamily: "Pacifico family",
                fontSize: "15px",
              }}
            >
              <div className="row justify-content-center ">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="container py-3 ">
                    <a
                      href="#link"
                      role="button"
                      className="btn btn btn-lg btn-outline-dark"
                      style={{
                        width: "170px",
                        backgroundColor: "#2e856e",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Calendar
                    </a>
                    <div className="container  px-0 pt-1">
                      Complete Lecture schedule
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-12">
                  <div className="container py-4">
                    <div
                      class="g-ytsubscribe"
                      data-channelid="UC2zD7wY_3TCGCyA9Cy_Nu9w"
                      data-layout="full"
                      data-count="default"
                    ></div>
                    <div className="container px-0 pt-1">YouTube Channel</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="container py-3">
                    <a
                      href="https://mixlr.com/zafarulhasan/showreel/"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn btn-lg btn-outline-dark"
                      style={{
                        width: "170px",
                        backgroundColor: "#2e856e",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Mixlr Show Reel
                    </a>
                    <div className="container px-0 pt-1">
                      Catch up on missed duroos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*Banner1*/}
        <section className="mosque">
          <div className="container">
            <div className="row" style={{ border: "1px dotted beige" }}>
              <div className="container py-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={mosque}
                      alt="jumuah khutbah"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className=" container text-center">
                  <div className="row justify-content-center">
                    <h5 className="display-title">Jumu'ah Khutba</h5>
                  </div>
                </div>
              </div>

              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
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
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
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
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={shamail2}
                      alt="at tirmidhi"
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
            </div>
          </div>
        </section>

        {/*Full month calendar*/}
        <section className="embed-section" id="link">
          <div className="container">
            <div className="row">
              <div class="container-fluid ">
                <div class="row text-center">
                  <div class="col-md-12">
                    <h5 className="display-head">
                      <i class="fa fa-2x fa-calendar" aria-hidden="true"></i>
                      Event List
                    </h5>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <section className="calendar-section">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="shaikh zafar class"
                      className="calendra"
                      src="https://calendar.google.com/calendar/embed?src=3b8poos1bsipthgbp95hcbvni4@group.calendar.google.com&ctz=Asia/Dubai"
                      frameborder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
