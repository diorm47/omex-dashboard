import React, { useState } from "react";
import "./main-graph.css";
import { NavLink } from "react-router-dom";
import big_graph from "../../assets/images/big-graph.png";

function MainGraph() {
  const dates = ["5 Min", "1 H", "1 D", "1 M"];
  const [selectedDate, setSelectedDate] = useState(dates[2]);
  return (
    <div className="left_col">
      <div className="block_title">
        <h4>OMEXETH Price</h4>
      </div>
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
            {dates.map((date) => (
              <div
                className={`diagram_date ${
                  date !== selectedDate || "diagram_date_active"
                }`}
                key={date}
                onClick={() => setSelectedDate(date)}
              >
                <p>{date}</p>
              </div>
            ))}
          </div>
        </div>
        <img className="big_graph" src={big_graph} alt="" />
        <NavLink to="/swap">
          <button className="main_btn blue_btn graph_btn">
            Buy OMEXETH Token
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default MainGraph;
