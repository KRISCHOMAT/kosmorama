import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "../images/profile-kosmo-edit.jpg";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profileContainer">
      <Parallax className="profile" speed={-25}>
        <img className="profile" src={Image} alt="profile"></img>
      </Parallax>
    </div>
  );
};

export default Profile;
