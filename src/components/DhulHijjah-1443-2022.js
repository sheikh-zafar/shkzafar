import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import RamadanSuccessfulFast from "../img/RamadanSuccessfulFast.jpg";
import RamadanTafseer27 from "../img/RamadanTafseer27.jpg";
import EidAlFitr from "../img/EidAlFitrKhutbah.jpg";
import Eid2021 from "../img/eid2021.jpg";

export default class Ramadan2022 extends Component {
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
              href="https://zafarulhasan.com/#/audio/Ramadan-1443-2022"
            />
            <meta
              name="title"
              content="Zafar ul hasan madani | Ramadan Duroos"
            />
            <meta
              name="description"
              content="Ramadan 1443-2022 - Listen and Download Ramadan duroos by zafar ul hasan madani"
            />
            <meta
              name="keywords"
              content="ramadan, zafar ul hasan madani, ramadan 2021, ramadan 1442"
            />
          </Helmet>
        </div>

        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head"> ذو الحجة ١٤٤٢</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Dhul Hijjah 1443-2022
                </p>
                <hr />
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
