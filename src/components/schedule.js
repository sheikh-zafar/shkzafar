import React, { Component } from "react";
import Footer from "./footer";
import Navbar from "./Navbar";

export default class schedule extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="aboutheader">Ramadan Schedule</h2>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Timetable */}

        <section className="embed-section">
          <div className="container">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <td>10:15 PM</td>
                  <td>Quran Tafseer Juz 28</td>
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
              </thead>
              <tbody>
              <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan ki Bahaaren</td>
                  <td>Every Saturday</td>

                  <td>
                    <a
                      href="https://goo.gl/maps/yb9JiypfhBAhJdUe7"
                      style={{ color: "blue" }}
                    >
                      <i className="fa fa-map-marker text-success" aria-hidden="true"></i> Masjid Ibrahim khaleel, Al-Raffa, Bur dubai, Dubai
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan ki Bahaaren</td>
                  <td>Every Sunday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/Lh6a1NzyvpTqze2o6"
                      style={{ color: "blue" }}
                    >
                      <i className="fa fa-map-marker text-success" aria-hidden="true"></i> Masjid
                      Ummul Momineen Khadijah Bint Khowailed رضي الله عنها- AL
                      Qouz, Dubai
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan ki Bahaaren</td>
                  <td>Every Monday</td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/fJDQckRGBipgGQu16"
                      style={{ color: "blue", textStyle: "underline" }}
                    >
                      <i className="fa fa-map-marker text-success" aria-hidden="true"></i> Masjid Khadijah Bint Khowailed رضي الله عنها- Al Nahda, Dubai
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">After Asr</th>
                  <td>Ramadan ki Bahaaren</td>
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
                <tr>
                  <td>05:15 PM</td>
                  <td>Mahe Sabr Aagaya</td>
                  <td>
                    All day
                    <br />
                    Saturday - Friday
                    <br />
                  </td>
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
                  <td>After Taraweeh</td>
                  <td>في ختام الشهر</td>
                  <td>
                    Thursday (21-04-2022)
                    <br />
                  </td>
                  <td>
                    <a
                      href="https://goo.gl/maps/sxDQeEeQxewm9i9b8"
                      style={{ color: "blue" }}
                    >
                      <i className="fa fa-map-marker" style={{ color: "green" }} aria-hidden="true"></i> Masjid Ar-Rida
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="aboutheader">Lecture Schedule</h2>
                <hr />
                <p className="text-danger text-center">
                  All of the regular classes scheduled below are on hold till
                  Ramadan
                </p>
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

        <section className="embed-section">
          <div className="container">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">
                    {" "}
                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Day
                  </th>
                  <th scope="col">
                    {" "}
                    <i className="fa fa-sticky-note-o" aria-hidden="true"></i>{" "}
                    Lecture name
                  </th>
                  <th scope="col">
                    {" "}
                    <i className="fa fa-clock-o" aria-hidden="true"></i> Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>
                    Sharh as sunnah of Imam al-Barbaharee (رحمه اللَه)
                    <br />
                    <hr />
                    Buniyadi Uloom (Fiqh 2 - Baab As-salah)
                  </td>
                  <td>
                    After Isha
                    <br />
                    <hr />
                    After Sharh as-sunnah
                  </td>
                </tr>
                <tr>
                  <th scope="row">Monday</th>
                  <td>
                    Shamail al-muhammadiyah by Imam at-Tirmidhi (رحمه اللَه)
                  </td>
                  <td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Tuesday</th>
                  <td>Bulugh al Maram (Kitab az-zakat)</td>
                  <td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>Tafseer surah al-baqarah</td>
                  <td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Thursday</th>
                  <td>Bulugh al-maram(Kitab al-hajj)</td>
                  <td>After Isha</td>
                </tr>

                <tr>
                  <th scope="row">Friday</th>
                  <td>
                    Jumu'ah Khutbah
                    <br />
                    <hr />
                    Aam Duroos (Rahe hidayat)
                  </td>
                  <td>
                    Jumu'ah
                    <br />
                    <hr />
                    After isha
                  </td>
                </tr>

                <tr>
                  <th scope="row">Saturday</th>
                  <td>No Dars</td>
                  <td>-</td>
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
              style={{ backgroundColor: "beige", color: "#5c4033" }}
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
