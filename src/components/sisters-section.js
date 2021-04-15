import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default class sistersection extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head"> النّساء</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Sisters Section
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Sister section card */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center pt-2">
                  <div class="card-header pb-0">
                    <div className="pt-2">النّساء</div>
                    <p className="lead pt-3">Sister's section</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col">
                        <Link
                          to="/comingsoon"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                          Listen
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/folders/15fDSK6rNln1xfP5hPi13jsP4vFsc1LwU"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/watch?v=VVTVdB6Rp7Q&list=PLmZP1KIsC-hnxbVOity71qHq_YqO6Ui5G"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i class="fa fa-video-camera" aria-hidden="true"></i>{" "}
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
