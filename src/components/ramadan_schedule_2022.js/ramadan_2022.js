import React, { Component } from 'react'

export default class Ramadan2022 extends Component {
  render() {
    return (
      <div>

        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="aboutheader">Eid Al Fitr 2022 - 1443</h2>
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
                  <td>05:58 AM</td>
                  <td>Eid al Fitr 2022 Khutbah</td>
                  <td>Shawwal 01, '1443</td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/JUmUYJwGCzQWPbgn6"
                      style={{ color: "blue" }}
                    >
                      <i className="fa fa-map-marker text-success" aria-hidden="true"></i>{" "}
                      Sharjah Musalla (Sharjah Eidgah)
                    </a>
                  </td>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </section>
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
      </div>
    )
  }
}
