import React, { useState } from "react";
import Header from "./components/Header/Header";
import Homepage from "./components/HomePage/HomePage";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About"; // <-- Import About component here
import Footer from "./components/Footer/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const renderPage = () => {
    switch (activeTab) {
      case "Home":
        return <Homepage setActiveTab={setActiveTab} />; // <-- pass it here
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      default:
        return <Homepage setActiveTab={setActiveTab} />;
    }
  };
  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">{renderPage()}</div>
      <Footer />
    </>
  );
};

export default App;
