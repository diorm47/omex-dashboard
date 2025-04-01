import React, { useState } from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Exit } from "../../assets/icons/exit.svg";
import Socials from "../socials";
import { NavLink } from "react-router-dom";

function MobMenu() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button
        className="mob_menu settings_btn"
        onClick={() => setModal(!modal)}
      >
        <Menu />
      </button>

      <div className={`mob_menu_modal ${!modal || "visible_mob_menu_modal"}`}>
        <div className="mob_menu_modal_exit">
          <button className="exit_modal" onClick={() => setModal(!modal)}>
            <Exit />
          </button>
        </div>
        <div className="mob_menu_modal_content">
          <div className="sidebar_btns">
            <NavLink to="/swap">
              <button className="main_btn trans_btn">BuyOMEXETH Token</button>
            </NavLink>
          </div>
          <Socials />
        </div>
      </div>
    </>
  );
}

export default MobMenu;
