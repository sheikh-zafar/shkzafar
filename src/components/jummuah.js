import React, { Component } from "react";
import bamslide from "../img/bamslide.jpg";
import Navbar from "./Navbar";
import Footer from "./footer";
import youtube from "../img/youtube.jpg";
import mixlr from "../img/mixlr.png";

export default class jummuah extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">جمعة خطبة</h5>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Background */}
        <div
          className="container pt-3 rounded"
          style={{
            backgroundColor: "beige",
            border: "5px solid #5c4033",
          }}
        >
          <img
            src={bamslide}
            className="img-fluid header-img"
            alt="Jumu'ah Khutbah"
          />
          <div
            class="col-md-12 caption d-flex justify-content-between
            "
          >
            <div>
              <a href="/">
                <i
                  className="fa fa-youtube-play icon-bar"
                  style={{ color: "red" }}
                  aria-hidden="true"
                ></i>
              </a>
              <a href="/">
                <i
                  className="fa fa-map-marker icon-bar"
                  style={{ color: "#000000" }}
                  aria-hidden="true"
                ></i>
              </a>
              <a href="/">
                {" "}
                <img
                  src={mixlr}
                  className="rounded mr-auto icon-bar"
                  alt="zafarul hasan"
                />{" "}
              </a>
            </div>
            <div className="boardcard">
              <a href="/" style={{ color: "#2e856e" }}>
                <p className="mixlrtext">
                  <i
                    class="fa fa-youtube-play mixlricon"
                    style={{ color: "red" }}
                    aria-hidden="true"
                  ></i>
                  YouTube
                </p>
              </a>
            </div>

            <div className="boardcard">
              <a href="/" style={{ color: "#2e856e" }}>
                <p className="mixlrtext">
                  <i
                    className="fa fa-map-marker mixlricon"
                    style={{ color: "#000000" }}
                    aria-hidden="true"
                  ></i>
                  Masjid Abdur Rahman Al-khas
                </p>
              </a>
            </div>
            <div className="boardcard">
              <a href="/" style={{ color: "#2e856e" }}>
                <p className="mixlrtext">
                  {" "}
                  <img
                    src={mixlr}
                    className="rounded mr-auto mixlricon"
                    alt="zafarul hasan"
                  />{" "}
                  Mixlr
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="container  pt-5 ">
          <div className="row ">
            <div className="col-md-12 text-center">
              <h3 class="heading-name" style={{ color: "beige" }}>
                Latest Khutbah
              </h3>
            </div>
            <iframe
              title="sheikh-zafar"
              src="https://archive.org/embed/2020-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
              className="m-3"
              width="100%"
              height="30"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div className="container  pt-5 ">
          <div className="row ">
            <div className="col-md-12  text-center">
              <h3 className="heading-name" style={{ color: "beige" }}>
                2021 (۱٤٤۲ - ۱٤٤۳)&nbsp;&nbsp;
                <a
                  href="https://drive.google.com/drive/folders/1l9T-CQ1PCrhLlLAa5c3-aQAokT0jLyXh"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn btn-lg btn-outline-dark"
                  style={{
                    backgroundColor: "beige",
                    color: "#2e856e",
                    fontFamily: "Righteous",
                  }}
                >
                  Download
                </a>
              </h3>
            </div>
            <iframe
              title="sheikh-zafar"
              src="https://archive.org/embed/2020-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
              frameborder="0"
              className="m-3"
              width="100%"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        {/*2020 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2020</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤٤۱-۱٤٤۲{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2020-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1Gqwi3Mbw00PHkcI3NWyakVe-zsr0M9HV"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*2019 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2019</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤٤۰-۱٤٤۱{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2019-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1Gqwi3Mbw00PHkcI3NWyakVe-zsr0M9HV"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2018 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2018</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳۹ - ۱٤٤۰{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2018-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1YPqmTZnpHKUANnFPNz21vDEmPis9dUno"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2017 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2017</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳۸ - ۱٤۳۹{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2017-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/15RHnNDUDY1cIYa6DtJLCuDPkCI36S21s"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2016 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2016</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳٦ - ۱٤۳۷{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2016-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1LyS5vLN6BzwUn2Gx2dGSQ5nwpUVUxoOX"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2015 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2015</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳۷ - ۱٤۳۸{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2015-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/19x2wef8L4a6T0GNuHgEtSf5Ie-e3Ali4"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2014 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2014</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳٦ - ۱٤۳۷{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2014-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1VKkGtyDWXiImGgyP2gG1IiB_NFGtE7Fq"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2013 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2013</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳٥ - ۱٤۳٦{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2013-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1I25CEplT11AHxIfeg1zTJxl6uwAXcnnn"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2012 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2012</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳۲ - ۱٤۳۳{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2012-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1Q6Ex1u-JthpGDZ3G4NAxDY2iPdrvYJMg"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2011 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2011</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳٤ - ۱٤۳٥
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2011-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1_4WYdFIBOiCZOjB812NpzyKaxYgikFyj"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2010 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2010</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳۳ - ۱٤۳٤{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2010-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1DVWwypnsMNuJvVZ4v_2FA8IpptwxRxg9"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2009 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2009</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳۲ - ۱٤۳۳
                  </h2>
                  <p class="card-text" style={{ fontSize: "20px" }}>
                    <i className="fa fa-map-marker" aria-hidden="true">
                      Masjid Abdur Rahman Al-khas
                    </i>
                  </p>
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2009-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1EJ1JPE4M8bPyJNwhgkEi_pOTGrVsLYgC"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2008 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2008</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳۱ - ۱٤۳۲
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2008-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/195tqUcLmuZ3RKeVNqBA5JI_PzxzIbwMx"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*2007 */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2007</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤۳۰ - ۱٤۳۱
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2007-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1MkU2NBaWv1JoybsyJf1nh7Ehu5vRArrs"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
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
