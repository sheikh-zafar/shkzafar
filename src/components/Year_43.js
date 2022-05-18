import React, { Component } from "react";

export default class Year_43 extends Component {
  render() {
    return this.props.year1443.map((year43) => {
      return (
        <div
          id="collapseSeventeen"
          class="accordion-collapse collapse"
          aria-labelledby="headingSeventeen"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body d-flex justify-content-center">
            <div className="row">
              <div
                className="col-md-4 col-xs-4 col-sm-4"
                style={{
                  fontFamily: "Fredoka One",
                  fontSize: "20px",
                  color: "#5c4033",
                }}
              >
                {year43.month}
              </div>
              <div className="col-md-4 col-xs-4 col-sm-4">
                <a
                  href={year43.archive}
                  className="lead pt-3"
                  style={{
                    fontFamily: "Fredoka One",
                    fontSize: "20px",
                    color: "#2e856e",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen
                </a>
              </div>
              <div className="col-md-4 col-xs-4 col-sm-4">
                <a
                  href={year43.drive}
                  className="lead pt-3"
                  style={{
                    fontFamily: "Fredoka One",
                    fontSize: "20px",
                    color: "#2e856e",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  rel="noreferrer"
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
