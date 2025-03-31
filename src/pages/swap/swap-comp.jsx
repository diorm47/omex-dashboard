import React from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Reload } from "../../assets/icons/reload.svg";
import ConnectWalletModule from "../../components/connect-wallet/connect-wallet";
import Settings from "../../components/settings/settings";
import { ReactComponent as PageLogo } from "../../assets/icons/sidebar-icons/4-4.svg";

function SwapComponent() {
  return (
    <div className="swap_farming card2">
      <div className="swap_farming_title">
        <h4>Farming</h4>
        <Settings />
        <button className="settings_btn">
          <Reload />
        </button>
      </div>

      <div className="swap_farming_wrapper">
        <div className="reselect opacity_btn">
          <PageLogo />
        </div>
        <div className="swap_farming_selects">
          <div className="swap_farming_select">
            <div className="swap_farming_select_token">
              <p>Select Token</p>
              <ArrowDown />
            </div>
            <input value={0.0} type="text" className="main_input" readOnly />
            <div className="inp_values">
              <div className="opacity_btn">25%</div>
              <div className="opacity_btn">50%</div>
              <div className="opacity_btn">75%</div>
              <div className="opacity_btn">Max</div>
            </div>
          </div>
          <div className="swap_farming_select">
            <div className="swap_farming_select_token">
              <p>Select Token</p>
              <ArrowDown />
            </div>
            <input value={0.0} type="text" className="main_input" readOnly />
            <div className="slippage">
              <h5 className="opacity_btn">Slippage Tolerance </h5>
              <div>
                <p>0.5%</p>
                <Edit className="opacity_btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConnectWalletModule />
    </div>
  );
}

export default SwapComponent;
