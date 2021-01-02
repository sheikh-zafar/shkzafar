import React, { Component } from "react";

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
                    <div class="card-header">
                      {qurantafseer.arabictitle}
                      <br />
                      <p className="lead">{qurantafseer.englishtitle}</p>
                    </div>
                    <div class="card-body">
                      <p class="card-text" style={{ fontSize: "20px" }}>
                        <i className="fa fa-map-marker" aria-hidden="true">
                          {qurantafseer.masjid}
                        </i>
                      </p>
                      <div className="row">
                        <div className="col">
                          <a
                            href={qurantafseer.archive}
                            className="btn btn btn-lg btn-outline-dark"
                            target="_newtab"
                            style={{
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
                            href={qurantafseer.drive}
                            target="_newtab"
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
                    <div class="card-footer text-muted">2 days ago</div>
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
