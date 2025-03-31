import React from "react";
import { ReactComponent as PageLogo } from "../../assets/icons/sidebar-icons/2-2.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./stacking.css";
import StackingModal from "./stacking-modal";

function StackingPage() {
  return (
    <>
      <div className="overview_main card">
        <div className="page_title">
          <PageLogo />
          <p>Staking Overview</p>
        </div>
        <div className="info_cards">
          <div className="info_card card3">
            <h4>Earn value</h4>
            <div>
              <h3>0</h3>
              <div className="info_card_p">
                <h5>USD</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="staked_assets">
        <div className="block_title">
          <h4>Staked Assets</h4>
          <StackingModal />
        </div>
        <div className="main_table">
          <table>
            <thead>
              <tr>
                <td>OMEXETH / USD</td>
                <td>Est. APY</td>
                <td>Total Staked</td>
                <td>Lockud Time</td>
                <td>My stake</td>
                <td>Unclaimed Earings</td>
                <td>Claimed Earings</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="main_desc_table">
                    <div className="main_desc_table_title">
                      <Logo />
                      <h4>OMEXETH</h4>
                    </div>
                    <div className="main_desc_table_types">
                      <div>Stake</div>
                      <div>Withdraw</div>
                      <div>Harvest</div>
                      <div>Compound</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="info_card_p">
                    <h5>15%</h5>
                  </div>
                </td>
                <td>0</td>
                <td>0 Day</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <div className="main_desc_table">
                    <div className="main_desc_table_title">
                      <Logo />
                      <h4>OMEXETH</h4>
                    </div>
                    <div className="main_desc_table_types">
                      <div>Stake</div>
                      <div>Withdraw</div>
                      <div>Harvest</div>
                      <div>Compound</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="info_card_p">
                    <h5>15%</h5>
                  </div>
                </td>
                <td>0</td>
                <td>0 Day</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <div className="main_desc_table">
                    <div className="main_desc_table_title">
                      <Logo />
                      <h4>OMEXETH</h4>
                    </div>
                    <div className="main_desc_table_types">
                      <div>Stake</div>
                      <div>Withdraw</div>
                      <div>Harvest</div>
                      <div>Compound</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="info_card_p">
                    <h5>15%</h5>
                  </div>
                </td>
                <td>0</td>
                <td>0 Day</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <div className="main_desc_table">
                    <div className="main_desc_table_title">
                      <Logo />
                      <h4>OMEXETH</h4>
                    </div>
                    <div className="main_desc_table_types">
                      <div>Stake</div>
                      <div>Withdraw</div>
                      <div>Harvest</div>
                      <div>Compound</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="info_card_p">
                    <h5>15%</h5>
                  </div>
                </td>
                <td>0</td>
                <td>0 Day</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StackingPage;
