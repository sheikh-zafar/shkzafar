import React, { Component } from "react";

export default class Year_27 extends Component {
  render() {
    return this.props.year1427.map((year27) => {
      return (
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className="d-flex justify-content-center">
              <a
                href={year27.archive}
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
                href={year27.drive}
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
      );
    });
  }
}
