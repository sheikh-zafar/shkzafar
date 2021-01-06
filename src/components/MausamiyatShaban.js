import React, { Component } from "react";

export default class MausamiyatShaban extends Component {
  render() {
    return this.props.mausamiyatshaban.map((shaban) => {
      return (
        <div>
          <section className="embed-section">
            <div className="container d-flex justify-content-center">
              <div className="row text-center">
                <div class="card text-center">
                  <div class="card-header">{shaban.year}</div>
                  <div class="card-body">
                    <h2 class="card-title" style={{ color: "#2e856e" }}>
                      {shaban.arabicyear}
                    </h2>
                    <div className="row">
                      <div className="col">
                        <a
                          href={shaban.archive}
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
                          href={shaban.drive}
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
