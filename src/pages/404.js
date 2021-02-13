import React from "react";
import Error404 from "../images/error404.png";
import "./styles/badges.css";

function Pagina404() {
  return (
    <div className="error404">
      <img className="error404__img" src={Error404} alt="error" />
    </div>
  );
}

export default Pagina404;
