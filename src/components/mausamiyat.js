/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Navbar from "./Navbar";
import Year_27 from "./Year_27";
import Year_28 from "./Year_28";
import Year_29 from "./Year_29";
import Year_30 from "./Year_30";
import Year_31 from "./Year_31";
import Year_32 from "./Year_32";
import Year_33 from "./Year_33";
import Year_34 from "./Year_34";
import Year_35 from "./Year_35";
import Year_36 from "./Year_36";
import Year_37 from "./Year_37";
import Year_38 from "./Year_38";
import Year_39 from "./Year_39";
import Year_40 from "./Year_40";
import Year_41 from "./Year_41";
import Year_42 from "./Year_42";
import { year_1427 } from "../year_1427";
import { year_1428 } from "../year_1428";
import { year_1429 } from "../year_1429";
import { year_1430 } from "../year_1430";
import { year_1431 } from "../year_1431";
import { year_1432 } from "../year_1432";
import { year_1433 } from "../year_1433";
import { year_1434 } from "../year_1434";
import { year_1435 } from "../year_1435";
import { year_1436 } from "../year_1436";
import { year_1437 } from "../year_1437";
import { year_1438 } from "../year_1438";
import { year_1439 } from "../year_1439";
import { year_1440 } from "../year_1440";
import { year_1441 } from "../year_1441";
import { year_1442 } from "../year_1442";
import Ramadan from "../img/ramadan.jpg";
import Shaban from "../img/shaban.jpg";
import Safar from "../img/safar.jpg";
import Muharram from "../img/muharram.jpg";
import Dhulhijjah from "../img/dhulhijjah.jpg";
import Rajab from "../img/rajab.jpg";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class mausamiat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year_1427: year_1427,
      year_1428: year_1428,
      year_1429: year_1429,
      year_1430: year_1430,
      year_1431: year_1431,
      year_1432: year_1432,
      year_1433: year_1433,
      year_1434: year_1434,
      year_1435: year_1435,
      year_1436: year_1436,
      year_1437: year_1437,
      year_1438: year_1438,
      year_1439: year_1439,
      year_1440: year_1440,
      year_1441: year_1441,
      year_1442: year_1442,
    };
  }
  render() {
    return (
      <div>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" data-react-helmet="true" />
            <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
            <link
              rel="canonical"
              href="https://zafarulhasan.com/#/audio/mausamiyat"
            />
            <meta
              name="title"
              content="Zafar ul hasan madani | Mausamiyat duroos"
            />
            <meta
              name="description"
              content="Mausamiyat duroos - Listen and Download Mausamiyat duroos by zafar ul hasan madani"
            />
          </Helmet>
        </div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">موسمية</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Mausamiyat
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <section className="embed-section">
          <div className="container ">
            <div className="row text-center ">
              <div class="col-md-4">
                <img
                  src={Muharram}
                  className="img-fluid mausamiyatPoster"
                  alt="muharram"
                />
                <br />
                <div className="container-fluid">
                  <div class="row d-flex justify-content-between">
                    <div className="pt-2">
                      <Link
                        to="/comingsoon"
                        rel="nooperner noreferrer"
                        target="_blank"
                        className="btn btn btn-lg btn-outline-dark "
                        style={{
                          width: "170px",
                          backgroundColor: "#5c4033",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </Link>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://drive.google.com/drive/folders/1b5HZv_HcOAhF7X01w3iovI0KzIqCpprK"
                        title="muharram"
                        rel="nooperner noreferrer"
                        target="_blank"
                        className="btn btn btn-lg btn-outline-dark "
                        style={{
                          width: "170px",
                          backgroundColor: "#5c4033",
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

              <div class="col-md-4">
                <img
                  src={Safar}
                  className="img-fluid mausamiyatPoster"
                  alt="Safar"
                />
                <div class="row d-flex justify-content-between">
                  <div className="pt-2">
                    <Link
                      to="/comingsoon"
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Listen
                    </Link>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://drive.google.com/drive/folders/1QLxr6xTkaik9HDA9jn02Wrz5Ghp64i0p"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                      rel="nooperner noreferrer"
                      target="_blank"
                      title="safar"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <img
                  src={Ramadan}
                  className="img-fluid mausamiyatPoster"
                  alt="Ramadan"
                />
                <div className="pt-2">
                  <a
                    href="https://archive.org/details/ramdan-2021-1442-zafarulhasan-madani"
                    rel="nooperner noreferrer"
                    target="_blank"
                    className="btn btn btn-lg btn-outline-dark"
                    style={{
                      width: "170px",
                      backgroundColor: "#5c4033",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                  >
                    <i class="fa fa-headphones" aria-hidden="true"></i> Listen
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href="https://drive.google.com/drive/folders/1sU6VFMVMRmzzubT2w0CYguodwGDsTd3y"
                    rel="nooperner noreferrer"
                    target="_blank"
                    title="ramadan"
                    className="btn btn btn-lg btn-outline-dark "
                    style={{
                      width: "170px",
                      backgroundColor: "#5c4033",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                  >
                    <i class="fa fa-download" aria-hidden="true"></i> Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row text-center">
              <div class="col-md-4">
                <img
                  src={Rajab}
                  className="img-fluid mausamiyatPoster"
                  alt="Rajab"
                />
                <div class="row d-flex justify-content-between">
                  <div className="pt-2">
                    <Link
                      to="/comingsoon"
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Listen
                    </Link>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://drive.google.com/drive/folders/1D57h2I6_UyjknJBqtn6PWaNhGe8Hx7fR"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                      rel="nooperner noreferrer"
                      target="_blank"
                      title="rajab"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <img
                  src={Dhulhijjah}
                  className="img-fluid mausamiyatPoster "
                  alt="Dhulhijjah"
                />{" "}
                <div class="row d-flex justify-content-between">
                  <div className="pt-2">
                    <Link
                      to="/comingsoon"
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Listen
                    </Link>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://drive.google.com/drive/folders/1PiPdszibzFuRKipSHQvlVe79TdWNZoWW"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                      rel="nooperner noreferrer"
                      target="_blank"
                      title="dhulhijjah"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <img
                  src={Shaban}
                  className="img-fluid mausamiyatPoster"
                  alt="Shaban"
                />{" "}
                <div class="row d-flex justify-content-between">
                  <div className="pt-2">
                    <Link
                      to="/comingsoon"
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Listen
                    </Link>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://drive.google.com/drive/folders/13laZlvbf1xL-pA-g1Y23AjYlDbW2ck2P"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                      rel="nooperner noreferrer"
                      target="_blank"
                      title="shaban"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          {/*Youtube accordion */}
          <div className="container">
            <div className="row mausamiyatmargin">
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      Watch On YouTube
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    class="accordion-collapse collapse "
                    aria-labelledby="heading1"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item">
                          {" "}
                          <a
                            href="https://www.youtube.com/watch?v=oybD_6uY-vY&list=PLmZP1KIsC-hn1-9x2ug-sN1KB3gNVDMTn"
                            title="muharram"
                            className="orderlist"
                            rel="nooperner noreferrer"
                            target="_blank"
                          >
                            Muharram
                          </a>
                        </li>
                        <li class="list-group-item">
                          <a
                            href="https://www.youtube.com/watch?v=LJ6TRqr-vNU&list=PLmZP1KIsC-hkLgMl1NwJx5QbeyEKDzAp2"
                            title="safar"
                            className="orderlist"
                            rel="nooperner noreferrer"
                            target="_blank"
                          >
                            Safar
                          </a>
                        </li>
                        <li class="list-group-item">
                          {" "}
                          <a
                            href="https://www.youtube.com/c/ZafarulHasan/featured"
                            title="rajab"
                            className="orderlist"
                            rel="nooperner noreferrer"
                            target="_blank"
                          >
                            Rajab
                          </a>
                        </li>
                        <li class="list-group-item">
                          {" "}
                          <a
                            href="https://www.youtube.com/c/ZafarulHasan/featured"
                            title="shaban"
                            className="orderlist"
                            rel="nooperner noreferrer"
                            target="_blank"
                          >
                            Shaban
                          </a>
                        </li>
                        <li class="list-group-item">
                          <a
                            href="https://www.youtube.com/watch?v=pVxV0Y545GY&list=PLmZP1KIsC-hlJlkxP7gRWagKJKfm018Qm"
                            title="ramadan lectures"
                            className="orderlist"
                            rel="nooperner noreferrer"
                            target="_blank"
                          >
                            Ramadan
                          </a>
                        </li>
                        <li class="list-group-item">
                          <a
                            href="https://www.youtube.com/watch?v=tTbR9WDuBFU&list=PLmZP1KIsC-hk7iLLDpySTIjBwEovtsNS0"
                            title="ramadan"
                            className="orderlist"
                            rel="nooperner noreferrer"
                            target="_blank"
                          >
                            Dhul Hijjah
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 42 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header " id="headingSixteen">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSixteen"
                      aria-expanded="true"
                      aria-controls="collapseSixteen"
                    >
                      1442 [2020 - 2021]
                    </button>
                    <Year_42 year1442={this.state.year_1442} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 41 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header " id="headingFifteen">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFifteen"
                      aria-expanded="true"
                      aria-controls="collapseFifteen"
                    >
                      1441 [2019 - 2020]
                    </button>
                    <Year_41 year1441={this.state.year_1441} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 40 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFourteen">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFourteen"
                      aria-expanded="true"
                      aria-controls="collapseFourteen"
                    >
                      1440 [2018 - 2019]
                    </button>
                    <Year_40 year1440={this.state.year_1440} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 39 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThirteen">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThirteen"
                      aria-expanded="true"
                      aria-controls="collapseThirteen"
                    >
                      1439 [2017 - 2018]
                    </button>
                    <Year_39 year1439={this.state.year_1439} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 38 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwelve">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwelve"
                      aria-expanded="true"
                      aria-controls="collapseTwelve"
                    >
                      1438 [2016 - 2017]
                    </button>
                    <Year_38 year1438={this.state.year_1438} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 37 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEleven">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEleven"
                      aria-expanded="true"
                      aria-controls="collapseEleven"
                    >
                      1437 [2015 - 2016]
                    </button>
                    <Year_37 year1437={this.state.year_1437} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 36 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTen">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="true"
                      aria-controls="collapseTen"
                    >
                      1436 [2014 - 2015]
                    </button>
                    <Year_36 year1436={this.state.year_1436} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 35 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingNine">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="true"
                      aria-controls="collapseNine"
                    >
                      1435 [2013 - 2014]
                    </button>
                    <Year_35 year1435={this.state.year_1435} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 34 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEight">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="true"
                      aria-controls="collapseEight"
                    >
                      1434 [2012 - 2013]
                    </button>
                    <Year_34 year1434={this.state.year_1434} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 33 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSeven">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="true"
                      aria-controls="collapseSeven"
                    >
                      1433 [2011 - 2012]
                    </button>
                    <Year_33 year1433={this.state.year_1433} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 32 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="true"
                      aria-controls="collapseSix"
                    >
                      1432 [2010 - 2011]
                    </button>
                    <Year_32 year1432={this.state.year_1432} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 31 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                    >
                      1431 [2009 - 2010]
                    </button>
                    <Year_31 year1431={this.state.year_1431} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 30 */}
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      1430 [2008 - 2009]
                    </button>
                    <Year_30 year1430={this.state.year_1430} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*1429 */}
        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      1429 [2007 - 2008]
                    </button>
                    <Year_29 year1429={this.state.year_1429} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*1428 */}
        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      1428 [2006 - 2007]
                    </button>
                    <Year_28 year1428={this.state.year_1428} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*1427 */}
        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1427 [2005 - 2006]
                    </button>
                    <Year_27 year1427={this.state.year_1427} />
                  </h2>
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

export default mausamiat;
