/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import 'react-calendar/dist/Calendar.css';
import bam2 from '../img/bulugh.jpg';
import shamail2 from '../img/shamail2.jpg';
import sharhsunnah3 from '../img/sharhsunnah3.jpg';
import mosque from '../img/mosque.jpg';
import Covid from '../img/covid.jpeg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sunday from '../img/home_banner/Sunday.jpg';
import monday from '../img/home_banner/Monday.jpg';
import Tuesday from '../img/home_banner/Tuesday.jpg';
import wednesday from '../img/home_banner/Wednesday.jpg';
import Thursday from '../img/home_banner/Thursday.jpg';

export default class Home extends Component {
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
        {/*Banner section*/}
        <div className="carousel-section my-0 w-100">
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
                  className=" image-fluid img-fld"
                  alt="ahle hadith"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={monday}
                  className="image-fluid img-fld"
                  alt="zafar ul hasan madani"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Tuesday}
                  className="image-fluid img-fld"
                  alt="surah baqarah"
                />
              </div>
              <div className="carousel-item ">
                <img
                  src={wednesday}
                  className="image-fluid img-fld"
                  alt="zafar ul hasan madani"
                />
              </div>
              <div className="carousel-item ">
                <img
                  src={Thursday}
                  className="image-fluid img-fld"
                  alt="zafar ul hasan madani"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
        {/*Mixlr Live & Calendar */}
        <div className="container pt-3">
          <div className="row g-1">
            <div className="col-lg-7 col-sm-7 col-md-7">
              <iframe
                title="ahle hadith"
                src="https://calendar.google.com/calendar/embed?height=250&amp;wkst=1&amp;bgcolor=%232e856e&amp;ctz=Asia%2FDubai&amp;src=M2I4cG9vczFic2lwdGhnYnA5NWhjYnZuaTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;mode=AGENDA"
                width="100%"
                height="100%"
                className="rounded border-white shadow-lg"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
            <div className="col-lg-5 col-sm-5 col-md-5">
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
          </div>
        </div>

        {/* List of all Links */}
        <div className="container shadow-lg mt-3 bg">
          <div className="row pt-5 justify-content-center">
            <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 col-12 d-flex justify-content-start d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center">
              <div>
                <a
                  href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#0c3823',
                    color: 'white',
                  }}
                  className="btn btn-lg"
                >
                  <i class="fa fa-calendar" aria-hidden="true"></i> Calendar
                </a>
                <p className="lead mt-3" style={{ color: '#5c4033' }}>
                  Add dars to Your calendar
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 col-12 d-flex justify-content-start d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center">
              <div>
                <a
                  href="https://mixlr.com/zafarulhasan/showreel/"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lg btn-outline-dark Social-link-btn"
                >
                  <i class="fa fa-headphones" aria-hidden="true">
                    {' '}
                  </i>
                  Mixlr Showreel
                </a>
                <p className="lead mt-3" style={{ color: '#5c4033' }}>
                  Catch up on missed lectures
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 col-12 d-flex justify-content-start d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center">
              <div>
                <a
                  href="https://www.youtube.com/channel/UC2zD7wY_3TCGCyA9Cy_Nu9w"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lg btn-outline-dark Social-link-btn"
                >
                  <i class="fa fa-youtube" aria-hidden="true"></i>YouTube
                </a>
                <p className="lead mt-3" style={{ color: '#5c4033' }}>
                  Watch Videos
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 col-12 d-flex justify-content-start d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-xl-flex justify-content-xl-center">
              <div>
                <Link
                  to="/links"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lg btn-outline-dark Social-link-btn"
                >
                  <i class="fa fa-telegram" aria-hidden="true"></i> Get Updates
                </Link>
                <p className="lead mt-3" style={{ color: '#5c4033' }}>
                  Follow Sheikh Zafar <br />
                  ul Hasan Madani
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Banner1*/}
        <section className="mosque">
          <div className="container ">
            <div className="row ">
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={mosque}
                      alt="salaf"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className=" container text-center pt-4">
                  <div className="row justify-content-center">
                    <h5 className="display-title">Jumu'ah Khutbah</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2021-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550"
                        title="ahle hadith"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/folders/1al-gkHcSA5yDjFUrjoXRABxoEg5v8FbF"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=-Zy5GaMI2_U&list=PLmZP1KIsC-hmuVCpduAT3dMDd-kZG6l4f"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={Covid}
                      alt="manhaj"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Covid-19 Lectures</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/corona-virus-covid-19-lectures-zafarulhasan-madani&playlist=1&list_height=550"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/folders/1Zc_fkwZOBT74_wjYolbEPPzucJHA7ewJ"
                        title="salaf"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=2iinT78L7Jo&list=PLmZP1KIsC-hnPUPMq7dyV3r8KVP-0G9Vi"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={sharhsunnah3}
                      alt="salaf"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Sharh as-Sunnah</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/sharh-as-sunnah-barbaharee-zafarulhasan-madani&playlist=1&list_height=550"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1FHmnB17RfmCYfZdjSpuyQ6XCt1zELR-o"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=A_GfTdyV0Y0&list=PLmZP1KIsC-hnmXQn8oulAyQDd3l8xjyDo"
                        title="quran and sunnah"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div className="container py-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={bam2}
                      alt="fiqh"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Bulugh Al Maram</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/sharh-bulugh-al-maram-zafarulhasan-madani&playlist=1&list_height=550"
                        title="fiqh"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1msQrFTXsWmG2M76nb373wHtJFeFgl85Y"
                        title="fiqh"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=uWYV4PLluxw&list=PLmZP1KIsC-hltNDJamXol6XA04VzJKIng"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 displayimg  d-flex justify-content-center">
                    <img
                      src={shamail2}
                      alt="salaf"
                      className="img-responsive displayimg"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Shama'il at Tirmidhi</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <Link
                        to="/comingsoon"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </Link>
                    </div>
                    <div className="col">
                      <Link
                        to="/comingsoon"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </Link>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=L1HK1mwyLbI&list=PLmZP1KIsC-hk_6GGFntSM-IwahZs_cJb6"
                        title="ahle hadith"
                        className="lead pt-3"
                        style={{
                          fontFamily: 'Fredoka One',
                          fontSize: '20px',
                          color: 'beige',
                          textDecoration: 'underline',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
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
                                style={{ color: '#5c4033' }}
                              >
                                <div> رمضان ١٤٤٣</div>
                                <p className="lead">Ramadan 1443-2022</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="tableBg">
                            <th scope="col" className="tableBg">
                              <Link
                                to="/Ramadan-1443-2022"
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
              {/*Dhul hijjah 1443 */}
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
                                style={{ color: '#5c4033' }}
                              >
                                <div> ذو الحجة ١٤٤٣</div>
                                <p className="lead">Dhul Hijjah 1443-2022</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="tableBg">
                            <th scope="col" className="tableBg">
                              <Link
                                to="/lectures/mausamiyat"
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
                                href="https://www.youtube.com/zafarulhasan"
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
