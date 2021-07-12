import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/playlistItems";
require("dotenv").config();
export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch(
      `${YOUTUBE_API}?&part=snippet&playlistId=PLmZP1KIsC-hnj1U_Y-3fcx4sZ-540NrH8&maxResults=4&key=AIzaSyByttc-8oSHzUvNG_lAwSDhcD8HEZVmaFQ`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    console.log(this.state.items);

    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>List of all Videos in a playlist</h1>
          {this.state.items.map((item)=> {
            console.log(`item`,item);
            const {id, snippet = {}} = item;
            const {title, thumbnails = {}, resourceId} =snippet;
            const {medium={}} = thumbnails;
            return (

              <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_newtab" rel="noopener noreferrer" title="zafrul hasan">
                <ul>
            <li key={id} style={{color:"black"}}>{title}</li>
            <iframe width={medium.width} height={medium.height}
src={`https://www.youtube.com/embed/${resourceId.videoId}`} title="title"/>
          </ul>

              </a>

            );
          })}

        </div>

        <div className="text-center">
          <Footer />
        </div>
      </div>
    );
  }
}
