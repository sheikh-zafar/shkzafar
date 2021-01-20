import React, { Component } from "react";
import Navbar from "./Navbar";
import MausamiyatDhulhijjah from "./MausamiyatDhulhijjah";
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
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </section>
        <div class="card-header text-center">شهر ذو الحجة</div>

        <MausamiyatDhulhijjah
          mausamiyatdhulhijjah={this.state.mausamiyatdhulhijjah}
        />

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
