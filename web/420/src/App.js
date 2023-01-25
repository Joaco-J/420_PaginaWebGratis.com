//https://coolors.co/palette/000000-0c1821-1b2a41-324a5f-ccc9dc
//https://coolors.co/palette/03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8

import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import BannerT from "./components/Header/head.js";

import Home from "./components/Pages/Home";
import Calendars from "./components/Pages/Calendars.js";
import Docs from "./components/Pages/Docs.js";

import Layout from "./components/Header/Layout";

class App extends React.Component {
  state = {
    Tab: 2,
  };
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Calendario" element={<Calendars />} />
            <Route path="Documentos" element={<Docs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
