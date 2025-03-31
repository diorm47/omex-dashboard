import React, { useState } from "react";
import "./settings.css";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as Exit } from "../../assets/icons/exit.svg";
import { ReactComponent as Info } from "../../assets/icons/info.svg";
import { ReactComponent as Toggler } from "../../assets/icons/toggler.svg";

function Settings() {
  const [modal, setModal] = useState(false);

  const speed = ["Standard (5)", "Fast (6)", "Instant (7)"];
  const [selectSpeed, setSelectedSpeed] = useState(speed[0]);

  const slippage = ["0.1", "0.5", "1.0"];
  const [selectSlippage, setSelectedSlippage] = useState(slippage[0]);
  return (
    <>
      <button className="settings_btn" onClick={() => setModal(!modal)}>
        <SettingsIcon />
      </button>

      <div
        className={`modal_overlay ${!modal || "visible_modal_overlay"}`}
        onClick={() => setModal(!modal)}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal_title">
            <p>Settings</p>
            <div className="exit_modal" onClick={() => setModal(!modal)}>
              <Exit />
            </div>
          </div>
          <div className="modal_content">
            <div className="modal_item">
              <h4>SWAP & LIQUIDITY</h4>
              <div className="modal_item_title">
                <p>Default Transaction Speed (GWEI)</p>
                <Info className="info_icon" />
              </div>
              <div className="modal_selects">
                {speed.map((speedItem) => (
                  <div
                    className={`modal_select ${
                      selectSpeed != speedItem || "modal_select_active"
                    }`}
                    key={speedItem}
                    onClick={() => setSelectedSpeed(speedItem)}
                  >
                    <p>{speedItem}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal_item">
              <div className="modal_item_title">
                <p>Slippage Tolerance</p>
                <Info className="info_icon" />
              </div>
              <div className="modal_selects">
                {slippage.map((slippageItem) => (
                  <div
                    className={`modal_select ${
                      selectSlippage != slippageItem || "modal_select_active"
                    }`}
                    key={slippageItem}
                    onClick={() => setSelectedSlippage(slippageItem)}
                  >
                    <p>{slippageItem}%</p>
                  </div>
                ))}
                <div className="modal_input">
                  <input
                    type="text"
                    value={selectSlippage}
                    onChange={(e) => setSelectedSlippage(e.target.value)}
                  />
                  <p>%</p>
                </div>
              </div>
            </div>
            <div className="modal_item modal_item_sec">
              <div className="modal_item_title">
                <p>Tx deadline (mins)</p>
                <Info className="info_icon" />
              </div>
              <div className="modal_input">
                <input type="text" defaultValue={20} readOnly />
              </div>
            </div>
            <div className="modal_item modal_item_sec">
              <div className="modal_item_title">
                <p>Disable Multihops </p>
                <Info className="info_icon" />
              </div>
              <Toggler className="toggler" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
