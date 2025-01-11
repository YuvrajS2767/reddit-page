import React from "react";
import "./Post.css";

const Post = ({ title, thumbnail, subreddit, num_comments, score }) => {
  return (
    <div className="post">
      <img
        src={thumbnail.startsWith("http") ? thumbnail : "/assets/default.png"}
        alt="Thumbnail"
        className="post-thumbnail"
      />
      <div className="post-details">
        <h3 className="post-title">{title}</h3>
        <p className="post-meta">
          {subreddit} • {num_comments} comments • {score} points
        </p>
      </div>
    </div>
  );
};

export default Post;
