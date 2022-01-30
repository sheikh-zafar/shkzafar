/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "react-calendar/dist/Calendar.css";
import bam2 from "../img/bulugh.jpg";
import shamail2 from "../img/shamail2.jpg";
import sharhsunnah3 from "../img/sharhsunnah3.jpg";
import mosque from "../img/mosque.jpg";
import Covid from "../img/covid.jpeg";
import { Link } from "react-router-dom";
import Baqarah from "../img/baqarah.jpg";
import Sunday from "../img/sunday.jpg";
import { Helmet } from "react-helmet";
import monday from "../img/monday.jpg";
import wednesday from "../img/wednesday.jpg";
import saturday from "../img/saturday.jpg";
import LogoPit from "../img/250.png";

export default class BannerSample extends Component {
  render() {
    return (
      <div>
        <div id="menu"></div>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
            <link rel="canonical" href="https://zafarulhasan.com/#/" />
            <meta
              name="title"
              content="Zafarulhasan.com | Listen and Download Lectures by Sheikh Zafar ul hasan madani"
            />
            <meta
              name="description"
              content="Zafarulhasan.com - Bulugh-al-maram | Buniyadi uloom - Fiqh | Sharh as sunnah - Aqeedah | Tafseer Surah al Baqarah | As shamail al-muhammadiyah | Shamail at-Tirmidhi | Covid19 lectures | Tadween as sunnah | Jummuah khutbah | Eid-ul-fitr | Riyad as saliheen | Kitab at-Tawheed | Usool al-Thalatha | Muharram | Safar | Ramadan | Rajab | Dhul hijjah | Shaban"
            />
            <meta
              name="keywords"
              content="urdu tafseer, urdu bayan, Dil Ke Aamal, Azmate sahaba, mowsamiyyat shaban, mowsamiyyat ramadan, Tafseer surah baqarah, tadween as sunnah,isteqamat, "
            />
          </Helmet>
        </div>
        {/*Heading name and Navigation bar*/}
        <Navbar />
        <div className="container pb-5 mobileBanner">
          <img src={LogoPit} alt="zafarulhasan.com"/>
        </div>

        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
