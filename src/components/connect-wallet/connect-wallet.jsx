import React from "react";
import "./connect-wallet.css";

function ConnectWalletModule({ size }) {
  return (
    <button className={`main_btn blue_btn ${size}`}>Connect wallet </button>
  );
}

export default ConnectWalletModule;
