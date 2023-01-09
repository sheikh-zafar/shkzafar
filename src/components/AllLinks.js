import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import Logo from '../img/logo192.png';
import { Helmet } from 'react-helmet';

export default class AllLinks extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" data-react-helmet="true" />
            <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
            <link
              rel="canonical"
              href="https://zafarulhasan.com/#/audio/WhatsAppUpdates"
            />
            <meta
              name="title"
              content="Zafar ul hasan madani | Duroos Updates"
            />
            <meta name="description" content="Get Updates Through WhatsApp" />
            <meta
              name="keywords"
              content="zafar ul hasan madani, duroos updates, updates"
            />
          </Helmet>
        </div>
        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">
                  {' '}
                  Sheikh Zafar ul Hasan Madani Updates
                </h5>
                <p
                  className="lead"
                  style={{ fontFamily: 'Fredoka One', fontSize: '20px' }}
                >
                  Groups
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Round Icons */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <img
                  src={Logo}
                  alt="zafar ul hasan madani"
                  className="img-fluid rounded-circle"
                  style={{ border: '9px solid #5c4033' }}
                />
              </div>
            </div>
          </div>
        </section>
        {/*Whatsapp group 1 */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-md-6 d-flex justify-content-end">
                <a
                  href="https://chat.whatsapp.com/Blmyg0w36Dp0fE92w0NLtD"
                  role="button"
                  title="zafrul hasan madani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn btn-lg btn-outline-dark"
                  style={{
                    width: '170px',
                    backgroundColor: '#5c4033',
                    color: 'beige',
                    fontFamily: 'Righteous',
                  }}
                >
                  <i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp
                  Announcement group
                </a>
              </div>
              <div className="col-md-6 d-flex justify-content-start">
                <a
                  href="https://chat.whatsapp.com/CbIqCENm52dK87wJ5SJNzN"
                  title="salaf"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn btn-lg btn-outline-dark"
                  style={{
                    width: '170px',
                    backgroundColor: '#5c4033',
                    color: 'beige',
                    fontFamily: 'Righteous',
                  }}
                >
                  <i class="fa fa-whatsapp" aria-hidden="true"></i> GROUP 2
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*Telegram and facebook */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-md-6 d-flex justify-content-end">
                <a
                  href="https://t.me/zafarulhasan"
                  title="salaf"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn btn-lg btn-outline-dark"
                  style={{
                    width: '170px',
                    backgroundColor: '#5c4033',
                    color: 'beige',
                    fontFamily: 'Righteous',
                  }}
                >
                  <i class="fa fa-telegram" aria-hidden="true"></i> Telegram
                </a>
              </div>
              <div className="col-md-6 d-flex justify-content-start">
                <a
                  href="https://www.facebook.com/Shaikh-Zafar-Ul-Hasan-Madani-%D8%AD%D9%81%D8%B8%D9%87-%D8%A7%D9%84%D9%84%D9%87-137613959649087/"
                  title="salaf"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn btn-lg btn-outline-dark"
                  style={{
                    width: '170px',
                    backgroundColor: '#5c4033',
                    color: 'beige',
                    fontFamily: 'Righteous',
                  }}
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i> Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Youtube and calendar */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-md-6 d-flex justify-content-end">
                <a
                  href="https://www.youtube.com/c/ZafarulHasan"
                  title="salaf"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn btn-lg btn-outline-dark"
                  style={{
                    width: '170px',
                    backgroundColor: '#5c4033',
                    color: 'beige',
                    fontFamily: 'Righteous',
                  }}
                >
                  <i class="fa fa-youtube" aria-hidden="true"></i> Youtube
                </a>
              </div>
              <div className="col-md-6 d-flex justify-content-start">
                <a
                  href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1"
                  title="salaf"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn btn-lg btn-outline-dark"
                  style={{
                    width: '170px',
                    backgroundColor: '#5c4033',
                    color: 'beige',
                    fontFamily: 'Righteous',
                  }}
                >
                  <i class="fa fa-calendar" aria-hidden="true"></i> Calendar
                </a>
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
