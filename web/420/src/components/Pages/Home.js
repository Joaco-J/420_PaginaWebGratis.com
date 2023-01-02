import React from "react";
import "./Home.css";

import TextBlock from "../TextBlock/TextBlock";
const Info = {
  aa: {
    tittle: "Pelado se baja de 420?",
    p: "lamentablemente no es pelado. Su nombre es una farsa. Por eso se lo veto de la embarcacion 420",
    img: "https://th.bing.com/th/id/R.c5a902536cd01f6f8750468dce7242bb?rik=OXge9BZn8XkS7A&riu=http%3a%2f%2fimages7.memedroid.com%2fimages%2fUPLOADED631%2f5f59510c9e44f.jpeg&ehk=x2glOQ%2bItmkSVmyQ32SGxIWeqe1w6hLrLJ%2fq3SsgXJc%3d&risl=&pid=ImgRaw&r=0",
    key: 12,
  },
  2: {
    tittle: "Tesorero se escapa a uruguay con las Anualidades",
    p: "Inaki Caviclia cbu 43983641076340817 se escapa a uruguay con las anualidades del ano 2015. Esto lo hace con su novia treas ver lo que dice su carta astral.",
    key: 13,
    img: "https://th.bing.com/th/id/R.0b666d956558cf73dcd3defb43e49ddc?rik=AXkgZBCBYQsutQ&riu=http%3a%2f%2fprincipiodeuncomienzo.files.wordpress.com%2f2012%2f11%2fsocie-dinero.jpg&ehk=Muwcm1mpIrbhEcTKr%2bYSwsxgCeHIJy3PbRF0ruxBeKI%3d&risl=&pid=ImgRaw&r=0",
  },
  3: {
    key: 15,
    tittle: "Siy",
    p: "se acercca el capeonato anotate o te matamos.",
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
