import React from "react";
import "./Style.css";

function Style(props) {
  let className = props.heading ? "heading" : "";
  return (
    <div>
      <h1 className={`${className},large-font`}>style for react </h1>
    </div>
  );
}

export default Style;
