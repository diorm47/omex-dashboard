import React from "react";
import { ReactComponent as PageLogo } from "../../assets/icons/sidebar-icons/4-4.svg";

import "./swap.css";

import MainGraph from "../../components/main-graph/main-graph";
import SwapComponent from "./swap-comp";

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

      <div className="overview_diagramms swap_comps">
        <MainGraph />
        <SwapComponent />
      </div>
    </>
  );
}

export default SwapPage;
