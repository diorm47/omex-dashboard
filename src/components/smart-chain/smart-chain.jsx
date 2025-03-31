import React, { useState } from "react";
import "./smart-chain.css";
import { ReactComponent as Exit } from "../../assets/icons/exit.svg";
import eth from "../../assets/images/crypto/eth.png";
import bnb from "../../assets/images/crypto/bnb.png";
import omex from "../../assets/images/crypto/omex.png";

function SmartChain() {
  const networks = [
    { name: "Ethereum ...", img: eth },
    { name: "BNB Smart...", img: bnb },
    { name: "(Testnet)B...", img: bnb },
    { name: "OMEXETH", img: omex },
  ];
  const [modal, setModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[1]);

  return (
    <>
      <button className="main_btn trans_btn chain_btn" onClick={() => setModal(!modal)}>
        <img src={selectedNetwork.img} alt="" />
        {selectedNetwork.name}
      </button>

      <div
        className={`modal_overlay ${!modal || "visible_modal_overlay"}`}
        onClick={() => setModal(!modal)}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal_title">
            <p>Choose network</p>
            <div className="exit_modal" onClick={() => setModal(!modal)}>
              <Exit />
            </div>
          </div>
          <div className="modal_content">
            <div className="network_choose">
              {networks.map((network) => (
                <div
                  className={`network_select ${
                    selectedNetwork.name != network.name ||
                    "active_network_select"
                  }`}
                  key={network.name}
                  onClick={() => setSelectedNetwork(network)}
                >
                  <img src={network.img} alt="" />
                  <p>{network.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmartChain;

// export const NetworkSelector = () => {
//   const handleNetworkChange = async (e) => {
//     const networkKey = e.target.value;
//     await switchNetwork(networkKey);
//   };

//   return (
//     <select onChange={handleNetworkChange}>
//       <option value="ETHEREUM">Ethereum</option>
//       <option value="BSC">BNB Smart Chain</option>
//       <option value="BSC_TESTNET">BSC Testnet</option>
//     </select>
//   );
// };
