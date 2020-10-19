import React from "react";
import "./Feed.css";
import Posts from "./Posts";
import PostFeed from "./PostFeed";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <PostFeed />
      <Posts />
    </div>
  );
}

export default Feed;
