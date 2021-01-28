import React, { Component } from "react";
import Navbar from "./Navbar";
import MausamiyatDhulhijjah from "./MausamiyatDhulhijjah";
import Year_27 from "./Year_27";
import { year_1427 } from "../year_1427";
import MausamiyatMuharram from "./MausamiyatMuharram";
import MausamiyatSafar from "./MausamiyatSafar";
import MausamiyatShaban from "./MausamiyatShaban";
import MausamiyatRamadan from "./MausamiyatRamadan";
import { mausamiyatramadan } from "../mausamiyatramadan";
import { mausamiyatmuharram } from "../mausamiyatmuharram";
import { mausamiyatsafar } from "../mausamiyatsafar";
import { mausamiyatshaban } from "../mausamiyatshaban";
import { mausamiyatdhulhijjah } from "../mausamiyatdhulhijjah";
import Footer from "./footer";

class mausamiat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year_1427: year_1427,
      mausamiyatramadan: mausamiyatramadan,
      mausamiyatmuharram: mausamiyatmuharram,
      mausamiyatsafar: mausamiyatsafar,
      mausamiyatshaban: mausamiyatshaban,
      mausamiyatdhulhijjah: mausamiyatdhulhijjah,
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">موساميات</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Mausamiyat
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>

        <section className="embed-section">
          <div className="container">
            <div className="row">
              <div
                class="accordion"
                id="accordionExample"
                style={{ color: "#2e856e" }}
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1441
                    </button>
                    <Year_27 year1427={this.state.year_1427} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="card-header text-center">شهر محرم</div>
        <MausamiyatMuharram
          mausamiyatmuharram={this.state.mausamiyatmuharram}
        />
        <div class="card-header text-center">شهر صفر</div>
        <MausamiyatSafar mausamiyatsafar={this.state.mausamiyatsafar} />
        <div class="card-header text-center">شهر شعبان</div>
        <MausamiyatShaban mausamiyatshaban={this.state.mausamiyatshaban} />
        <div class="card-header text-center">شهر رمضان</div>
        <MausamiyatRamadan mausamiyatramadan={this.state.mausamiyatramadan} />

        {/*Footer section */}
        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

export default mausamiat;
