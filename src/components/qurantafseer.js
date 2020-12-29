import React, { Component } from "react";
import Navbar from "./Navbar";

export default class tadweensunnah extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">قرآن تفسير</h5>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Surah al-Fathiha */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                  <div class="card-header">
                    شرح السنة
                    <br />
                    <p>Surah al-Fathiha</p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2e856e" }}>
                      29th,November,'2016 - 03,December,'2016
                    </h5>
                    <p class="card-text" style={{ fontSize: "20px" }}>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        Masjid Abdur Rahman Al-khas
                      </i>
                    </p>
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            width: "170px",
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1FHmnB17RfmCYfZdjSpuyQ6XCt1zELR-o"
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            width: "170px",
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
