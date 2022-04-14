import React from "react";
import { Parallax } from "react-scroll-parallax";

import Planet from "../images/Planet1.png";
import "./CustomPlayer.css";

const CustomPlayer = () => {
  return (
    <div className="customPlayer">
      <Parallax speed={-20} className="cover">
        <img className="cover" src={Planet} alt="planet"></img>
      </Parallax>
      <div className="smallPlayer">
        <iframe
          title="small player"
          src="https://bandcamp.com/EmbeddedPlayer/track=3761921510/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/"
          seamless
        >
          <a href="https://kosmorama.bandcamp.com/track/odyssee">
            Odyssee by Kosmorama
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default CustomPlayer;
