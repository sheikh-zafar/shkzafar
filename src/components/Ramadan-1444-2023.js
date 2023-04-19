import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import RamadanSuccessfulFast from '../img/RamadanSuccessfulFast.jpg';
import RamadanTafseer27 from '../img/RamadanTafseer27.jpg';
import EidAlFitr from '../img/EidAlFitrKhutbah.jpg';
import Eid2021 from '../img/eid2021.jpg';

export default class Ramadan2023 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*Title */}
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" data-react-helmet="true" />
            <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
            <link
              rel="canonical"
              href="https://zafarulhasan.com/#/audio/Ramadan-1444-2023"
            />
            <meta
              name="title"
              content="Zafar ul hasan madani | Ramadan Duroos"
            />
            <meta
              name="description"
              content="Ramadan 1444-2023 - Listen and Download Ramadan duroos by zafar ul hasan madani"
            />
            <meta
              name="keywords"
              content="ramadan, zafar ul hasan madani, ramadan 2023, ramadan 1444"
            />
          </Helmet>
        </div>
        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head"> رمضان ١٤٤٢</h5>
                <p
                  className="lead"
                  style={{ fontFamily: 'Fredoka One', fontSize: '20px' }}
                >
                  Ramadan 1444-2023
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Rounded Eid button */}
        {/*Rounded button links 1*/}
        <section className="embed-section">
          <div className="container-fluid py-3">
            <div className="row text-center ">
              <div className="col-md-12 d-flex justify-content-center">
                <a
                  href="https://youtu.be/zx0ohzkZfpk"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="manhaj"
                >
                  <div className="rounded-links rounded-circle">
                    <img
                      src={Eid2021}
                      className="img-fluid rounded-circle"
                      alt="ahle hadith"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname d-flex justify-content-center">
                      Khutbah Eid-al-Fitr <br />
                      (1444/2023)
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Kamyab Rozedaar*/}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0 pt-2">
                    <div className="pt-2">رمضان قرآن کا مہینہ</div>
                    <p className="lead pt-3">Ramadan The Month of Quran</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="/comingsoon"
                          title="ramadan"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            backgroundColor: '#0c3823',
                            color: 'beige',
                            fontFamily: 'Righteous',
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{' '}
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <Link
                          to="/comingsoon"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: '#0c3823',
                            color: 'beige',
                            fontFamily: 'Righteous',
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{' '}
                          Download
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/watch?v=YbKQHLIPers&list=PLmZP1KIsC-hnucOz-L-ys-o1UIndC-NX_"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: '#0c3823',
                            color: 'beige',
                            fontFamily: 'Righteous',
                          }}
                        >
                          <i class="fa fa-video-camera" aria-hidden="true"></i>{' '}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*٢٧ جزء*/}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header pb-0 pt-2">
                    <div className="pt-2"> جزء ٢٦ </div>
                    <p className="lead pt-3">Juz 26</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="/comingsoon"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            backgroundColor: '#0c3823',
                            color: 'beige',
                            fontFamily: 'Righteous',
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{' '}
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="/comingsoon"
                          title="juz 27 tafseer"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: '#0c3823',
                            color: 'beige',
                            fontFamily: 'Righteous',
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{' '}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/watch?v=Z2BQEixP4v4&list=PLmZP1KIsC-hnP1xGsilQhYGI57hk4CPo1"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: '#0c3823',
                            color: 'beige',
                            fontFamily: 'Righteous',
                          }}
                        >
                          <i class="fa fa-video-camera" aria-hidden="true"></i>{' '}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
