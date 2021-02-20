import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <div class="accordion-body d-flex justify-content-center">
            <div className="row">
              <div
                className="col-md-3 col-xs-3 col-sm-3"
                style={{
                  fontFamily: "Fredoka One",
                  fontSize: "20px",
                  color: "#5c4033",
                }}
              >
                {year27.month}
              </div>
              <div className="col-md-3 col-xs-3 col-sm-3">
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
              <div className="col-md-3 col-xs-3 col-sm-3">
                <a
                  href={year27.drive}
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
              <div className="col-md-3 col-xs-3 col-sm-3">
                <Link
                  to="/comingsoon"
                  className="lead pt-3 paddingVideo"
                  style={{
                    fontFamily: "Fredoka One",
                    fontSize: "20px",
                    color: "#2e856e",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}
