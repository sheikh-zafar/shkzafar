import React, { Component } from "react";
const { YoutubeDataAPI } = require("youtube-v3-api");

export default class utube extends Component {
  render() {
    const API_KEY = "AIzaSyBzhv1rYHDnPr1lp91V6zdrGpUm_U7qjh8";
    const api = new YoutubeDataAPI(API_KEY);

    api.searchAll(API_KEY, "A Jamal", 1).then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    );
    return <div></div>;
  }
}
