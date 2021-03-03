import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Products extends Component {
  render() {
    return this.props.tafseer.map((qurantafseer) => {
      return (
        <div>
          {/*Surah al-Fathiha */}
          <section className="embed-section">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-12 d-flex justify-content-center">
                  <div class="card text-center">
                    <div class="card-header pb-0">
                      {qurantafseer.arabictitle}
                      <p className="lead pt-3">{qurantafseer.englishtitle}</p>
                    </div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col">
                          <a
                            href={qurantafseer.archive}
                            className="btn btn btn-lg btn-outline-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: "#2e856e",
                              color: "beige",
                              fontFamily: "Righteous",
                            }}
                          >
                            <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                            Listen
                          </a>
                        </div>
                        <div className="col">
                          <a
                            href={qurantafseer.drive}
                            target="_blank"
                            rel="noopener noreferrer"
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
                            href={qurantafseer.youtube}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn btn-lg btn-outline-dark"
                            style={{
                              backgroundColor: "#2e856e",
                              color: "beige",
                              fontFamily: "Righteous",
                            }}
                          >
                            <i
                              class="fa fa-youtube-play"
                              aria-hidden="true"
                            ></i>{" "}
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
        </div>
      );
    });
  }
}
