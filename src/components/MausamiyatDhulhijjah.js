import React, { Component } from "react";

export default class MausamiyatDhulhijjah extends Component {
  render() {
    return this.props.mausamiyatdhulhijjah.map((dhulhijjah) => {
      return (
        <div>
          <section className="embed-section">
            <div className="container d-flex justify-content-center">
              <div className="row text-center">
                <div class="card text-center">
                  <div class="card-header">{dhulhijjah.year}</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      {dhulhijjah.arabicyear}
                    </h2>
                    <div className="row">
                      <div className="col">
                        <a
                          href={dhulhijjah.archive}
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
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
                          href={dhulhijjah.drive}
                          target="_blank"
                          rel="noreferrer"
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
          </section>
        </div>
      );
    });
  }
}
