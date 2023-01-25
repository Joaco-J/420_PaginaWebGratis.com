import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import TextBlock from "../TextBlock/TextBlock";

let navigate = useNavigate;
const routeChange = () => {
  let path = "google.com";
  navigate(path);
};

const Info = {
  aa: {
    tittle: "Reaglas de la clase",

    img: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    key: 12,
    link: "https://www.420sailing.org/content/420-class-rules",
  },
  2: {
    tittle: "Estatuto de la Clase",
    p: "",
    img: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    key: 77,
    link: "https://docs.google.com/document/d/1siCHpnFzAdp5BB7DKOegRdZRLsnmhqvR/edit",
  },
};
class Docs extends React.Component {
  state = {};
  render() {
    return (
      <div class="Home">
        <h1 class="hed">Documentos</h1>
        {Object.keys(Info).map(function (key, index) {
          console.log(index);
          return (
            <TextBlock
              key={key}
              tittle={Info[key].tittle}
              img={Info[key].img}
              ali={index}
              link={Info[key].link}
            />
          );
        })}
        <button onClick={routeChange}>hola</button>
      </div>
    );
  }
}

export default Docs;
