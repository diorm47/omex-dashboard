import React from "react";
import { ReactComponent as PageLogo } from "../../assets/icons/sidebar-icons/4-4.svg";
import big_graph from "../../assets/images/big-graph.png";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Reload } from "../../assets/icons/reload.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

import "./swap.css";
import ConnectWalletModule from "../../components/connect-wallet/connect-wallet";

function SwapPage() {
  return (
    <>
      <div className="overview_main card">
        <div className="page_title">
          <PageLogo />
          <p>Swap</p>
        </div>
      </div>

      <div className="block_title">
        <h4>OMEXETH Price</h4>
      </div>

      <div className="overview_diagramms">
        <div className="left_col">
          <div className="big_main_graph card2">
            <div className="main_graph_desc">
              <div className="info_card">
                <h4>OMEXETH / USD</h4>
                <div>
                  <h3>$0.009</h3>
                  <div className="info_card_p">
                    <h5>-0.0013</h5>
                  </div>{" "}
                </div>
                <p>10.12.2024, 15:01:00</p>
              </div>
              <div className="diagram_dates">
                <div className="diagram_date">
                  <p>5 Min</p>
                </div>
                <div className="diagram_date">
                  <p>1 H</p>
                </div>
                <div className="diagram_date_active diagram_date">
                  <p>1 D</p>
                </div>
                <div className="diagram_date">
                  <p>1 M</p>
                </div>
              </div>
            </div>
            <img className="big_graph" src={big_graph} alt="" />
            <button className="main_btn blue_btn graph_btn">
              Buy OMEXETH Token
            </button>
          </div>
        </div>
        <div className="swap_farming card2">
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
      </div>
    </>
  );
}

export default SwapPage;
