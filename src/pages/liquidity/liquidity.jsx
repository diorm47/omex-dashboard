import React from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Reload } from "../../assets/icons/reload.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as PageLogo } from "../../assets/icons/sidebar-icons/5-5.svg";
import ConnectWalletModule from "../../components/connect-wallet/connect-wallet";

function LiqudityPage() {
  return (
    <>
      <div className="overview_main card">
        <div className="page_title">
          <PageLogo />
          <p>Liquidity</p>
        </div>
      </div>

      <div className="swap_farming card2 liqudity">
        <div className="swap_farming_title">
          <h4>Farming</h4>
          <button className="settings_btn">
            <Settings />
          </button>
          <button className="settings_btn">
            <Reload />
          </button>
        </div>

        <div className="swap_farming_wrapper">
          <div className="reselect">
            <PageLogo />
          </div>
          <div className="swap_farming_selects">
            <div className="swap_farming_select">
              <div className="swap_farming_select_token">
                <p>Select Token</p>
                <ArrowDown />
              </div>
              <input value={0.0} type="text" className="main_input" />
              <div className="inp_values">
                <div>25%</div>
                <div>50%</div>
                <div>75%</div>
                <div>Max</div>
              </div>
            </div>
            <div className="swap_farming_select">
              <div className="swap_farming_select_token">
                <p>Select Token</p>
                <ArrowDown />
              </div>
              <input value={0.0} type="text" className="main_input" />
              <div className="slippage">
                <h5>Slippage Tolerance </h5>
                <div>
                  <p>0.5%</p>
                  <Edit />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConnectWalletModule />
      </div>
    </> 
  );
}

export default LiqudityPage;
