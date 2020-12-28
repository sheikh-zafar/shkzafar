import React, { Component } from "react";
import Navbar from "./Navbar";
import bamslide from "../img/bamslide.jpg";
import Footer from "./footer";

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
          <div className="container">
            <div className="row text-center d-flex justify-content-center">
              <div class="col-md-12 ">
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

          <div class="timeline">
            <div class="timelinecontainer left">
              <div class="content">
                <h2>2020</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer right">
              <div class="content">
                <h2>2019</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer left">
              <div class="content">
                <h2>2018</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer right">
              <div class="content">
                <h2>2017</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer left">
              <div class="content">
                <h2>2016</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer right">
              <div class="content">
                <h2>2015</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer left">
              <div class="content">
                <h2>2014</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer right">
              <div class="content">
                <h2>2013</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer left">
              <div class="content">
                <h2>2012</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer right">
              <div class="content">
                <h2>2011</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer left">
              <div class="content">
                <h2>2010</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer right">
              <div class="content">
                <h2>2009</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer left">
              <div class="content">
                <h2>2008</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div class="timelinecontainer right">
              <div class="content">
                <h2>2007</h2>
                <div class="card text-center">
                  <div class="card-header">جمعة خطبة</div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
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
                  <div class="card-footer text-muted">2 days ago</div>
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
