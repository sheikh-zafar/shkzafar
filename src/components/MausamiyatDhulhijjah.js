import React, { Component } from "react";

export default class MausamiyatDhulhijjah extends Component {
  render() {
    return this.props.mausamiyatdhulhijjah.map((dhulhijjah) => {
      return (
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className="d-flex justify-content-end">
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
            <div className="float-right"></div>
          </div>
        </div>
      );
    });
  }
}
