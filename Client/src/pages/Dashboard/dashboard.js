/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import View from "./view";
import "../../style/dashboardPage/index.css";
import { MyStore } from "../../context/myStore";

function DashBoard({ name, userOptions, location, country }) {
  const [data, setData] = useState([]);

  const news = useContext(MyStore);

  let defaultStateSize = 3;

  useEffect(() => {
    setData(news.storeData);
    if (news.length > 0) {
      setData(news.storeData);
    }
  }, [news]);

  return (
    <div className="dashBoard">
      <View
        name={name}
        userOptions={userOptions}
        country={country}
        data={data}
        defaultStateSize={defaultStateSize}
        location={location}
      />
    </div>
  );
}

export default DashBoard;
