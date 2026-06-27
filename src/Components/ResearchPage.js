import React from "react";
import CardItem from "./CardItem";
import cradlelake from "../Assets/cradlelake.jpg";
import Excelthumbnail from "../Assets/Excelthumbnail.png";
import uist from "../Assets/UIST.png";

const ResearchsPage = ({ isHovered }) => {
  const researchs = [
    {
      title: "Inclusive Higher Education | Dr. Jennifer Kim",
      image: Excelthumbnail,
      link: "https://excel.gatech.edu/home",
      description: (
        <ul>
          <li>
            Working with Dr. Kim to develop an AI generative content
            transformation tool for intellectually disabled students in Georgia
            Tech's Excel program.
          </li>
          <li>
            Developed a fine-tuned RAG model to automate conversion of standard
            college-level course materials into personalized formats for
            individuals with cognitive disabilities, targeting a core
            scalability bottleneck in Georgia Tech’s Excel program.
          </li>
          <li>
            Addressed a 1:1 support model bottleneck- combining textbook
            retrieval with individual student profile context to generate
            adapted assignments, with the goal of increasing program enrollment
            capacity.
          </li>
        </ul>
      ),
      date: "January, 2024 - May 2024",
    },
    {
      title: "VDAT | Dr. Jennifer Kim",
      image: uist,
      link: "https://programs.sigchi.org/uist/2023/program/content/126776",
      description: (
        <ul>
          <li>
            Developed a Unity VR application for individuals with ID/DD which
            simulates real-world job requirements, both socially and
            professionally, and provides feedback via a web interface.
          </li>
          <li>
            Coordinating with Korean development team remotely to collaborate on
            front end data visulization in Vue.
          </li>
          <li>
            Resulting paper published in{" "}
            <a
              href="https://programs.sigchi.org/uist/2023/program/content/126776"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black" }}
            >
              UIST 2023
            </a>
          </li>
        </ul>
      ),
      date: "August, 2022 - December, 2022",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${cradlelake})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
        minHeight: "var(--page-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
        {researchs.map((research, index) => (
          <CardItem key={index} item={research} isHovered={isHovered} />
        ))}
      </div>
    </div>
  );
};

export default ResearchsPage;
