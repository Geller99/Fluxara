import React, { useEffect, useContext } from "react";
import "../style/readyPage/index.css";
import { Link } from "react-router-dom";
import "../style/readyPage/index.css";
import GlobalContext from "./../context/Context";


const AllSet = () => {
  const news = useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem("news", JSON.stringify(news));
  });

  return (
    <div className="readyPage">
      <div className="readyPage_content">
        <h2 className="readyPage_content--ready">Great! You are all set!</h2>
        <Link className="readyPage_content--next" to="/pages/DashBoard.js">
          {" "}
          Take me to my dashboard ▶{" "}
        </Link>
      </div>
    </div>
  );
};

export default AllSet;
