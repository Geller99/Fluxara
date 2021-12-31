import React, { useState } from "react";
import { useEffect } from "react";
import "../style/features/header.css";
import SearchQuery from "./../features/SearchQuery";

function Header({ name }) {
  const [time, setTime] = useState("Good Day");

  const setGreeting = () => {
    const getDay = new Date();

    const getHour = getDay.getHours();

    if (getHour >= 12 && getHour < 18) {
      setTime("Good Afternoon");
    } else if (getHour < 12) {
      setTime("Good Morning");
    } else if (getHour > 18 && getHour < 24) {
      setTime("Good Evening");
    }
  };

  useEffect(() => {
    setGreeting();
  }, []);

  return (
    <div className="container_header">
      <h1 className="container_header--greeting">
        {" "}
        {time} {name}{" "}
      </h1>
      <SearchQuery />
    </div>
  );
}

export default Header;
