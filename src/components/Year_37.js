import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Year_37 extends Component {
  render() {
    return this.props.year1437.map((year37) => {
      return (
        <div
          id="collapseTen"
          class="accordion-collapse collapse"
          aria-labelledby="headingTen"
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
                {year37.month}
              </div>
              <div className="col-md-4 col-xs-4 col-sm-4">
                <Link
                  to="/comingsoon"
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
                </Link>
              </div>
              <div className="col-md-4 col-xs-4 col-sm-4">
                <a
                  href={year37.drive}
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
