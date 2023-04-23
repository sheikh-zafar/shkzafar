import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/playlistItems";
require("dotenv").config();
export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch(
      `${YOUTUBE_API}?&part=snippet&playlistId=PLmZP1KIsC-hnj1U_Y-3fcx4sZ-540NrH8&maxResults=4&key=AIzaSyByttc-8oSHzUvNG_lAwSDhcD8HEZVmaFQ`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.items.map((item) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              items={4}
              autoPlay="true"
            >
              <div class="item" key={id}>
                <a
                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                  target="_newtab"
                  rel="noopener noreferrer"
                  title="zafrul hasan"
                >
                  <div className="card">
                    <h6 className="card-title">{title}</h6>
                    <iframe
                      className="card-img-top"
                      width={medium.width}
                      height={medium.height}
                      src={`https://www.youtube.com/embed/${resourceId.videoId}`}
                      title="title"
                    />
                  </div>
                </a>
              </div>
            </OwlCarousel>
          );
        })}
        <section className="embed-section">
          <div className="container">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">
                    {' '}
                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Day
                  </th>
                  <th scope="col">
                    {' '}
                    <i
                      className="fa fa-sticky-note-o"
                      aria-hidden="true"
                    ></i>{' '}
                    Lecture name
                  </th>
                  <th scope="col">
                    {' '}
                    <i className="fa fa-clock-o" aria-hidden="true"></i>{' '}
                    Location
                  </th>
                  <th scope="col">
                    {' '}
                    <i className="fa fa-clock-o" aria-hidden="true"></i> Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>Explanation of the Biography Of Prophet Muhammad(ﷺ)</td>
                  <td>After Isha</td>
                  <td>
                    <a
                      href="https://youtube.com/Zafarulhasan"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      Online
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Monday</th>
                  <td>The Explanation of Shama'il Muhammadiyyah</td>
                  <td>After Isha</td>
                  <td>
                    <a
                      href="https://youtube.com/Zafarulhasan"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      Online
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tuesday </th>
                  <td>
                    Breezes of Imaan
                    <br />
                    <hr />
                    Breezes of Imaan
                  </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/oYtgodMLQv6McE2r7"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp; Masjid Khadija bint Khuwailid - Al-Nahda-2 (Click
                      here)
                    </a>
                    <br />
                    <hr />
                    <a
                      href="https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Yusuf Baqar (Click here)
                    </a>
                  </td>
                  <td>
                    After Maghrib
                    <br />
                    <hr />
                    After Isha
                  </td>
                </tr>

                <tr>
                  <th scope="row">Wednesday بروز بدھ</th>
                  <td>Quran Tafseer </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2
                      (Click here)
                    </a>
                  </td>
                  <td>After Isha </td>
                </tr>
                <tr>
                  <th scope="row">Thursday بروز جمعرات</th>
                  <td>Explanation of Bulugh Al Maram </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2
                      (Click here)
                    </a>
                  </td>
                  <td>After Isha </td>
                </tr>

                <tr>
                  <th scope="row">Friday بروز جمعہ</th>
                  <td>Explanation of the book Al-Targheeb wat-Tarheeb</td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2
                      (Click here)
                    </a>
                  </td>
                  <td>After Isha </td>
                </tr>

                <tr>
                  <th scope="row">Saturday</th>
                  <td>Beauty of Islam </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/mscog2WwkqiHVszA8"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al
                      Khaleel) (Click here)
                    </a>
                  </td>
                  <td>After Isha </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center about">
            Add Schedule to your calendar&nbsp;&nbsp;
            <a
              href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lg btn-outline-dark Social-link-btn"
              style={{ backgroundColor: 'beige', color: '#5c4033' }}
            >
              <i className="fa fa-calendar" aria-hidden="true"></i> Calendar
            </a>
          </div>
        </section>
        {/*Timetable */}
        <section className="embed-section">
          <div className="container">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <td>TIMING</td>
                  <td>TOPIC</td>
                  <td>DAY</td>
                  <td>LOCATION</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09:00 PM to 11:00 PM</td>
                  <td>Quran Tafseer Juz 26</td>
                  <td>Sunday - Friday</td>
                  <td>
                    <a
                      href="https://youtube.com/c/ZafarulHasan"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i
                        className="fa fa-youtube"
                        style={{ color: 'red' }}
                        aria-hidden="true"
                      ></i>{' '}
                      Youtube
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>04:45 PM to 06:00 PM</td>
                  <td>Ramadan Wal Qur'an</td>
                  <td>Everday</td>
                  <td>
                    <a
                      href="https://youtube.com/c/ZafarulHasan"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i
                        className="fa fa-youtube"
                        style={{ color: 'red' }}
                        aria-hidden="true"
                      ></i>{' '}
                      Youtube
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan Ki Bahaaren</td>
                  <td>Every Saturday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/Lh6a1NzyvpTqze2o6"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i
                        className="fa fa-map-marker text-success"
                        aria-hidden="true"
                      ></i>{' '}
                      Masjid Ummul Momineen Khadijah Bint Khowailed رضي الله
                      عنها- AL Quoz, Dubai
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan Ki Bahaaren</td>
                  <td>Every Sunday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/mscog2WwkqiHVszA8"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i
                        className="fa fa-map-marker text-success"
                        aria-hidden="true"
                      ></i>{' '}
                      Masjid Masjid Ash-Shaikha Latifa Bint Hamdan - (Al Raffa)
                      (Ibrahim al Khaleel)
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan Ki Bahaaren</td>
                  <td>Every Monday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/d2bN1JwhYV37hqBA9"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i
                        className="fa fa-map-marker text-success"
                        aria-hidden="true"
                      ></i>{' '}
                      Masjid Zarooni Al Kabeer (Al Nahda-2, Dubai)
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan Ki Bahaaren</td>
                  <td>Every Wednesday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/G9aAf3HDM2M4qDgV6"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i
                        className="fa fa-map-marker text-success"
                        aria-hidden="true"
                      ></i>{' '}
                      Masjid Ali Bin Abi Talib رضي الله عنه- Industrial Area 2,
                      Ajman
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan Ki Bahaaren</td>
                  <td>Every Friday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/G9aAf3HDM2M4qDgV6"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i
                        className="fa fa-map-marker text-success"
                        aria-hidden="true"
                      ></i>{' '}
                      Masjid Ali Bin Abi Talibرضي الله عنه- Industrial Area 2,
                      Ajman
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Jummuah Time</th>
                  <td>Jummu'ah Khutbah</td>
                  <td>Every Friday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/am9twe29eBtpGYdAA"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i
                        className="fa fa-map-marker text-success"
                        aria-hidden="true"
                      ></i>{' '}
                      Masjid Bin Darwish, Sharjah
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center about">
            Add Schedule to your calendar&nbsp;&nbsp;
            <a
              href="https://calendar.google.com/calendar/u/2?cid=M2I4cG9vczFic2lwdGhnYnA5NWhjYnZuaTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lg btn-outline-dark Social-link-btn"
              style={{ backgroundColor: 'beige', color: '#5c4033' }}
            >
              <i className="fa fa-calendar" aria-hidden="true"></i> Calendar
            </a>
          </div>
        </section>
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="aboutheader">
                  Ramadan <nobr className="text-red">Special</nobr> Lecture
                  Schedule
                </h2>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <section className="embed-section">
          <div className="container">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <td>TIMING</td>
                  <td>TOPIC</td>
                  <td>DAY</td>
                  <td>LOCATION</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>After Taraweeh</td>
                  <td>Whispers Of Shaytan And Its Legislated Treatment</td>
                  <td>Friday رمضان 2 - 24/3/2023</td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/WyMsQghpz3JK7YVo7"
                      style={{ color: 'blue' }}
                    >
                      <i
                        className="fa fa-map-marker text-success"
                        aria-hidden="true"
                      ></i>{' '}
                      Masjid Ash-Sheikh Zayed رحمه الله, Ajman
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>After Taraweeh</td>
                  <td>
                    Verily in the remembrance of Allah do hearts find rest.
                  </td>
                  <td>Thursday رمضان 8 - 30/3/2023</td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/ZMd6TZ6BXnFhsq779"
                      style={{ color: 'blue' }}
                    >
                      <i
                        className="fa fa-map-marker text-success"
                        aria-hidden="true"
                      ></i>{' '}
                      Masjid Mirdif Al Kabeer, Dubai
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="text-center">
          <Footer />
        </div>
      </div>
    );
  }
}
