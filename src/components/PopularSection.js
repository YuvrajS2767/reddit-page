import React, { useState, useEffect } from "react";
import { fetchPopularPosts } from "../utils/api";
import Post from "./Post";
import "./PopularSection.css";

const PopularSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("hot");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = await fetchPopularPosts("popular", sort, 8);
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, [sort]);

  return (
    <div className="popular-section">
      <div className="popular-header">
        <h2>Popular</h2>
        <div className="sort-links">
          {["hot", "new", "controversial"].map((sortOption) => (
            <span
              key={sortOption}
              className={`sort-link ${sort === sortOption ? "active" : ""}`}
              onClick={() => setSort(sortOption)}
            >
              {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
            </span>
          ))}
        </div>
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="posts-container">
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              thumbnail={post.thumbnail}
              subreddit={post.subreddit_name_prefixed}
              num_comments={post.num_comments}
              score={post.score}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularSection;
