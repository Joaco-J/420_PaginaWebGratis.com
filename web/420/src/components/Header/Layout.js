import { Outlet, Link, useNavigate } from "react-router-dom";

import "./Layout.css";

import Banner from "../../Images/BanerTest1.jpg";
import Logo from "../../Images/logo.png";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="navB">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/Calendario");
          }}
        >
          Calendario
        </button>
        <button
          onClick={() => {
            navigate("/Documentos");
          }}
        >
          Documentos
        </button>
      </div>
      <div class="ImDiv">
        <img src={Banner} id="banner" />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
