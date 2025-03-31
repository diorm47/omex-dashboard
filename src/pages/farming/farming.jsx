import React, { useState } from "react";
import { ReactComponent as PageLogo } from "../../assets/icons/sidebar-icons/3-3.svg";
import { ReactComponent as Apy } from "../../assets/icons/apy.svg";
import "./farming.css";
import LinkComp from "../../components/link/link";
import { NavLink } from "react-router-dom";

function FarmingPage() {
  const filters = ["Stake", "Withdraw", "Harvest"];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  return (
    <>
      <div className="overview_main card">
        <div className="page_title_w">
          <div className="page_title">
            <PageLogo />
            <p>Farming</p>
          </div>
          <div className="grey_filter">
            {filters.map((filter) => (
              <div
                className={filter !== selectedFilter || "active_grey_filter"}
                key={filter}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </div>
            ))}
          </div>
        </div>

        <div className="info_cards">
          <div className="info_card card3">
            <h4>Earn value</h4>
            <div>
              <h3>0</h3>
              <div className="info_card_p">
                <h5>OMEXETH</h5>
              </div>{" "}
            </div>
            <p>$0</p>
          </div>
          <div className="info_card card3">
            <h4>Total staked</h4>
            <div>
              <h3>0</h3>
              <div className="info_card_p">
                <h5>OMEXETH</h5>
              </div>{" "}
            </div>
            <p>$0</p>
          </div>
        </div>
      </div>

      <div className="farm_details">
        <div className="block_title">
          <h4>Farm OMEXETH LP</h4>
        </div>

        <div className="farm_details_card card2">
          <div className="page_title">
            <p>Farm Details</p>
          </div>
          <div className="farm_infos">
            <div className="info_card card3">
              <h4>Earned</h4>
              <div>
                <h3>0</h3>
                <div className="info_card_p">
                  <h5>OMEXETH</h5>
                </div>{" "}
              </div>
            </div>
            <div className="info_card card3">
              <h4>APY</h4>
              <div>
                <h3>Up to 20%</h3>
                <Apy />
              </div>
            </div>
            <div className="info_card card3">
              <h4>Lockup Time</h4>
              <div>
                <h3>0 Day</h3>
              </div>
            </div>
            <div className="info_card card3">
              <h4>Earned</h4>
              <div>
                <h3>0</h3>
                <div className="info_card_p">
                  <h5>OMEXETH</h5>
                </div>{" "}
              </div>
            </div>
            <div className="info_card card3">
              <h4>My Stake</h4>
              <div>
                <h3>0</h3>
                <div className="info_card_p">
                  <h5>OMEXETH</h5>
                </div>{" "}
              </div>
            </div>
            <div className="info_card card3">
              <h4>Staked Liquidity</h4>
              <div>
                <h3>0</h3>
                <div className="info_card_p">
                  <h5>OMEXETH</h5>
                </div>{" "}
              </div>
            </div>
            <div className="info_card card3">
              <h4>Release Cycle</h4>
              <div>
                <h3>350 Day</h3>
              </div>
            </div>
            <div className="info_card card3">
              <h4>Unclaimed Earnings</h4>
              <div>
                <h3>0</h3>
                <div className="info_card_p">
                  <h5>OMEXETH</h5>
                </div>{" "}
              </div>
            </div>
            <div className="info_card card3">
              <h4>Withdrawal fee rate</h4>
              <div>
                <h3>0%</h3>
              </div>
            </div>
            <div className="info_card card3">
              <h4>Claimed Earnings</h4>
              <div>
                <h3>0</h3>
              </div>
            </div>
          </div>

          <div className="farm_actions">
            <NavLink to="/liqudity">
              <button className="main_btn blue_btn">Add Liquidity </button>
            </NavLink>

            <LinkComp title="See all Staked Assets" link="/stacking" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FarmingPage;
