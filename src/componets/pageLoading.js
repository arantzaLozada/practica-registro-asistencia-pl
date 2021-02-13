import React from "react";
import "./styles/pageLoader.css";
function Loader() {
  return (
    <div className="page__loader">
      <div className="lds-hourglass"></div>
    </div>
  );
}

export default Loader;
