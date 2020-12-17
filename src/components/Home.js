import React, { Component,useState } from 'react';
import Navbar from "./Navbar";
import Calendar from 'react-calendar';


export default class Home extends Component {
  
  render() {
    
    return (
      
      <div>
        <section className="heading-section">
      <div className="container d-flex justify-content-center">
        <div><h1 className="heading-name">فضيلة الشيخ ظفر الحسن مدني حفظه الله</h1></div>
      <hr/>
      </div>
      <div className="text-center mt-0">
      <p className="mt-0">SHAIKH ZAFAR UL HASAN MADANI</p>
      </div>
      
          <Navbar/>
      </section>
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-1">
                <div className="sticky-top" style={{ top: "2vh" }}>
                  <div className="container-fluid" id="fixed">
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fa fa-2x fa-google"
                        style={{ color: "#de5246" }}
                        aria-hidden="true"
                      ></i>
                    </a>
                    <br />
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fa fa-2x fa-facebook-square"
                        style={{ color: `#4867AA` }}
                        aria-hidden="true"
                      ></i>
                    </a>
                    <br />
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fa fa-2x fa-twitter-square"
                        style={{ color: "#1DA1F2" }}
                        aria-hidden="true"
                      ></i>
                    </a>
                    <br />
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fa fa-2x fa-linkedin-square"
                        style={{ color: "#1DA1F2" }}
                        aria-hidden="true"
                      ></i>
                    </a>
                    <br />
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fa fa-2x fa-instagram"
                        style={{ color: "#813db4" }}
                        aria-hidden="true"
                      ></i>
                    </a>
                    <br />
                  </div>
                </div>
              </div>
          <div className="col-md-11">
          <section className="banner-section">
      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src="..." className="d-block w-100" alt="..." height="400px" width="100%"/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="..." className="d-block w-100" alt="..." height="400px" width="100%"/>
    </div>
    <div class="carousel-item">
      <img src="..." className="d-block w-100" alt="..." height="400px" width="100%"/>
    </div>
  </div>
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
</div>
      </section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">

          </div>
          <div className="col-md-9">

          </div>
          </div>
          </div>

      
        
      </div>
    )
  }
}
