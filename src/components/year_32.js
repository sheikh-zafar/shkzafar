import React, { Component } from "react";

export default class Year_32 extends Component {
  render() {
    return this.props.year1432.map((year32) => {
      return (
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className="d-flex justify-content-start">{year32.month}</div>
            <div className="d-flex justify-content-end">
              <div className="d-flex m-2">
                <a
                  href={year32.archive}
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
              <div className="d-flex m-2">
                <a
                  href={year32.drive}
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
      );
    });
  }
}
