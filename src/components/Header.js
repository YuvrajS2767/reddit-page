import React from "react";
import {
  FaSun,
  FaHome,
  FaFireAlt,
  FaGlobe,
  FaBell,
  FaEnvelope,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="theme-toggle">
          <FaSun />
        </button>

        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a126a69f-469b-4bd8-9469-0c9bf0fb3fe6/dgqola7-c9b815e4-bc9c-43c9-aae3-723224090402.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExMjZhNjlmLTQ2OWItNGJkOC05NDY5LTBjOWJmMGZiM2ZlNlwvZGdxb2xhNy1jOWI4MTVlNC1iYzljLTQzYzktYWFlMy03MjMyMjQwOTA0MDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vCpHj2_4Z5PVPP4gnsVBn2BpPfFzRfuHYDUZIJlTMtw"
          alt="Reddit Logo"
          className="logo"
        />

        <nav className="nav-links">
          <div className="nav-item">
            <FaHome className="icon" />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <FaFireAlt className="icon" />
            <span>Popular</span>
          </div>
          <div className="nav-item">
            <FaGlobe className="icon" />
            <span>All</span>
          </div>
        </nav>
      </div>

      <div className="header-center">
        <input
          type="text"
          placeholder="Search Reddit"
          className="search-input"
        />
      </div>

      <div className="header-right">
        <button className="create-post-btn">Create Post</button>

        <FaBell className="icon notification-icon" />
        <FaEnvelope className="icon message-icon" />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFP5JbuVmj4USB2lON2wmRC2UtXsHcIUk9A&s"
          alt="User Thumbnail"
          className="user-thumbnail"
        />
      </div>
    </header>
  );
};

export default Header;
