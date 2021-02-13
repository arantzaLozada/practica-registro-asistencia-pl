import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";
import FondoHome from "../images/fondo.png";

function Home() {
  return (
    <div className="home__content">
      <div className="home__content1">
        <h1 className="home__h1">WELCOME</h1>
        <Link className="home__button" to="/badges/">
          Start Now
        </Link>
      </div>
      <div className="home__content2">
        <img className="home__img" src={FondoHome} alt="logo" />
      </div>
    </div>
  );
}

export default Home;
