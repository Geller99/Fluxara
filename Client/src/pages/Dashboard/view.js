import React from "react";
import FeaturedNews from "./../../dashboardComponents/FeaturedNews";
import Weather from "./../../dashboardComponents/Weather";
import Header from "./../../dashboardComponents/Header";
import { dummyState } from "./../../features/DummyState";
import TabMain from "../../dashboardComponents/TabMain";
import "../../style/features/Tab.queries.css";
import "../../style/dashboardPage/index.css";
import "../../style/features/Tab.css";
import "../../style/features/Tab.queries.css";

function View({
  name,
  userOptions,
  country,
  data,
  defaultStateSize,
  location,
}) {
  return (
    <div className="dashBoard_Main">
      <div className="dashBoard_Top">
        <Header name={name} />
      </div>
      <div className="dashBoard_Bottom">
        <div className="dashBoard_Bottom--top">
          <FeaturedNews userOptions={userOptions} country={country} />
        </div>

        <div className="dashBoard_Bottom--middle">
          {data.length > 0
            ? data.slice(0, defaultStateSize).map((el, index) => {
                return (
                  <TabMain
                    tabType="Tab"
                    key={data[el]}
                    topic={el.topic}
                    article={el.articles[0]}
                  />
                );
              })
            : dummyState
                .slice(0, defaultStateSize)
                .map((el, index) => (
                  <TabMain
                    tabType="Tab"
                    key={dummyState[el]}
                    topic={el.topic}
                    article={el.articles[0]}
                  />
                ))}
        </div>
        <div className="dashBoard_Bottom--bottom">
          {data.length
            ? data.slice(Math.max(data.length - 2, 0)).map((el) => {
                return (
                  <TabMain
                    tabType="Tab"
                    topic={el.topic}
                    article={el.articles[0]}
                  />
                );
              })
            : dummyState
                .slice(Math.max(dummyState.length - 2, 0))
                .map((el) => (
                  <TabMain
                    tabType="Tab"
                    topic={el.topic}
                    article={el.articles[0]}
                  />
                ))}

          <Weather location={location} country={country} />
        </div>
      </div>
    </div>
  );
}

export default View;
