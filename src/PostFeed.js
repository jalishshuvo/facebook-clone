import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./PostFeed.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function PostFeed() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handlesubmit = (e) => {
    e.preventDefault();

    // clever firebase database stuff backend
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: imageUrl,
      username: user.displayName,
      profilePic: user.photoURL,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="postFeed">
      <div className="postFeed__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="postFeed__input"
            placeholder={`What's on your mind ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL(Optional)"
          />

          <button type="submit" onClick={handlesubmit}>
            Hidden submit
          </button>
        </form>
      </div>

      <div className="postFeed__bottom">
        <div className="postFeed__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3> Live Video </h3>
        </div>
        <div className="postFeed__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3> Photo/Video </h3>
        </div>
        <div className="postFeed__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3> Feeling/Activity </h3>
        </div>
      </div>
    </div>
  );
}

export default PostFeed;
