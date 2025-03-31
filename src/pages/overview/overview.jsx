import React from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as PageLogo } from "../../assets/icons/sidebar-icons/1-1.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./overview.css";

import small_graph from "../../assets/images/small-graph.png";
import ConnectWalletModule from "../../components/connect-wallet/connect-wallet";
import LinkComp from "../../components/link/link";

import MainGraph from "../../components/main-graph/main-graph";

function OverviewPage() {
  return (
    <>
      <div className="overview_top card">
        <div className="overview_top_title">
          <Logo />
          <h2>Token Generation</h2>
        </div>
        <div className="overview_top_desc">
          <div>
            <h3>
              Effortlessly Create and customize Tokens Across 16 EVM Networks
            </h3>
            <p>
              Create and deploy your smart contract in minutes! No coding
              required. Verified on chain instantly with advanced features and
              options for all your token needs.
            </p>
          </div>
          <ConnectWalletModule />
        </div>
      </div>

      <div className="overview_main card">
        <div className="page_title">
          <PageLogo />
          <p>Your overview</p>
        </div>
        <div className="info_cards">
          <div className="info_card card3">
            <h4>Account Balance</h4>
            <div>
              <h3>0</h3>
              <div className="info_card_p">
                <h5>OMEXETH</h5>
              </div>{" "}
            </div>
            <p>$0.009</p>
          </div>
          <div className="info_card card3">
            <h4>Coin Info</h4>
            <div>
              <h3>OmexethC</h3>
              <div className="info_card_p">
                <h5>OMEXETH</h5>
              </div>{" "}
            </div>
            <p>Decimal: 8</p>
          </div>
        </div>
      </div>

      <div className="overview_diagramms">
        <MainGraph />
        <div className="rigt_col">
          <div className="righ_small_graph">
            <div className="block_title">
              <h4>OMEXETH Price</h4>
            </div>
            <div className="small_diagram card2">
              <h3>BSC / OMEXETH</h3>
              <img className="small_graph" src={small_graph} alt="" />
            </div>
          </div>
          <div className="righ_small_graph">
            <div className="block_title">
              <h4>ETH Circulation</h4>
            </div>
            <div className="small_diagram card2">
              <h3>ETH / OMEXETH</h3>
              <img className="small_graph" src={small_graph} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="staked_assets">
        <div className="block_title">
          <h4>Staked Assets</h4>
          <LinkComp title="See all Staked Assets" link="/staking" />
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
      <div className="swap_calc">
        <div className="block_title">
          <h4>Swap Calculator</h4>
          <LinkComp title="Go to OMEXETH Swap" link="/swap" />
        </div>
        <div className="swap_calc_block card2">
          <div className="swap_calc_item">
            <div className="calc_select">
              <p>Select Token</p>
              <div className="arrow_down">
                <Arrow />
              </div>
            </div>
            <input
              className="main_input"
              value={0.0}
              type="text"
              name=""
              id=""
              readOnly
            />
          </div>
          <div className="swap_calc_item">
            <div className="calc_select">
              <p>Select Token</p>
              <div className="arrow_down">
                <Arrow />
              </div>
            </div>
            <input
              className="main_input"
              value={0.0}
              type="text"
              name=""
              id=""
              readOnly

            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewPage;
