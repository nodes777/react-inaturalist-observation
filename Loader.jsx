import React, { Component } from "react";

import "./css/loader.css";
class Loader extends Component {
  render() {
    return (
      <div aria-label="loading.." className="animalContainer">
        <div className="face">
          <div className="leftEar" />
          <div className="rightEar" />
          <div className="leftEye" />
          <div className="rightEye" />
          <div className="nose" />
          <div className="tongue" />
        </div>
      </div>
    );
  }
}

export default Loader;
