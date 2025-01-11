import React from "react";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="filter-section">
        {/* Dropdown Menu */}
        <div className="dropdown-section">
          <label htmlFor="filter-dropdown" className="dropdown-label"></label>
          <select id="filter-dropdown" className="dropdown-select">
            <option value="" disabled selected>
            Filter By
            </option>
            <option value="favourites">Favourites</option>
            <option value="reddit-feeds">Reddit Feeds</option>
            <option value="community">Community</option>
          </select>
        </div>

        {/* Favourites */}
        <div className="sidebar-section">
          <h4>Favourites</h4>
          <ul>
            <li>r/breakingnews</li>
            <li>r/lovestory</li>
            <li>r/funnymore</li>
          </ul>
        </div>

        {/* Reddit Feeds */}
        <div className="sidebar-section">
          <h4>Reddit Feeds</h4>
          <ul>
            <li>r/movies</li>
            <li>r/gaming</li>
            <li>r/pics</li>
            <li>r/gifs</li>
          </ul>
        </div>

        {/* Community */}
        <div className="sidebar-section">
          <h4>Community</h4>
          <ul>
            <li>r/funnymore</li>
            <li>r/breakingnews</li>
            <li>r/lovestory</li>
            <li>r/gif</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
