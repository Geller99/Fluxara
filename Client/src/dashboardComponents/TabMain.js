import React from "react";
import "../style/features/Tab.css";
import "../style/common/normalize.css";
import Modal from "./../features/Modal";
import { useState } from "react";

const TabMain = ({
  tabType,
  className,
  topic,
  article = {
    content: "",
    description: "",
    title: "",
    urlToImage: "",
  },
}) => {
  const [showModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className={tabType} onClick={toggleModal}>
      {
        <Modal
          setModal={setModal}
          showModal={showModal}
          topic={topic}
          article={article}
        />
      }

      <button className="Tab_Button"> {topic} </button>
      <div className="Tab_NewsTopic"> {article.description}</div>
      <img alt="" className="Tab_img" src={article.urlToImage} />
    </div>
  );
};

export default TabMain;
