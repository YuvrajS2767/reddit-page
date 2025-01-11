import React from "react";
import AdvertisementCard from "./AdvertisementCard";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <AdvertisementCard />

      <div className="advertise-card">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a126a69f-469b-4bd8-9469-0c9bf0fb3fe6/dgqola7-c9b815e4-bc9c-43c9-aae3-723224090402.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExMjZhNjlmLTQ2OWItNGJkOC05NDY5LTBjOWJmMGZiM2ZlNlwvZGdxb2xhNy1jOWI4MTVlNC1iYzljLTQzYzktYWFlMy03MjMyMjQwOTA0MDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vCpHj2_4Z5PVPP4gnsVBn2BpPfFzRfuHYDUZIJlTMtw" alt="Reddit Icon" className="reddit-icon" />
        <h3>Advertise on Reddit</h3>
        <button className="advertise-btn">Get Started</button>
      </div>
    </aside>
  );
};

export default RightSidebar;
