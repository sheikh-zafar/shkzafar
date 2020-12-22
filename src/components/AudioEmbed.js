import React, { Component } from "react";
import { audios } from "../data";

export default class AudioEmbed extends Component {
  render() {
    return this.props.iframeAudios.map((iframeAudio) => {
      return (
        <div className="row">
          <div
            className="col-md-4 col-lg-3 col-xs-12 col-sm-10 pt-2"
            key={audios._id}
          >
            <div className="container-fluid">
              <iframe
                title="shaikh zafar class"
                src={iframeAudio.iframe}
              ></iframe>
              {""}
            </div>

            <div className="container-fluid">
              <p style={{ fontSize: "18px", color: "black" }}>
                {iframeAudio._id} {""}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
}
