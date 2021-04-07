import React, { Component } from "react";
import { Link } from "react-router-dom";
import SheikhName from "../img/sheikhname.jpg";
import QuranHadith1Arabic from "../img/Quran&Hadith1Arabic.jpg";
import QuranHadith1Urdu from "../img/Quran&Hadith1Urdu.jpg";
import QuranHadith1English from "../img/Quran&Hadith1English.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section className="heading-section">
          <div className="row">
            <div className="container">
              <div className="col-md-7 pt-3">
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
                        alt="salaf scholar"
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
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon ayah"
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
                      class="carousel-control-next-icon ayah"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className=" col-md-5 d-flex justify-content-start">
                <div>
                  <img
                    className="img-fluid scholar"
                    src={SheikhName}
                    alt="zafarul hasan madani"
                  />
                </div>
                <hr />
              </div>
            </div>
          </div>

          <nav class="navbar navbar-expand-lg navbar-color center">
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
                className="fa fa-2x fa-bars"
                style={{
                  border: "black",
                }}
              ></i>
            </button>
            <div className="d-flex d-block flex-row mx-auto mx-0">
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/audio">
                      <a className="nav-link" href="/audio">
                        Duroos
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/comingsoon">
                      <a className="nav-link" href="/books">
                        Books
                      </a>
                    </Link>
                  </li>

                  <Link to="/about">
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About Shaikh
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
