import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
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
                          <Link
                            to="/comingsoon"
                            className="btn btn btn-lg btn-outline-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: "#2e856e",
                              color: "beige",
                              fontFamily: "Righteous",
                            }}
                          >
                            Listen
                          </Link>
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
                            Download
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
