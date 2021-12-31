import React, { useState } from "react";
import { newsHandlerSecondary } from "./NewsAPI";
import Secondmodal from "./Modal2";
import "../style/features/header.css";

const SearchQuery = () => {
  const [showModal, setModal] = useState(false);
  const [item, setItem] = useState(null);
 
  const result = [];

  const openModal = () => {
    setModal((prev) => !prev);
  };

  const changeHandler = (e) => {
    setItem(e.target.value);
  };

  const submitHandler = () => {
    newsHandlerSecondary(item, result);

    openModal();
  };

  /*
    
    Make news API requests based on keywords entered into a search bar...
     return results in generated news tabs (Portals) that can be clicked and read 
     Result tabs clicked will open in a modal with scroll and full article

    */

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={changeHandler}
        type="text"
        className="searchForm_text"
        placeholder="Search topic..."
      />
      <div onClick={submitHandler} className="searchForm_icon">
        {" "}
        <button className="searchForm_button">Search</button>
      </div>

      {
        <Secondmodal
          setModal={setModal}
          showModal={showModal}
          result={result}
          item={item}
        />
      }
    </form>
  );
};

export default SearchQuery;
