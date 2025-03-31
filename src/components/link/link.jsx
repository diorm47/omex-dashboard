import React from "react";
import "./link.css";
import { ReactComponent as Icon } from "../../assets/icons/links.svg";
import { NavLink } from "react-router-dom";

function LinkComp({ title, link }) {
  return (
    <NavLink to={link}>
      <div className="link_comp opacity_btn">
        <p>{title}</p>
        <Icon />
      </div>
    </NavLink>
  );
}

export default LinkComp;
