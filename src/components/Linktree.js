import React, { Component } from 'react';
import logo from '../img/icon.jpeg';
import Footer from './footer';
import {Link} from "react-router-dom";

export default class Linktree extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center pt-5 pt-sm-2">
          <div className="pt-5">
            <div className="text-center">
              <img
                src={logo}
                className="rounded-circle border"
                alt="zafar"
                height={80}
                width={80}
              />
            </div>
            <div>
              <div className="py-3">
                <a
                  href="https://zafarulhasan.com"
                  target="_blank"
                  rel="noreferrer"
                  alt="zafarulhasan madani"
                >
                  <div className="col linktree-bg text-center">Website</div>
                </a>
              </div>
              <div className="py-3">
                <a
                  href="https://www.youtube.com/zafarulhasan"
                  target="_blank"
                  rel="noreferrer"
                  alt="zafarulhasan madani"
                >
                  <div className="col linktree-bg text-center">Youtube</div>
                </a>
              </div>
              <div className="py-3">
                <a
                  href="https://www.facebook.com/zafarulhasan.official/"
                  target="_blank"
                  rel="noreferrer"
                  alt="zafarulhasan madani"
                >
                  <div className="col linktree-bg text-center">Facebook</div>
                </a>
              </div>

              <div className="py-3 ">
                <a
                  href="https://www.instagram.com/zafarulhasan.official/"
                  target="_blank"
                  rel="noreferrer"
                  alt="zafarulhasan madani"
                >
                  <div className="col linktree-bg text-center">Instagram</div>
                </a>
              </div>

              <div className="py-3">
                <a
                  href="https://mixlr.com/zafarulhasan"
                  target="_blank"
                  rel="noreferrer"
                  alt="zafarulhasan madani"
                >
                  <div className="col linktree-bg text-center">Mixlr</div>
                </a>
              </div>
              <div className="py-3">
                <a
                  href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1"
                  target="_blank"
                  rel="noreferrer"
                  alt="zafarulhasan madani"
                >
                  <div className="col linktree-bg text-center">Calendar</div>
                </a>
              </div>

              <div className="py-3">
                <Link
                  to="/sheikh-zafar-ul-hasan-madani-links"
                  target="_blank"
                  rel="noreferrer"
                  alt="zafarulhasan madani"
                >
                  <div className="col linktree-bg text-center">Updates</div>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
