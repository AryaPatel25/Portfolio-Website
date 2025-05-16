import React, { useState } from "react";
import Header from "./components/Header/Header";
import Homepage from "./components/HomePage/HomePage";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // Simple page rendering based on active tab
  const renderPage = () => {
    switch (activeTab) {
      case "Home":
        return <Homepage />;
      case "Portfolio":
        return <Portfolio />;
      // Add other pages like About Me, Services, Blog if needed
      default:
        return <Homepage />;
    }
  };

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">{renderPage()}</div>
    </>
  );
};

export default App;
