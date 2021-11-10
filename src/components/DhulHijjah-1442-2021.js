import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import RamadanSuccessfulFast from "../img/RamadanSuccessfulFast.jpg";
import RamadanTafseer27 from "../img/RamadanTafseer27.jpg";
import EidAlFitr from "../img/EidAlFitrKhutbah.jpg";
import Eid2021 from "../img/eid2021.jpg";

export default class Ramadan2021 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*Title */}
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" data-react-helmet="true" />
            <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
            <link
              rel="canonical"
              href="https://zafarulhasan.com/#/audio/Ramadan-1442-2021"
            />
            <meta
              name="title"
              content="Zafar ul hasan madani | Ramadan Duroos"
            />
            <meta
              name="description"
              content="Ramadan 1442-2021 - Listen and Download Ramadan duroos by zafar ul hasan madani"
            />
            <meta
              name="keywords"
              content="ramadan, zafar ul hasan madani, ramadan 2021, ramadan 1442"
            />
          </Helmet>
        </div>
        {/*Banner section*/}
        <div className="container">
          <div className="row">
            <section className="banner-section">
              <div
                id="carouselExampleIndicators"
                class="carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="8000"
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
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={EidAlFitr}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div class="carousel-item ">
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
        </div>
        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head"> رمضان ١٤٤٢</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Ramadan 1442-2021
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Rounded Eid button */}
        {/*Rounded button links 1*/}
        <section className="embed-section">
          <div className="container-fluid py-3">
            <div className="row text-center ">
              <div className="col-md-12 d-flex justify-content-center">
                <a
                  href="https://youtu.be/zx0ohzkZfpk"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="manhaj"
                >
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Eid2021}
                      className="img-fluid rounded-circle"
                      alt="ahle hadith"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname d-flex justify-content-center">
                      Khutbah Eid-al-Fitr <br />
                      (1442/2021)
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Kamyab Rozedaar*/}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0 pt-2">
                    <div className="pt-2">کامیاب روزہ دار کون؟</div>
                    <p className="lead pt-3">Kamyab Rozedaar kaun</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/ramdan-2021-1442-zafarulhasan-madani"
                          title="ramadan"
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
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/watch?v=sm4X7JI2w_E&list=PLmZP1KIsC-hnCyf2bkZ3aRmA7piyq9rEA"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-video-camera" aria-hidden="true"></i>{" "}
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
        {/*٢٧ جزء*/}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0 pt-2">
                    <div className="pt-2"> جزء ٢٧</div>
                    <p className="lead pt-3">Juz 27</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="/comingsoon"
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
                          href="https://drive.google.com/drive/folders/1ziqs6oDio8BuNDHEM3loB8E4P0hgU3Xw"
                          title="Dhul hijjah"
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
                          href="https://www.youtube.com/watch?v=r1_8xjJg16c"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-video-camera" aria-hidden="true"></i>{" "}
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
        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
