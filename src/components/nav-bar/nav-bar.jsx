import React from "react";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

import ConnectWalletModule from "../connect-wallet/connect-wallet";
import Settings from "../settings/settings";
import SmartChain from "../smart-chain/smart-chain";

function NavBar() {
  return (
    <>
      <nav>
        <div className="nav_wrapper container">
          <NavLink to="/" className="nav_logo">
            <Logo />
          </NavLink>
          <div className="nav_btns">
            <SmartChain />
            <ConnectWalletModule />
            <Settings />
            <button className="mob_menu settings_btn">
              <Menu />
            </button>
          </div>
        </div>
      </nav>
      <div className="mob_sm_chain">
        <SmartChain />
      </div>
    </>
  );
}

export default NavBar;
