import React from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="page-layout">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
