import React, { useEffect } from "react";
import "./Youtube.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Youtube = ({ show, toggleModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  return (
    <div className={show ? "youtubeContainer" : "hide"}>
      <div className="close" onClick={toggleModal}>
        <AiOutlineCloseCircle size={35} />
      </div>
      <div className="video-responsive content">
        <iframe
          width="853"
          height="480"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={`https://www.youtube.com/embed/_m4EytqWVt0`}
          frameBorder="0"
          allowFullScreen
          title="Kosmorama"
        />
      </div>
    </div>
  );
};

export default Youtube;
