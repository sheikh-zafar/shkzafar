import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { audios } from "../data";
import { Link } from "react-router-dom";
import Jummuah from "../img/jummaicon.jpg";
import tafseer from "../img/tafseericon.jpg";
import Moon from "../img/moon.jpg";
import Arkan from "../img/arkan.jpg";
import Taweel from "../img/taweel.jpeg";
import Mukhtasar from "../img/mukhtasar.jpeg";
import Aam from "../img/aam.jpg";
import SisterSection from "../img/sistersection.jpg";
import AhleHadith from "../img/ahlehadith.jpg";
import { Helmet } from "react-helmet";

export default class audio extends Component {
  handleClick() {
    this.props.history.push("shkzafar/audio/tadweensunnah");
  }
  constructor(props) {
    super(props);
    this.state = {
      iframe: audios,
    };
  }

  render() {
    return (
      <div>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
            <link rel="canonical" href="https://zafarulhasan.com/#/audio" />
            <meta
              name="description"
              content="Duroos of Sheikh zafar ul hasan madani"
            />
            <meta
              name="keywords"
              content="zafar ul hasan madani, salafi , zafar, madani, urdu bayan, bayan, about zafar ul hasan madani, About sheikh zafar"
            />
          </Helmet>
        </div>
        <Navbar />
        {/*Rounded button links 1*/}
        <section className="embed-section">
          <div className="container-fluid py-3">
            <div className="row text-center ">
              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginJummahPhone">
                <Link to="/audio/jummuah" title="manhaj">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Jummuah}
                      className="img-fluid rounded-circle"
                      alt="ahle hadith"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Jumu'ah Khutbah</h3>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginTafseerPhone">
                <Link to="/lectures/qurantafseer" title="hadeeth">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={tafseer}
                      className="img-fluid rounded-circle"
                      alt="quran"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Quran Tafseer</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginArkanPhone">
                <Link
                  to="/comingsoon"
                  title="pillars of islam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Arkan}
                      className="img-fluid rounded-circle"
                      alt="Pillars of Islam"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Arkan al-Islam</h3>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-6 d-flex justify-content-end d-sm-flex justify-content-center ">
                <Link to="/lectures/mausamiyat" title="pillars of islam">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Moon}
                      className="img-fluid rounded-circle"
                      alt="zafar ul hasan madani"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Mausamiat</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*Rounded button links 2 */}
        <section className="embed-section">
          <div className="container py-3">
            <div className="row text-center">
              <div className="col-md-5 col-sm-12 col-xs-12 d-flex justify-content-center marginTaweelPhone">
                <Link to="/lectures/taweel" title="islam">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Taweel}
                      className="img-fluid rounded-circle"
                      alt="islam"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">
                      {" "}
                      Dawrah ilmiyyah
                      <br />
                      <p className="lead">(Taweel)</p>
                    </h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginMukhtasarPhone">
                <Link to="/lectures/muktasar" title="quran">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Mukhtasar}
                      className="img-fluid rounded-circle"
                      alt="manhaj"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">
                      Dawrah ilmiyyah
                      <br />
                      <p className="lead">(Mukhtasar)</p>
                    </h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginAamPhone">
                <Link to="/lectures/aam" title="ahle hadith">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Aam}
                      className="img-fluid rounded-circle"
                      alt="zafar ul hasan madani"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Aam Duroos</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*Rounded button links 2*/}
        <section className="embed-section">
          <div className="container-fluid py-3">
            <div className="row text-center ">
              <div className="col-md-5 col-sm-12 col-xs-12 d-md-flex justify-content-end marginSisterPhone">
                <Link to="/lectures/sisters-section" title="ahle hadith">
                  <div className="rounded-links rounded-circle">
                    <img
                      src={SisterSection}
                      className="img-fluid rounded-circle"
                      alt="manhaj"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">Sister's Section</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-7 col-sm-12 col-xs-12 d-flex justify-content-center marginAhlulPhone">
                <Link
                  to="/comingsoon"
                  title="ahle hadees"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-links rounded-circle">
                    <img
                      src={AhleHadith}
                      className="img-fluid rounded-circle"
                      alt="ahle hadith"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname">
                      Tareeq Ahlul <br />
                      Hadith
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*audio cards */}
        <section className="embed-section"></section>
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
