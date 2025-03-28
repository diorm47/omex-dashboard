import React, { useState } from "react";
import { ReactComponent as Exit } from "../../assets/icons/exit.svg";
import { ReactComponent as LinkIcon } from "../../assets/icons/links.svg";

function StackingModal() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="link_comp opacity_btn" onClick={() => setModal(!modal)}>
        <p>See all Staked Assets</p>
        <LinkIcon />
      </div>

      <div
        className={`modal_overlay ${!modal || "visible_modal_overlay"}`}
        onClick={() => setModal(!modal)}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal_title">
            <p>Staking Token</p>
            <div className="exit_modal" onClick={() => setModal(!modal)}>
              <Exit />
            </div>
          </div>
          <div className="modal_content">
            <div className="modal_item modal_item_sec">
              <span>Staked</span>
              <span>Balance: 0</span>
            </div>
            <div className="modal_item modal_item_sec">
              <span>00</span>
              <div className="item_select_text">
                <div className="modal_select">
                  <p>Maximum</p>
                </div>

                <span>OMEXETH</span>
              </div>
            </div>
            <div className="modal_item modal_item_sec">
              <div className="modal_item_title">
                <p>Locup time</p>
              </div>
              <div className="modal_select">
                <p>1 month</p>
              </div>
            </div>
            <div className="modal_action_btns">
              <button className="main_btn trans_btn">Cancel</button>
              <button className="main_btn blue_btn">Approve</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StackingModal;
