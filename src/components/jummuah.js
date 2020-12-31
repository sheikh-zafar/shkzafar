import React, { Component } from "react";
import bamslide from "../img/bamslide.jpg";
import Navbar from "./Navbar";

export default class jummuah extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div class="col-md-12">
                <h5 className="audio-display-head">جمعة خطبة</h5>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Background */}
        <div
          className="container pt-3 rounded"
          style={{ backgroundColor: "#5c4033", border: "1px solid beige" }}
        >
          <img
            src={bamslide}
            className="img-fluid header-img"
            alt="Jumu'ah Khutbah"
          />
          <div
            class="col-md-12 caption d-flex justify-content-between
            "
            style={{ color: "beige" }}
          >
            <div className="p-2">
              <i className="fa fa-map-marker " aria-hidden="true">
                Masjid Abdur Rahman Al-khas
              </i>{" "}
            </div>
            <div className="p-2">
              <i class="fa fa-youtube-play mr-auto" aria-hidden="true">
                YouTube
              </i>
            </div>
          </div>
        </div>
        <div className="container  pt-3">
          <div className="row ">
            <iframe
              title="sheikh-zafar"
              src="https://archive.org/embed/2020-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=215"
              className="w-100"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        {/*2010*/}
        <section className="embed-section">
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div class="card text-center">
                <div class="card-header">2020</div>
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#2e856e" }}>
                    ۱٤٤۰ - ۱٤٤۱{" "}
                  </h2>

                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/details/2020-jumuah-khutbah-zafarulhasan-madani"
                        className="btn btn btn-lg btn-outline-dark"
                        target="_newtab"
                        style={{
                          width: "170px",
                          backgroundColor: "#2e856e",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1WGuAmSMs0TVhFniVcLvjxWHZptcysHn7"
                        target="_newtab"
                        className="btn btn btn-lg btn-outline-dark"
                        style={{
                          width: "170px",
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
            </div>
          </div>
        </section>
        {/*2019 */}
        <section className="embed-section"></section>
        {/*2018 */}
        <section className="embed-section"></section>
        {/*2017 */}
        <section className="embed-section"></section>
        {/*2016 */}
        <section className="embed-section"></section>
        {/*2015 */}
        <section className="embed-section"></section>
        {/*2014 */}
        <section className="embed-section"></section>
        {/*2013 */}
        <section className="embed-section"></section>
        {/*2012 */}
        <section className="embed-section"></section>
        {/*2011 */}
        <section className="embed-section"></section>
        {/*2010 */}
        <section className="embed-section"></section>
        {/*2009 */}
        <section className="embed-section"></section>
        {/*2008 */}
        <section className="embed-section"></section>
        {/*2008 */}
        <section className="embed-section"></section>
      </div>
    );
  }
}
