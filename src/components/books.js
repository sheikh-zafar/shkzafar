import React, { Component } from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

export default class books extends Component {
  render() {
    return (
      <div>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
            <link rel="canonical" href="https://zafarulhasan.com/#/books" />
            <meta
              name="description"
              content="Books Authored by zafar ul hasan madani"
            />
          </Helmet>
        </div>
        <Navbar />
        <h1>Books</h1>
      </div>
    );
  }
}
