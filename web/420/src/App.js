//https://coolors.co/palette/000000-0c1821-1b2a41-324a5f-ccc9dc
//https://coolors.co/palette/03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8

import React from "react";
import "./App.css";
import banner from "./components/Header/head.js";

import Home from "./components/Pages/Home.js";
import Calendars from "./components/Pages/Calendars.js";
import Docs from "./components/Pages/Docs.js";

const { Tab, bender } = banner();

class App extends React.Component {
  state = {
    Tab: 1,
  };
  render() {
    return (
      <div clas="Main">
        {bender}

        {Tab == 1 ? <Home /> : Tab === 2 ? <Calendars /> : <Docs />}
      </div>
    );
  }
}

export default App;
