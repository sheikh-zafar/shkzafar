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
              <div class="col-md-12">
                <h2 className="aboutheader">Lecture Schedule</h2>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <div className="container about">
          Lectures of Sheikh Zafarulhasan حفظه الله are held on daily basis and
          it is brodcasted on youtube, mixlr and on zoom by the permission of
          الله عز و جل. Kindly take notes of his schedule and add the schedule
          to your google calendar.
        </div>
        <section className="embed-section">
          <div className="container">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">
                    {" "}
                    <i class="fa fa-calendar-o" aria-hidden="true"></i> Day
                  </th>
                  <th scope="col">
                    {" "}
                    <i class="fa fa-sticky-note-o" aria-hidden="true"></i>{" "}
                    Lecture name
                  </th>
                  <th scope="col">
                    {" "}
                    <i class="fa fa-clock-o" aria-hidden="true"></i> Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>
                    Sharh as sunnah
                    <br />
                    <hr />
                    Arba'aen Nawawi
                  </td>
                  <td>After Isha
                    <br />
                    <hr />
                    After sharh as sunnah</td>
                </tr>
                <tr>
                  <th scope="row">Monday</th>
                  <td>Bulugh al maram</td>
                  <td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Tuesday</th>
                  <td>Tafseer Surah Al-Baqarah</td>
                  <td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>Monday</td>
                  <td>the Bird</td>
                </tr>
                <tr>
                  <th scope="row">Thursday</th>
                  <td>Rahe Hidayat</td>
                  <td>After Isha</td>
                </tr>

                <tr>
                  <th scope="row">Friday</th>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <th scope="row">Saturday</th>
                  <td>Shamail al muhammadiyah</td>
                  <td>After Isha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
