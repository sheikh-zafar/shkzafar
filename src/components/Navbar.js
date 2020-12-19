import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section className="heading-section">
          <div className="container d-flex justify-content-center">
            <div>
              <h1 className="heading-name">
                فضيلة الشيخ ظفر الحسن مدني حفظه اللّه
              </h1>
            </div>
            <hr />
          </div>
          <div className="text-center mt-0">
            <p className="heading-lead mt-0">SHAIKH ZAFAR UL HASAN MADANI</p>
          </div>
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
                    <a className="nav-link" href="/shkzafar/audio">
                      Audios
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/shkzafar/books">
                      Books
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/shkzafar/about">
                      About Shaikh
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
