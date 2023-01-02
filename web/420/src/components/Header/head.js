import React from "react";
import "./head.css";

import Banner from "../../Images/BanerTest1.jpg";
import Logo from "../../Images/logo.png";

function bannerT(props) {
  var Tab = 1;
  return {
    Tab,
    bender: (
      <div class="HeadT">
        <div class="ButtonBar">
          <button
            onClick={() => {
              Tab = 1;
              console.log(Tab);
            }}
          >
            <img src={Logo} id="banner" />
          </button>
          <div class="Bar"></div>
          <button
            onClick={() => {
              Tab = 2;
              console.log(Tab);
            }}
          >
            Calendar
          </button>
          <div class="Bar">
            <p></p>
          </div>
          <button
            onClick={() => {
              Tab = 3;
            }}
          >
            Info
          </button>
          <div class="Bar">
            <p></p>
          </div>
          <button
            onClick={() => {
              Tab = 3;
            }}
          >
            Galeria
          </button>
          <div class="Bar">
            <p></p>
          </div>
          <button
            onClick={() => {
              Tab = 3;
            }}
          >
            Mafia
          </button>
        </div>
        <div class="ImDiv">
          <img src={Banner} id="banner" />
        </div>
      </div>
    ),
  };
}

export default bannerT;
