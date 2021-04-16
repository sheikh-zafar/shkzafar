import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "react-calendar/dist/Calendar.css";
import bam2 from "../img/bulugh.jpg";
import shamail2 from "../img/shamail2.jpg";
import sharhsunnah3 from "../img/sharhsunnah3.jpg";
import mosque from "../img/mosque.jpg";
import Covid from "../img/covid.jpeg";
import { Link } from "react-router-dom";
import Baqarah from "../img/baqarah.jpg";
import Sunday from "../img/sunday.jpg";
import { Helmet } from "react-helmet";
import monday from "../img/monday.jpg";
import wednesday from "../img/wednesday.jpg";
import saturday from "../img/saturday.jpg";
import RamadanSuccessfulFast from "../img/RamadanSuccessfulFast.jpg";
import RamadanTafseer27 from "../img/RamadanTafseer27.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="menu"></div>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
            <link rel="canonical" href="https://zafarulhasan.com/#/" />
            <meta
              name="description"
              content="Listen and Download Friday Sermon by zafar ul hasan madani"
            />
            <meta
              name="keywords"
              content="urdu tafseer, urdu bayan, Dil Ke Aamal, Azmate sahaba, mowsamiyyat shaban, mowsamiyyat ramadan, Tafseer surah baqarah, tadween as sunnah,isteqamat, "
            />
          </Helmet>
        </div>
        {/*Heading name and Navigation bar*/}
        <Navbar />
        {/*Banner section*/}
        <div className="container">
          <div className="row">
            <section className="banner-section">
              <div
                id="carouselExampleIndicators"
                class="carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="2500"
              >
                <ol id="myCarousel-indicators" class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="4"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="4"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={RamadanSuccessfulFast}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={RamadanTafseer27}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={Sunday}
                      className="img-fld"
                      alt="ahle hadith"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div class="carousel-item ">
                    <img
                      src={monday}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={Baqarah}
                      className="img-fld"
                      alt="surah baqarah"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div class="carousel-item ">
                    <img
                      src={wednesday}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div class="carousel-item ">
                    <img
                      src={saturday}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </section>
          </div>
          <div className="row text-center">
            <p className="lead" style={{ color: "beige" }}>
              ***Note: All Regular Duroos are on hold for the Month of Ramadan
              only Ramadan Duroos and Jumu'ah Khutba will be ongoing***
            </p>
          </div>
        </div>

        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <table class="table table-bordered tableBg">
                <thead className="tableBg">
                  <tr className="tableBg">
                    <th scope="col" colspan="2" className="tableBg">
                      <div
                        class="card-header pb-0 pt-2"
                        style={{ color: "#5c4033" }}
                      >
                        <div className="pt-2"> رمضان ١٤٤٢</div>
                        <p className="lead pt-3">Ramadan 1442-2021</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableBg">
                    <th scope="col" className="tableBg">
                      <Link
                        to="/Ramadan-1442-2021"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          width: "170px",
                          height: "70px",
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        رمضان <br />
                        Duroos
                      </Link>
                    </th>
                    <th scope="col" className="tableBg">
                      <Link
                        to="/jummuah"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          width: "170px",
                          height: "70px",
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Khutbah <br />
                        Al-Jummuah
                      </Link>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/*Calendar and Mixlr section*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-10 col-xs-12 ">
              <section className="mixlr-section calendar">
                <iframe
                  title="ahle hadith"
                  src="https://calendar.google.com/calendar/embed?height=250&amp;wkst=1&amp;bgcolor=%232e856e&amp;ctz=Asia%2FDubai&amp;src=M2I4cG9vczFic2lwdGhnYnA5NWhjYnZuaTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;mode=AGENDA"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </section>
            </div>
            <div className=" col-lg-7 col-md-7 col-sm-10 col-xs-12">
              <section className="mixlr-section">
                <iframe
                  title="zafarulhasan"
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

        {/*Youtube, Image ,Showreel*/}
        <div className="container pt-3">
          <section className="three-col-section">
            <div
              className="container-fluid py-4 "
              style={{
                color: "#5c4033",
                fontFamily: "Pacifico family",
                fontSize: "15px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.9)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="container py-3 ">
                    <a
                      href="https://calendar.google.com/calendar/u/0/r/month?tab=wc&pli=1"
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
                      Calendar
                    </a>
                    <div
                      className="container  px-0 pt-1"
                      style={{ fontFamily: "Fredoka One", fontSize: "15px" }}
                    >
                      Complete Lecture Schedule
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                  <div className="container py-3">
                    <a
                      href="https://t.me/s/zafarulhasan?"
                      title="salaf"
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
                      Telegram
                    </a>
                    <div
                      className="container  px-0 pt-1"
                      style={{ fontFamily: "Fredoka One", fontSize: "15px" }}
                    >
                      Get Updates
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6  col-xs-6">
                  <div className="container py-4">
                    <div
                      class="g-ytsubscribe"
                      data-channelid="UC2zD7wY_3TCGCyA9Cy_Nu9w"
                      data-layout="full"
                      data-count="default"
                    ></div>
                  </div>
                  <div
                    className="container  px-0 pt-1"
                    style={{ fontFamily: "Fredoka One", fontSize: "15px" }}
                  >
                    YouTube Channel
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="container py-3">
                    <a
                      href="https://mixlr.com/zafarulhasan/showreel/"
                      title="salaf"
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
                    <div
                      className="container  px-0 pt-1"
                      style={{ fontFamily: "Fredoka One", fontSize: "15px" }}
                    >
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
          <div className="container ">
            <div className="row ">
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={mosque}
                      alt="salaf"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className=" container text-center pt-4">
                  <div className="row justify-content-center">
                    <h5 className="display-title">Jumu'ah Khutbah</h5>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2021-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550"
                        title="ahle hadith"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/folders/1al-gkHcSA5yDjFUrjoXRABxoEg5v8FbF"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=-Zy5GaMI2_U&list=PLmZP1KIsC-hmuVCpduAT3dMDd-kZG6l4f"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={Covid}
                      alt="manhaj"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Covid-19 Lectures</h5>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/corona-virus-covid-19-lectures-zafarulhasan-madani&playlist=1&list_height=550"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/folders/1Zc_fkwZOBT74_wjYolbEPPzucJHA7ewJ"
                        title="salaf"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=2iinT78L7Jo&list=PLmZP1KIsC-hnPUPMq7dyV3r8KVP-0G9Vi"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={sharhsunnah3}
                      alt="salaf"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Sharh as-Sunnah</h5>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/sharh-as-sunnah-barbaharee-zafarulhasan-madani&playlist=1&list_height=550"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1FHmnB17RfmCYfZdjSpuyQ6XCt1zELR-o"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=A_GfTdyV0Y0&list=PLmZP1KIsC-hnmXQn8oulAyQDd3l8xjyDo"
                        title="quran and sunnah"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="container py-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={bam2}
                      alt="fiqh"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Bulugh Al Maram</h5>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/sharh-bulugh-al-maram-zafarulhasan-madani&playlist=1&list_height=550"
                        title="fiqh"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1msQrFTXsWmG2M76nb373wHtJFeFgl85Y"
                        title="fiqh"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=uWYV4PLluxw&list=PLmZP1KIsC-hltNDJamXol6XA04VzJKIng"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={shamail2}
                      alt="salaf"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Shama'il at Tirmidhi</h5>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <Link
                        to="/comingsoon"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </Link>
                    </div>
                    <div className="col">
                      <Link
                        to="/comingsoon"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </Link>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=L1HK1mwyLbI&list=PLmZP1KIsC-hk_6GGFntSM-IwahZs_cJb6"
                        title="ahle hadith"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
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
                <section className="calendar-section" id="target">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="zafar ul hasan madani"
                      src="https://calendar.google.com/calendar/embed?src=3b8poos1bsipthgbp95hcbvni4@group.calendar.google.com&ctz=Asia/Dubai"
                      frameborder="0"
                      scrolling="no"
                      height="100%"
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
