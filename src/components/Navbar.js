import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-color center">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundColor: "beige",
                border: "black",
              }}
            ></span>
          </button>
          <div className="d-flex d-block flex-row mx-auto mx-0">
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Audios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Books
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Shaikh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
