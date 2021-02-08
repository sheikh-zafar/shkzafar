import React, { Component } from "react";
import Footer from "./footer";
import Navbar from "./Navbar";
var gapi = require("gapi");

var GoogleAuth;
export default class signIn extends Component {
  initClient() {
    gapi.client
      .init({
        apiKey: "AIzaSyDLnvkRa7PW-m5Im-6LOPTvN7ke93hcM5I",
        clientId:
          "49414264815-bmhluep38d16e9qcnhtjmhnc51ubic31.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/drive.metadata.write",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        ],
      })
      .then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.isSignedIn.listen(updateSigninStatus);
      });
    var isAuthorized;
    var currentApiRequest;
    function sendAuthorizedApiRequest(requestDetails) {
      currentApiRequest = requestDetails;
      if (isAuthorized) {
        currentApiRequest = {};
      } else {
        GoogleAuth.signIn();
      }
    }

    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        isAuthorized = true;
        if (currentApiRequest) {
          sendAuthorizedApiRequest(currentApiRequest);
        }
      } else {
        isAuthorized = false;
      }
    }
    var request = gapi.client.drive.about.get({ fields: "user" });

    request.execute(function (response) {
      console.log(response);
    });

    var request = gapi.client.request({
      method: "GET",
      path: "/drive/v3/about",
      params: { fields: "user" },
    });
    request.execute(function (response) {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <iframe
          title="google analytics"
          src="https://www.googletagmanager.com/ns.html?id=GTM-MB2K3JZ"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>

        <button id="sign-in-or-out-button" style={{ marginLeft: "25px" }}>
          Sign In/Authorize
        </button>
        <button
          id="revoke-access-button"
          style={{ display: "none", marginLeft: "25px" }}
        >
          Revoke access
        </button>

        <div
          id="auth-status"
          style={{ display: "inline", paddingLeft: "25px" }}
        ></div>
        <hr />

        <Footer />
      </div>
    );
  }
}
