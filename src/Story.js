import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ image, profilePic, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar src={profilePic} className="story__avatar" />
      <h4> {title} </h4>
    </div>
  );
}

export default Story;
