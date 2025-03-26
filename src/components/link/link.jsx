import React from "react";
import "./link.css";
import { ReactComponent as Icon } from "../../assets/icons/links.svg";

function LinkComp({title}) {
  return (
    <a href="#">
      <div className="link_comp">
        <p>{title}</p>
        <Icon />
      </div>
    </a>
  );
}

export default LinkComp;
