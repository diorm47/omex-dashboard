import React from "react";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import ConnectWalletModule from "../connect-wallet/connect-wallet";
import Settings from "../settings/settings";

function NavBar() {
  return (
    <nav>
      <div className="nav_wrapper container">
        <NavLink to="/" className="nav_logo">
          <Logo />
        </NavLink>
        <div className="nav_btns">
          <button className="main_btn trans_btn">BNB Smart chain</button>
          <ConnectWalletModule />
          <Settings />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
