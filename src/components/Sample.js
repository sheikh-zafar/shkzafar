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
        <div className="text-center">
          <Footer />
        </div>
      </div>
    );
  }
}
