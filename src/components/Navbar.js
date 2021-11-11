import React, { Component } from "react";
import { Link } from "react-router-dom";
import SheikhName from "../img/sheikhname.png";
import QuranHadith1Arabic from "../img/Quran&Hadith1Arabic.png";
import QuranHadith1Urdu from "../img/Quran&Hadith1Urdu.png";
import QuranHadith1English from "../img/Quran&Hadith1English.png";
import QuranHadith2Arabic from "../img/Quran&Hadith2Arabic.png";
import QuranHadith2Urdu from "../img/Quran&Hadith2Urdu.png";
import QuranHadith2English from "../img/Quran&Hadith2English.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <div className="row">
            <div className="container">
              <div className="col-xl-7 col-md-6 col-sm-7">
                <div
                  id="carouselExampleFade"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="2500"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={QuranHadith1Arabic}
                        className="ayah"
                        alt="ahle hadith"
                      />
                    </div>
                    <div class="carousel-item ">
                      <img
                        src={QuranHadith1Urdu}
                        className="ayah"
                        alt="salafi"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        className="ayah"
                        src={QuranHadith1English}
                        alt="salafi"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={QuranHadith2Arabic}
                        className="ayah"
                        alt="manhaj salaf"
                      />
                    </div>
                    <div class="carousel-item ">
                      <img
                        src={QuranHadith2Urdu}
                        className="ayah"
                        alt="salafi"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        className="ayah"
                        src={QuranHadith2English}
                        alt="salafi"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-md-6 col-xs-12 col-sm-5 d-flex justify-content-start d-sm-flex justify-content-center">
                <div>
                  <img
                    className="img-fluid scholar"
                    src={SheikhName}
                    alt="zafar ul hasan madani"
                  />
                </div>
                <hr />
              </div>
            </div>
          </div>

          <nav class="navbar navbar-expand-lg navbar-color">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i
                className="fa fa-bars"
                style={{
                  color: "#5c4033",
                }}
              >
                &nbsp;Menu
              </i>
            </button>
            <div className="d-flex d-block flex-row mx-auto mx-0">
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/">
                      <a
                        className="nav-link"
                        href="/"
                        title="zafar ul hasan madani"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">
                      <a
                        className="nav-link"
                        href="/lecture-schedule"
                        title="zafar ul hasan madani"
                      >
                        Schedule
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/lectures">
                      <a
                        className="nav-link"
                        href="/lectures"
                        title="zafar ul hasan madani"
                      >
                        Duroos
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/comingsoon">
                      <a
                        className="nav-link"
                        href="/books"
                        title="zafar ul hasan madani"
                      >
                        Books
                      </a>
                    </Link>
                  </li>

                  <Link to="/about">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/about"
                        title="zafar ul hasan madani"
                      >
                        About Shaikh
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}
