import React from "react";
import "./Home.css";

import TextBlock from "../TextBlock/TextBlock";
const Info = {
  aa: {
    tittle: "Estamos en construccion",
    p: "Estamos trabajando en la pagina, este es un prototipo, ls mejoras estan en camino",
    img: "https://cdn2.iconfinder.com/data/icons/web-hosting-80/68/38-512.png",
    key: 12,
  },
  2: {
    tittle: "Anualidades 2023",
    p: "Acuerdense de pagar las anualidades de el 2023, El costo es de 10000",
    key: 13,
    img: "https://th.bing.com/th/id/R.0b666d956558cf73dcd3defb43e49ddc?rik=AXkgZBCBYQsutQ&riu=http%3a%2f%2fprincipiodeuncomienzo.files.wordpress.com%2f2012%2f11%2fsocie-dinero.jpg&ehk=Muwcm1mpIrbhEcTKr%2bYSwsxgCeHIJy3PbRF0ruxBeKI%3d&risl=&pid=ImgRaw&r=0",
  },
  3: {
    key: 15,
    tittle: "Siy",
    p: "Se acerca el campeonato",
    img: "https://siy.org.ar/wp-content/uploads/2022/09/siylogo-2023-isologo-809x800.png",
  },
};
class Home extends React.Component {
  state = {};
  render() {
    return (
      <div class="Home">
        <h1 class="hed">Noticias</h1>
        {Object.keys(Info).map(function (key, index) {
          console.log(index);
          return (
            <TextBlock
              key={key}
              tittle={Info[key].tittle}
              p={Info[key].p}
              img={Info[key].img}
              ali={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;
