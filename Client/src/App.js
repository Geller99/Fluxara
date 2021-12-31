/* eslint-disable */
import React, { useState, useEffect } from "react";
import GlobalContext from "./context/Context";
import { newsHandler } from "./features/NewsAPI";
import { locationHandler } from "./features/Geolocation";
import Router from "./features/Router";
import "./main.css";
import { useStore } from "./context/useStore";
import { MyStore } from "./context/myStore";

const App = () => {
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState(null);
  const [news, setNews] = useState([]);

  const myStore = useStore();

  const [userOptions, setUserOptions] = useState([]);

  useEffect(() => {
    locationHandler(setLocation, setCountry);
  }, []);

  const triggerApi = () => {
    let newsUpdated = [...news];
    userOptions.forEach((val) => {
      newsHandler(val).then((res) => {
        const newsUpdate = { topic: val, articles: res.data.articles };
        newsUpdated = [...newsUpdated, newsUpdate];
        setNews(newsUpdated);
      });
    });
  };

  return (
    <div className="App">
      <MyStore.Provider value={myStore}>
        <Router
          name={name}
          setName={setName}
          triggerApi={triggerApi}
          userOptions={userOptions}
          setUserOptions={setUserOptions}
          news={news}
          country={country}
          location={location}
        />
      </MyStore.Provider>
    </div>
  );
};

export default App;
