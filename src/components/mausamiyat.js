import React, { Component } from "react";
import Navbar from "./Navbar";
import Year_27 from "./Year_27";
import Year_28 from "./Year_28";
import Year_29 from "./Year_29";
import Year_30 from "./Year_30";
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
import { year_1427 } from "../year_1427";
import { year_1428 } from "../year_1428";
import { year_1429 } from "../year_1429";
import { year_1430 } from "../year_1430";
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
import Ramadan from "../img/ramadan.jpeg";
import Shaban from "../img/shaban.jpeg";
import Safar from "../img/safar.jpg";
import Muharram from "../img/muharram.jpg";
import Dhulhijjah from "../img/dhulhijjah.jpeg";
import Footer from "./footer";

class mausamiat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year_1427: year_1427,
      year_1428: year_1428,
      year_1429: year_1429,
      year_1430: year_1430,

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
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">موساميات</h5>
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
          <div className="container">
            <div className="row text-center">
              <div class="col-md-6">
                <img
                  src={Muharram}
                  className="img-fluid mausamiyatPoster"
                  alt="muharram"
                />
              </div>
              <div class="col-md-6">
                <img
                  src={Safar}
                  className="img-fluid mausamiyatPoster"
                  alt="Safar"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <img
                  src={Ramadan}
                  className="img-fluid mausamiyatPoster"
                  alt="muharram"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row text-center">
              <div class="col-md-6">
                <img
                  src={Dhulhijjah}
                  className="img-fluid mausamiyatPoster"
                  alt="Dhulhijjah"
                />
              </div>
              <div class="col-md-6">
                <img
                  src={Shaban}
                  className="img-fluid mausamiyatPoster"
                  alt="Shaban"
                />
              </div>
            </div>
          </div>
        </section>
        {/*1427 */}
        <section className="embed-section">
          <div className="container">
            <div className="row">
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
                      1427
                    </button>
                    <Year_27 year1427={this.state.year_1427} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*1428 */}
        <section className="embed-section">
          <div className="container">
            <div className="row">
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
                      1428
                    </button>
                    <Year_28 year1428={this.state.year_1428} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*1429 */}
        <section className="embed-section">
          <div className="container">
            <div className="row">
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
                      1429
                    </button>
                    <Year_29 year1429={this.state.year_1429} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row">
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
                      1430
                    </button>
                    <Year_30 year1430={this.state.year_1430} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row">
              {/*Year 32 */}
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
                      1432
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
            <div className="row">
              {/*Year 33 */}
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
                      1433
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
            <div className="row">
              {/*Year 34 */}
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
                      1434
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
            <div className="row">
              {/*Year 35 */}
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
                      1435
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
            <div className="row">
              {/*Year 36 */}
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
                      1436
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
            <div className="row">
              {/*Year 37 */}
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
                      1437
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
            <div className="row">
              {/*Year 38 */}
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
                      1438
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
            <div className="row">
              {/*Year 39 */}
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
                      1439
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
            <div className="row">
              {/*Year 40 */}
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
                      1440
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
            <div className="row">
              {/*Year 41 */}
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
                      1441
                    </button>
                    <Year_41 year1441={this.state.year_1441} />
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
