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
import monday from "../img/monday.jpg";
import wednesday from "../img/wednesday.jpg";
import saturday from "../img/saturday.jpg";
import LogoPit from "../img/250.png";

export default class BannerSample extends Component {
  render() {
    return (
      <div>
        {/*Heading name and Navigation bar*/}
        <Navbar />
        <div className="container pb-5 mobileBanner">
          <img src={LogoPit} alt="zafarulhasan.com" />
        </div>
        {/*Banner section*/}
        <div className="container">
          <div className="d-flex justify-content-center mx-auto">
            <div className="carousel-section">
              <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="8000"
              >
                <ol id="myCarousel-indicators" className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="4"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={Sunday}
                      className="rounded w-100"
                      alt="ahle hadith"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={monday}
                      className="rounded w-100"
                      alt="zafar ul hasan madani"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Baqarah}
                      className="rounded w-100"
                      alt="surah baqarah"
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src={wednesday}
                      className="rounded w-100"
                      alt="zafar ul hasan madani"
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src={saturday}
                      className="rounded w-100"
                      alt="zafar ul hasan madani"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Mixlr Live & Calendar */}
        <div className="container pt-3">
          <div className="row g-2">
            <div className="col-lg-7 col-sm-7 col-md-7">
              <div>
                <nobr className="float-left text-lg">UPCOMING CLASSES</nobr>
                <nobr className="float-right">
                  <a
                    className="text-beige"
                    alt="sheikh zafar"
                    href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1"
                  >
                    <u>
                      Add schedule to your google calendar and get notification
                      everyday
                    </u>
                  </a>
                </nobr>
              </div>
              <iframe
                title="ahle hadith"
                src="https://calendar.google.com/calendar/embed?height=250&amp;wkst=1&amp;bgcolor=%232e856e&amp;ctz=Asia%2FDubai&amp;src=M2I4cG9vczFic2lwdGhnYnA5NWhjYnZuaTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;mode=AGENDA"
                width="100%"
                className="rounded border-white calendar-design"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
            <div className="col-lg-5 col-sm-5 col-md-5">
              <div className="pt-3 pb-2">
                <iframe
                  title="zafarulhasan"
                  src="https://mixlr.com/zafarulhasan/embed"
                  className="mixlr rounded border-success"
                  width="100%"
                  scrolling="no"
                  frameborder="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>

              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title font-weight-bolder">
                    <u>فضيلة الشيخ ظفر الحسن مدني حفظه الله</u>
                  </h5>
                  <p className="card-text font-weight-normal">
                    Zafar-ul-Hasan Ahmedullah was born in 1956. He hails from a
                    religious family of eight members from Changhaipur
                    (Pratapgarh), a small town in Uttar Pradesh, India. His
                    father was a farmer and Quran teacher, used to attend
                    lectures of Moulana Ahmedullah Pratapgadhi, Moulana
                    Sanaullah Amritseri and others ulamas. Right from childhood
                    Shaikh Zafar-ul-Hasan was interested in Islam and ...
                  </p>
                  <a
                    href="/about"
                    title="Dhul hijjah"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn btn-lg btn-outline-dark"
                    style={{
                      backgroundColor: "#2e856e",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid my-3 bg">
          <div className="row pt-5 justify-content-center">
            <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center text-center">
              <div>
                <a
                  href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-3x fa-calendar rounded-circle bg-brown text-beige p-3"
                    aria-hidden="true"
                  ></i>
                  <p className="text-dark font-weight-bolder">CALENDAR</p>
                </a>
                <p className="pt-0 text-dark">
                  (Add daily dars to your google calendar)
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center text-center">
              <div>
                <a
                  href="https://mixlr.com/zafarulhasan/showreel/"
                  role="button"
                  target="_blank"
                  className="shadow-lg"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-3x fa-headphones rounded-circle bg-brown shadow-lg text-beige p-3"
                    aria-hidden="true"
                  ></i>
                  <br />
                  <p className="text-dark font-weight-bolder">MIXLR SHOWREEL</p>
                </a>
                <p className="pt-0 text-dark">(Catch up on missed lectures)</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center text-center">
              <div>
                <a
                  href="https://www.youtube.com/channel/UC2zD7wY_3TCGCyA9Cy_Nu9w"
                  role="button"
                  target="_blank"
                  className="shadow-lg"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-3x fa-youtube rounded-circle bg-brown shadow-lg text-beige p-3"
                    aria-hidden="true"
                  ></i>
                  <br />
                  <p className="text-dark font-weight-bolder">YOUTUBE</p>
                </a>
                <p className="pt-0 text-dark">
                  (Subscribe channel to get daily updates)
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center text-center">
              <div>
                <Link to="/sheikh-zafar-ul-hasan-madani-links">
                  <a
                    href="https://www.youtube.com/channel/UC2zD7wY_3TCGCyA9Cy_Nu9w"
                    role="button"
                    target="_blank"
                    className="shadow-lg"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-3x fa-link rounded-circle bg-brown shadow-lg text-beige p-3"
                      aria-hidden="true"
                    ></i>
                    <br />
                    <p className="text-dark font-weight-bolder">
                      GET ALL UPDATES
                    </p>
                  </a>
                </Link>
                <p className="pt-0 text-dark">
                  (WhatsApp, Telegram, Youtube, Facebook)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Popular lectures */}
        <div className="container my-3">
          <div className="row pt-5 justify-content-center">
            <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center mt-5 text-center">
              <div className="bg-brown p-3 rounded">
                <img
                  src={mosque}
                  alt="salaf"
                  className="img-responsive rounded popular-img-height"
                />
                <p className="text-monospace font-weight-bolder">
                  Jummu'ah Khutbah
                </p>
                <div className="row justify-content-center">
                  <div className="col text-monospace u">
                    <a
                      href="https://archive.org/embed/2021-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Listen
                    </a>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://drive.google.com/drive/folders/1al-gkHcSA5yDjFUrjoXRABxoEg5v8FbF"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://www.youtube.com/watch?v=-Zy5GaMI2_U&list=PLmZP1KIsC-hmuVCpduAT3dMDd-kZG6l4f"
                      title="quran and sunnah"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center mt-5 text-center">
              <div className="bg-brown p-3 rounded">
                <img
                  src={Covid}
                  alt="manhaj"
                  className="img-responsive rounded popular-img-height"
                />
                <p className="text-monospace font-weight-bolder">
                  Covid-19 Lectures
                </p>
                <div className="row justify-content-center">
                  <div className="col text-monospace u">
                    <a
                      href="https://archive.org/embed/corona-virus-covid-19-lectures-zafarulhasan-madani&playlist=1&list_height=550"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Listen
                    </a>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://drive.google.com/drive/folders/1Zc_fkwZOBT74_wjYolbEPPzucJHA7ewJ"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://www.youtube.com/watch?v=2iinT78L7Jo&list=PLmZP1KIsC-hnPUPMq7dyV3r8KVP-0G9Vi"
                      title="quran and sunnah"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center mt-5 text-center">
              <div className="bg-brown p-3 rounded">
                <img
                  src={sharhsunnah3}
                  alt="salaf"
                  className="img-responsive rounded popular-img-height"
                />
                <p className="text-monospace font-weight-bolder">
                  Sharh as-sunnah
                </p>
                <div className="row justify-content-center">
                  <div className="col text-monospace u">
                    <a
                      href="https://archive.org/embed/sharh-as-sunnah-barbaharee-zafarulhasan-madani&playlist=1&list_height=550"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Listen
                    </a>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://drive.google.com/drive/u/0/folders/1FHmnB17RfmCYfZdjSpuyQ6XCt1zELR-o"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://www.youtube.com/watch?v=A_GfTdyV0Y0&list=PLmZP1KIsC-hnmXQn8oulAyQDd3l8xjyDo"
                      title="quran and sunnah"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 justify-content-center">
            <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center mt-5 text-center">
              <div className="bg-brown p-3 rounded">
                <img
                  src={bam2}
                  alt="salaf"
                  className="img-responsive rounded popular-img-height"
                />
                <p className="text-monospace font-weight-bolder">
                  Bulugh al-maram
                </p>
                <div className="row justify-content-center">
                  <div className="col text-monospace u">
                    <a
                      href="https://archive.org/embed/sharh-bulugh-al-maram-zafarulhasan-madani&playlist=1&list_height=550"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Listen
                    </a>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://drive.google.com/drive/u/0/folders/1msQrFTXsWmG2M76nb373wHtJFeFgl85Y"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://www.youtube.com/watch?v=uWYV4PLluxw&list=PLmZP1KIsC-hltNDJamXol6XA04VzJKIng"
                      title="quran and sunnah"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12 col-12 d-flex justify-content-center d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center text-center mt-5">
              <div className="bg-brown p-3 rounded">
                <img
                  src={shamail2}
                  alt="salaf"
                  className="img-responsive rounded popular-img-height"
                />
                <p className="text-monospace font-weight-bolder">
                  Shama'il at Tirmidhi
                </p>
                <div className="row justify-content-center">
                  <div className="col text-monospace u">
                    <Link
                      to="/comingsoon"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Listen
                    </Link>
                  </div>
                  <div className="col text-monospace u">
                    <Link
                      to="/comingsoon"
                      title="zafar ul hasan madani"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Download
                    </Link>
                  </div>
                  <div className="col text-monospace u">
                    <a
                      href="https://www.youtube.com/watch?v=L1HK1mwyLbI&list=PLmZP1KIsC-hk_6GGFntSM-IwahZs_cJb6"
                      title="quran and sunnah"
                      target="_blank"
                      className="text-beige"
                      rel="noreferrer"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Ramadan page & Eid khutbah */}
        <section className="embed-section">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-md-12 col-xs-8 col-sm-7">
                      <table className="table table-bordered tableBg">
                        <thead className="tableBg">
                          <tr className="tableBg">
                            <th scope="col" colspan="2" className="tableBg">
                              <div
                                className="card-header"
                                style={{ color: "#5c4033" }}
                              >
                                <div> رمضان ١٤٤٢</div>
                                <p className="lead">Ramadan 1442-2021</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="tableBg">
                            <th scope="col" className="tableBg">
                              <Link
                                to="/Ramadan-1442-2021"
                                role="button"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-lg btn-outline-dark tableButton"
                              >
                                رمضان <br />
                                Duroos
                              </Link>
                            </th>
                            <th scope="col" className="tableBg">
                              <a
                                href="https://youtu.be/zx0ohzkZfpk"
                                role="button"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn btn-lg btn-outline-dark tableButton"
                              >
                                Khutbah <br />
                                Eid-ul-Fitr
                              </a>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              {/*Dhul hijjah 1442 */}
              <section className="embed-section">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-md-12 col-xs-8 col-sm-7">
                      <table className="table table-bordered tableBg">
                        <thead className="tableBg">
                          <tr className="tableBg">
                            <th scope="col" colspan="2" className="tableBg">
                              <div
                                className="card-header"
                                style={{ color: "#5c4033" }}
                              >
                                <div> ذو الحجة ١٤٤٢</div>
                                <p className="lead">Dhul Hijjah 1442-2021</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="tableBg">
                            <th scope="col" className="tableBg">
                              <Link
                                to="/Dhul-hijjah-1442-2021"
                                role="button"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-lg btn-outline-dark tableButton"
                              >
                                ذو الحجة <br />
                                Duroos
                              </Link>
                            </th>
                            <th scope="col" className="tableBg">
                              <a
                                href="https://www.youtube.com/watch?v=r1_8xjJg16c"
                                role="button"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn btn-lg btn-outline-dark tableButton"
                              >
                                Khutbah <br />
                                Eid-ul-Ad'ha
                              </a>
                            </th>
                          </tr>
                        </tbody>
                      </table>
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
