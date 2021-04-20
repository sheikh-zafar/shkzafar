import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
                          href="https://drive.google.com/drive/u/0/folders/1k-O0tHKvkC68OJ7E_UmPsKwT42-arFT-"
                          title="juz 27 tafseer"
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
                          href="https://www.youtube.com/c/ZafarulHasan/playlists"
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
