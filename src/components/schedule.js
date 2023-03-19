import React, { Component } from 'react';
import Footer from './footer';
import Navbar from './Navbar';

export default class schedule extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="aboutheader">Lecture Schedule</h2>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <div className="container about">
          Lectures of Sheikh Zafarulhasan حفظه الله are held on daily basis and
          it is brodcasted on youtube, mixlr and on zoom by the permission of
          الله عز و جل. Kindly take a note of his schedule and add the schedule
          to your google calendar.
        </div>
        {/*Timetable */}
        <section className="embed-section">
          <div className="container">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <td>TIMING</td>
                  <td>TOPIC</td>
                  <td>DAY</td>
                  <td>
                    LOCATION
                  </td>
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
                      style={{ color: "blue" }}
                    >
                      <i
                        className="fa fa-youtube"
                        style={{ color: "red" }}
                        aria-hidden="true"
                      ></i>{" "}
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
                      style={{ color: "blue" }}
                    >
                      <i
                        className="fa fa-youtube"
                        style={{ color: "red" }}
                        aria-hidden="true"
                      ></i>{" "}
                      Youtube
                    </a>
                  </td>
                </tr>
              <tr>
                  <th scope="row">04:00 PM to 05:30 PM</th>
                  <td>Rawdat-ua-Saa'im</td>
                  <td>Every Saturday</td>

                  <td>
                  <a
                      href="https://maps.app.goo.gl/Lh6a1NzyvpTqze2o6"
                      style={{ color: "blue" }}
                    >
                      <i className="fa fa-map-marker text-success" aria-hidden="true"></i> Masjid
                      Ummul Momineen Khadijah Bint Khowailed رضي الله عنها- AL
                      Quoz, Dubai
                    </a>
                  </td>
                </tr>
                <tr>
                <th scope="row">04:00 PM to 05:30 PM</th>
                  <td>Rawdat-ua-Saa'im</td>
                  <td>Every Sunday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/mscog2WwkqiHVszA8"
                      style={{ color: "blue" }}
                    >
                      <i className="fa fa-map-marker text-success" aria-hidden="true"></i> Masjid
                      Masjid Ash-Shaikha Latifa Bint Hamdan - (Al Raffa) (Ibrahim al Khaleel)
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">04:00 PM to 05:30 PM</th>
                  <td>Rawdat-ua-Saa'im</td>
                  <td>Every Monday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/d2bN1JwhYV37hqBA9"
                      style={{ color: "blue", textStyle: "underline" }}
                    >
                      <i className="fa fa-map-marker text-success" aria-hidden="true"></i> Masjid Zarooni Al Kabeer (Al Nahda-2, Dubai)
                    </a>
                  </td>
                </tr>
                <tr>
                <th scope="row">04:00 PM to 05:30 PM</th>
                <td>Rawdat-ua-Saa'im</td>
                  <td>Every Tuesday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/nbwmrdZbWdeWxbGK6"
                      style={{ color: "blue", textStyle: "underline" }}
                    >
                      <i className="fa fa-map-marker text-success" aria-hidden="true"></i> Masjid
                      Yousf Baqer- Hor Al Anz, Dubai
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




        <Footer />
      </div>
    );
  }
}
