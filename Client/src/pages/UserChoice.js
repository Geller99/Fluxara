import React from "react";
import axios from "axios";
import "../style/userchoicesPage/index.css";
import sideImage from "../helpers/images/jonathan-marchal-7Vs5LY_rbKk-unsplash.jpg";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { MyStore } from "../context/myStore";

function UserChoice({ name, userOptions, setUserOptions, triggerApi }) {
  const myStore = useContext(MyStore);

  useEffect(() => {
    localStorage.setItem("user-choices", JSON.stringify(userOptions));
  });

  const clickHandler = (option, button) => {
    if (userOptions.includes(option)) {
      button.style.backgroundColor = "white";
      let index = userOptions.indexOf(option);
      userOptions.splice(index, 1);
    } else if (!userOptions.includes(option) && userOptions.length < 5) {
      button.style.backgroundColor = "black";
      setUserOptions((prevState) => prevState.concat(option));
    }
  };

  const handleFetch = async (array) => {
    return await Promise.all(
      userOptions.map((choice) => {
        return axios
          .post(`http://localhost:3003/api/news`, {
            id: choice,
          })
          .then((data) => {
            myStore.setStoreData(data.data);
            console.log(myStore.storeData);
          });
      })
    );
  };

  const options = [
    "tech",
    "culture",
    "sex",
    "sports",
    "opinion",
    "business",
    "food",
    "health",
    "space",
  ];

  const buttonList = options.map((element, index) => {
    return (
      <button
        key={element}
        onClick={(e) => {
          clickHandler(element, e.target);
        }}
        className={`btn-main ${element}`}
      >
        {" "}
        {element}{" "}
      </button>
    );
  });

  return (
    <div className="userChoice">
      <div className="userChoice_content">
        <div className="userChoice_image">
          <img alt="" src={sideImage} className="userChoice_image--img" />
        </div>

        <div className="userChoice_form">
          <h2 className="userChoice_form--text">
            Welcome to your dashboard {name}!{" "}
          </h2>
          <p className="userChoice_text--3"> Personalize your news feed!</p>
          {console.log(userOptions)}
          <div className="userChoice_buttonList">{buttonList}</div>

          {userOptions.length === 5 ? (
            <Link
              to="/pages/AllSet.js"
              className="userChoice_form--nextbtn"
              onClick={handleFetch}
            >
              {" "}
              next ▶{" "}
            </Link>
          ) : (
            <div> Pick 5 News Choices! </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserChoice;
