import React from "react";
import { ReactComponent as PageLogo } from "../../assets/icons/sidebar-icons/5-5.svg";
import SwapComponent from "../swap/swap-comp";

function LiqudityPage() {
  return (
    <>
      <div className="overview_main card">
        <div className="page_title">
          <PageLogo />
          <p>Liquidity</p>
        </div>
      </div>

      <div className="liqudity">
        <SwapComponent />
      </div>
    </>
  );
}

export default LiqudityPage;
