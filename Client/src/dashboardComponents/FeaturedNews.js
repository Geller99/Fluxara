import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/features/featuredPage.css";
import Modal from "./../features/Modal";

function FeaturedNews({ country }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const [showModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const headlineCall = () => {
    let url = `https://fluxserver-fbqvi1vr1-geller99.vercel.app/api/headlines`;
    axios
      .get(url)
      .then((data) => {
        console.log(data)
        setContent(data.data.articles[0].content);
        setImage(data.data.articles[0].urlToImage);
        setTitle(data.data.articles[0].title);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  useEffect(() => {
    headlineCall();
  }, []);

  return (
    <div className="FeaturedTab" onClick={toggleModal}>
      {title && (
        <Modal setModal={setModal} showModal={showModal} article={content} />
      )}

      <img alt="loading..." className="FeaturedTab_img" src={image} />
      <article className="FeaturedTab_NewsTopic">
        {" "}
        Featured Story {title}{" "}
      </article>
    </div>
  );
}

export default FeaturedNews;
