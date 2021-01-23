import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default class muktasar extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">مختصر دورة</h5>
                <p
                  className="lead pt-3"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Dawrah ilmiyah (Mukhtasar)
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Raf'ul maram*/}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    رفع المرام
                    <p className="lead pt-3">Raf'ul Maram</p>
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
                    <p class="card-text" style={{ fontSize: "20px" }}>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        Masjid Abdur Rahman Al-khas
                      </i>
                    </p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-md-6 col-xs-6 col-sm-6">
                        <a
                          href="https://archive.org/embed/raf-al-malam-an-al-aimmat-al-alam-zafarulhasan-madani&playlist=1&list_height=550"
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
                      <div className="col-md-6 col-xs-6 col-sm-6">
                        <a
                          href="https://drive.google.com/drive/folders/1-lsbdF9fKIoVkT5l2HMBv_0jsD8VoapL"
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
          </div>
        </section>
        {/*Tadween card */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    تدوين السنة
                    <p className="lead pt-3">Tadween Sunnah</p>
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
                    <p class="card-text" style={{ fontSize: "20px" }}>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        Masjid Abdur Rahman Al-khas
                      </i>
                    </p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani&playlist=1&list_height=550"
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
                          href="https://drive.google.com/drive/folders/1Fx6WbJG3y2mmkrSuKSWXJZz3FBwd80mf"
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
          </div>
        </section>
        {/*Arbaen Nabawi card */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    الربعين النووى
                    <p className="lead pt-3">Al-Arba'oona An-Nawawi</p>
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
                    <p class="card-text" style={{ fontSize: "20px" }}>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        Masjid Abdur Rahman Al-khas
                      </i>
                    </p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <Link
                          to="/comingsoon"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          Listen
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/folders/1-lsbdF9fKIoVkT5l2HMBv_0jsD8VoapL"
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
