import React, { Component } from "react";
import Navbar from "./Navbar";
import { tafseerdata } from "../tafseerdata";
import Tafseer from "./Tafseer";
import Footer from "./footer";
import { Helmet } from "react-helmet";

export default class tadweensunnah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tafseerdata: tafseerdata,
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
              href="https://zafarulhasan.com/#/audio/qurantafseer"
            />
            <meta
              name="title"
              content="Zafar ul hasan madani | Quran tafseer"
            />
            <meta
              name="description"
              content="Quran Tafseer - Listen and Download Quran Tafseer Explanation by zafar ul hasan madani"
            />
          </Helmet>
        </div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">تفسير القرآن</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Tafseerul Qur'an
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <Tafseer tafseer={this.state.tafseerdata} />
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
