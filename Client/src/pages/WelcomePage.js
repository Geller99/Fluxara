import React from "react";
import { Link } from "react-router-dom";
import "../style/welcomePage/index.css";
import sideImage from "../helpers/images/jonathan-marchal-7Vs5LY_rbKk-unsplash.jpg";
import { useEffect } from "react";

function WelcomePage({ setName, name }) {
  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(name));
  }, [name]);

  return (
    <div className="WelcomePage">
      <div className="WelcomePage_content">
        <div className="WelcomePage_image">
          <img alt="" src={sideImage} className="WelcomePage_image--img" />
        </div>

        <form
          className="WelcomePage_form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="WelcomePage_form--section">
            <h2 className="WelcomePage_form--header"> Fluxara </h2>
            <p className="WelcomePage_text--3">
              {" "}
              Your Curated News Feed with Stuff That Actually Matters...
            </p>

            <p className="WelcomePage_form--text">Tell us your name! </p>

            <input
              type="text"
              required={true}
              className="WelcomePage_form--input"
              onChange={(e) => setName(e.target.value)}
            />

            {name ? (
              <Link to="/pages/UserChoice.js" className="WelcomePage_form--btn">
                {" "}
                {"Next >"}
              </Link>
            ) : (
              <div className="WelcomePage_dots"> ......... </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default WelcomePage;
