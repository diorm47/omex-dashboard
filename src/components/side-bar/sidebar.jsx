import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Icon1 } from "../../assets/icons/sidebar-icons/1.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/sidebar-icons/2.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/sidebar-icons/3.svg";
import { ReactComponent as Icon4 } from "../../assets/icons/sidebar-icons/4.svg";
import { ReactComponent as Icon5 } from "../../assets/icons/sidebar-icons/5.svg";

import { ReactComponent as Icon11 } from "../../assets/icons/sidebar-icons/1-1.svg";
import { ReactComponent as Icon21 } from "../../assets/icons/sidebar-icons/2-2.svg";
import { ReactComponent as Icon31 } from "../../assets/icons/sidebar-icons/3-3.svg";
import { ReactComponent as Icon41 } from "../../assets/icons/sidebar-icons/4-4.svg";
import { ReactComponent as Icon51 } from "../../assets/icons/sidebar-icons/5-5.svg";


import ConnectWalletModule from "../connect-wallet/connect-wallet";
import Socials from "../socials";

function Sidebar() {
  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_menu">
        <NavLink to="/overview" className="sidebar_menu_item">
          <Icon1 className="defalt_menu_icon" />{" "}
          <Icon11 className="active_menu_icon" /> <p>Overview</p>
        </NavLink>
        <NavLink to="/stacking" className="sidebar_menu_item">
          <Icon2 className="defalt_menu_icon" />{" "}
          <Icon21 className="active_menu_icon" /> <p>Staking</p>
        </NavLink>
        <NavLink to="/farming" className="sidebar_menu_item">
          <Icon3 className="defalt_menu_icon" />{" "}
          <Icon31 className="active_menu_icon" /> <p>Farming</p>
        </NavLink>
        <NavLink to="/swap" className="sidebar_menu_item">
          <Icon4 className="defalt_menu_icon" />{" "}
          <Icon41 className="active_menu_icon" /> <p>Swap</p>
        </NavLink>
        <NavLink to="/liqudity" className="sidebar_menu_item">
          <Icon5 className="defalt_menu_icon" />{" "}
          <Icon51 className="active_menu_icon" /> <p>Liquidity</p>
        </NavLink>
      </div>
      <div className="sidebar_actions">
        <div className="sidebar_btns">
          <ConnectWalletModule />
          <NavLink to="/swap">
            <button className="main_btn trans_btn">BuyOMEXETH Token</button>
          </NavLink>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Sidebar;
