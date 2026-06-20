import "./App.css";
import Header from "./Components/Header";
import HackathonsPage from "./Components/HackathonPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResearchPage from "./Components/ResearchPage";
import ProfessionalPage from "./Components/ProfessionalPage";
import Home from "./Components/HomePage";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

// TODO:
// 1. Add dynamic names to the footer for which image we're looking at.
// 2. Add a hover component, which fades out the cards and shows the images in totality.
const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Router basename="/">
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div className="header">
          <Header setIsHovered={setIsHovered} />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home isHovered={isHovered} />} />
            <Route
              path="/hackathons"
              element={<HackathonsPage isHovered={isHovered} />}
            />
            <Route
              path="/research"
              element={<ResearchPage isHovered={isHovered} />}
            />
            <Route
              path="/professional"
              element={<ProfessionalPage isHovered={isHovered} />}
            />
          </Routes>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography
            variant="body2"
            style={{ fontFamily: "Lora", textAlign: "center" }}
          >
            Website written in React, featuring photos from my backpacking
            adventures.
          </Typography>
        </div>
      </div>
    </Router>
  );
};

export default App;
