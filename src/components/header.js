import React, { Component } from "react";
import { Link } from "react-router-dom";
import SheikhName from "../img/sheikhname.jpg";

export default class header extends Component {
  render() {
    return (
      <div>
        <section className="heading-section">
          <div className="row">
            <div className="container col-md-3 d-flex justify-content-end">
              <h4>
                سنن الترمذي أبواب العلم عن رسول الله صلى الله عليه وسلم | باب :
                ما جاء في فضل الفقه على العبادة عن أبي سعيد الخدري عن رسول الله
                صلى الله عليه وسلم قال : " لن يشبع المؤمن من خير يسمعه حتى يكون
                منتهاه الجنة ".
              </h4>
            </div>
            <div className="container col-md-3 d-flex justify-content-end">
              <h5>
                فبشر عباد ¤ الذين يستمعون القول فيتّبعون أحسنه ، أولائك الّذين
                هداهم الله وأولائك هم أولوا الألباب ¤ سورة الزمر
              </h5>
            </div>
            <div className=" col-md-4 d-flex justify-content-start">
              <div>
                <img
                  className="img-fluid scholar"
                  src={SheikhName}
                  alt="Sheikh Zafar ul hasan"
                />
              </div>
              <hr />
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
