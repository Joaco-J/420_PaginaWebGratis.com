import React from "react";
import "./Calendars.css";

import { Link } from "react-router-dom";

const Fechas = {
  enero: {
    Cuba1: 12,
    LA_super_regata: 15,
  },
  Diciembre: {
    Siy: "12",
    Cuba: "14",
  },
};
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Claendario de Campeonatos</h1>
        {Object.keys(Fechas).map(function (key, index) {
          return <Display month={key} champ={Fechas[key]} />;
        })}
      </div>
    );
  }
}

function Display(props) {
  return (
    <div key={props.month}>
      <h1>{props.month}</h1>
      {Object.keys(props.champ).map(function (key, index) {
        return (
          <div key={key} class="Fechas">
            <h3>{props.champ[key]}</h3>
            <h2>{key}</h2>
          </div>
        );
      })}
    </div>
  );
}
export default Calendar;
