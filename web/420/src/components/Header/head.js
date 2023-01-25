import React from "react";
import "./head.css";

import Banner from "../../Images/BanerTest1.jpg";
import Logo from "../../Images/logo.png";

import Home from "../Pages/Home.js";
import Calendars from "../Pages/Calendars.js";
import Docs from "../Pages/Docs.js";

class BannerT extends React.Component {
  state = { Tab: 1 };
  render() {
    return (
      <div class="HeadT">
        <div class="ButtonBar">
          <button
            onClick={() => {
              this.state.Tab = 1;
            }}
          >
            <img src={Logo} id="banner" />
          </button>
          <div class="Bar"></div>
          <button
            onClick={() => {
              var a = 2;
              this.setstate({ Tab: a });
            }}
          >
            Calendar
          </button>
          <div class="Bar">
            <p></p>
          </div>
          <button
            onClick={() => {
              this.state.Tab = 3;
            }}
          >
            Info
          </button>
          <div class="Bar">
            <p></p>
          </div>
          <button
            onClick={() => {
              this.state.Tab = 3;
            }}
          >
            Galeria
          </button>
          <div class="Bar">
            <p></p>
          </div>
          <button
            onClick={() => {
              this.state.Tab = 3;
            }}
          >
            Mafia
          </button>
        </div>
        <div class="ImDiv">
          <img src={Banner} id="banner" />
        </div>

        {this.state.Tab === 1 ? (
          <Home />
        ) : this.state.Tab === 2 ? (
          <Calendars />
        ) : (
          <Docs />
        )}
      </div>
    );
  }
}

export default BannerT;
