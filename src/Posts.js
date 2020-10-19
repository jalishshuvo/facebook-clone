import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Posts.css";
import db from "./firebase";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}

      {/* for font-end */}
      {/* <Post
        profilePic="https://yt3.ggpht.com/a-/AOh14GhbY1CTfmLJULaGvguQEGioikSCHYPEqHm2TYb5=s88-c-k-c0xffffffff-no-rj-mo"
        message="wow this works"
        timestamp="timestamp"
        username="Jalish Shuvo"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      />
      <Post
        profilePic="https://yt3.ggpht.com/a-/AOh14GhbY1CTfmLJULaGvguQEGioikSCHYPEqHm2TYb5=s88-c-k-c0xffffffff-no-rj-mo"
        message="wow this works"
        timestamp="timestamp"
        username="Jalish Shuvo"
      />
      <Post
        profilePic="https://yt3.ggpht.com/a-/AOh14GhbY1CTfmLJULaGvguQEGioikSCHYPEqHm2TYb5=s88-c-k-c0xffffffff-no-rj-mo"
        message="wow this works"
        timestamp="timestamp"
        username="Jalish Shuvo"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      /> */}
    </div>
  );
}

export default Posts;
