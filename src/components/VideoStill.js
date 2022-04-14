import React, { useState } from "react";
import videoStill from "../images/kosmo-vid-still-edit.jpg";
import { BiPlayCircle } from "react-icons/bi";
import "./VideoStill.css";
import { Parallax } from "react-scroll-parallax";
import Youtube from "./Youtube";

const VideoStill = () => {
  const [isCloseModal, setIsCloseModal] = useState(false);

  const toggleModal = () => {
    setIsCloseModal(!isCloseModal);
  };
  return (
    <>
      <Youtube show={isCloseModal} toggleModal={toggleModal} />
      <div className="stillContainer" onClick={toggleModal}>
        <Parallax className="image" speed={-5}>
          <img className="image" src={videoStill} alt="video-still" />
        </Parallax>
        <div className="iconContainer">
          <BiPlayCircle size={100} />
        </div>
      </div>
    </>
  );
};

export default VideoStill;
