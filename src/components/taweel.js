import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default class taweel extends Component {
  render() {
    return (
      <div>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Zafar ul hasan madani | Taweel Duroos</title>
            <link
              rel="canonical"
              href="https://zafarulhasan.com/#/audio/taweel"
            />
            <meta
              name="description"
              content="Listen and Download Sharh as-sunnah, Bulugh Al-maram, Kitab At-Tawheed, Usool as-Salasah, Shamail al-Muhammadiyah, Riyad as-Saliheen by zafar ul hasan madani"
            />
          </Helmet>
        </div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">طويل دورة</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Dawrah ilmiyyah (Taweel)
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Sharh as-Sunnah */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    شرح السنة
                    <p className="lead pt-3">Sharh As-Sunnah</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/sharh-as-sunnah-barbaharee-zafarulhasan-madani&playlist=1&list_height=550"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1FHmnB17RfmCYfZdjSpuyQ6XCt1zELR-o"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hnmXQn8oulAyQDd3l8xjyDo"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-youtube-play" aria-hidden="true"></i>{" "}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Bulugh al-Maram */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    بلوغ المرام
                    <p className="lead pt-3">Bulugh al-Maram</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/sharh-bulugh-al-maram-zafarulhasan-madani&playlist=1&list_height=550"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1dt9ClL2vhPPiz9UtfzwRyWNvFpHOj1dw"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hltNDJamXol6XA04VzJKIng"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-youtube-play" aria-hidden="true"></i>{" "}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Kitab at-Tawheed */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    كتاب التوحيد
                    <p className="lead pt-3">Kitab at-Tawheed</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <Link
                          to="/comingsoon"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                          Listen
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1msQrFTXsWmG2M76nb373wHtJFeFgl85Y"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/c/ZafarulHasan/featured"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-youtube-play" aria-hidden="true"></i>{" "}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Usool al-Thalatha */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    الأصول الثلاثة
                    <p className="lead pt-3">Usool al-Thalatha</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/3-fundamental-principles-zafarulhasan-madani&playlist=1&list_height=550"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1b_iM6DBbrbbMP7p7-KzuRVeH-wZDPwts"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hlVgAZOuDvaowaj9uPKoYWL"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-youtube-play" aria-hidden="true"></i>{" "}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Shamail al-Muhammadiyah */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    الشمائل المحمدية
                    <p className="lead pt-3">Shamail al-Muhammadiyah</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/sharh-shamail-muhammadiyah-zafarulhasan-madani&playlist=1&list_height=550"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1SNvR6J81FrBQjwmWofW5U3PLeCQKEIvN"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hk_6GGFntSM-IwahZs_cJb6"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-youtube-play" aria-hidden="true"></i>{" "}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Riyad us-saliheen */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0">
                    رياض الصالحين
                    <p className="lead pt-3">Riyad us-saliheen</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <Link
                          to="/comingsoon"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                          Listen
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1MxPz38wGwGKZHumOMAU6ZaJemvDG9PTn"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hm8ojp4-oHK9GMrHKjcIDyB"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-youtube-play" aria-hidden="true"></i>{" "}
                          Watch
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
