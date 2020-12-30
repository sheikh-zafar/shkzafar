import React, { Component } from "react";
import Navbar from "./Navbar";
import bamslide from "../img/bamslide.jpg";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default class khutbah extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*Jummu'ah Khutbah */}
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

        {/*Khutbah Banner */}
        <div className="container-fluid px-0 ">
          <img
            src={bamslide}
            className="img-fluid header-img"
            alt="Jumu'ah Khutbah"
          />
        </div>

        {/*Timeline */}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <h2 className="rounded-headname">Latest Khutbah</h2>
          </div>

          <div class="timeline">
            <div class="timelinecontainer right">
              <div class="card text-center">
                <div class="card-header">2021</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤٤۰ - ۱٤٤۱{" "}
                  </h2>
                  <iframe
                    title="sheikh-zafar"
                    src="https://archive.org/embed/2020-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=150"
                    width="100%"
                    frameborder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="timelinecontainer left">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2020</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤٤۰ - ۱٤٤۱{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/2020-jumuah-khutbah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          href="https://drive.google.com/drive/u/0/folders/1WGuAmSMs0TVhFniVcLvjxWHZptcysHn7"
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer right">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2019</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳۹ - ۱٤٤۰{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/2019-jumuah-khutbah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer left">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2018</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳۸ - ۱٤۳۹{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/2018-jumuah-khutbah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer right">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2017</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳۷ - ۱٤۳۸{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/2017-jumuah-khutbah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer left">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2016</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳٦ - ۱٤۳۷{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/2016-jumuah-khutbah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer right">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2015</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳٥ - ۱٤۳٦{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/2015-jumuah-khutbah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer left">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2014</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳٤ - ۱٤۳٥{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/2014-jumuah-khutbah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer right">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2013</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳۳ - ۱٤۳٤{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/2013-jumuah-khutbah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer left">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2012</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳۲ - ۱٤۳۳{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer right">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2011</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳۱ - ۱٤۳۲
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer left">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2010</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۳۰ - ۱٤۳۱{" "}
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer right">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2009</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۲۹ - ۱٤۳۰
                    </h2>
                    <p class="card-text" style={{ fontSize: "20px" }}>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        Masjid Abdur Rahman Al-khas
                      </i>
                    </p>
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer left">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2008</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۲۸ - ۱٤۲۹
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
            <div class="timelinecontainer right">
              <div class="content">
                <div class="card text-center">
                  <div class="card-header">2007</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      ۱٤۲۷ - ۱٤۲۸
                    </h2>

                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
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
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
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
