import React from "react";
import "./styles/style.css";

function PageError(props) {
  return <div className="page__error">{props.error.message}</div>;
}

export default PageError;
