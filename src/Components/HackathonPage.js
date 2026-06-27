import React from "react";
import CardItem from "./CardItem";
import basinlake from "../Assets/basinlakes.jpg";
import OctoDashthumbnail from "../Assets/OctoDashthumbnail.jpg";
import ProTrackerThumbnail from "../Assets/Protrackerthumbnail.jpg";

const HackathonsPage = ({ isHovered }) => {
  const hackathons = [
    {
      title: "APEC & Google Asia 2020 App Challenge | 3rd Place",
      image: OctoDashthumbnail,
      link: "https://devpost.com/software/octodash",
      description: (
        <ul>
          <li>
            Placed 3rd internationally and became the first U.S. team to podium
            at the APEC 2020 App Challenge with Octodash, a smart inventory
            management platform for businesses operating during COVID-driven
            demand volatility.
          </li>
          <li>
            Built a 48-hour live prototype that predicted inventory demand by
            running logistic regression against local COVID case data and
            user-provided inventory usage statistics.
          </li>
          <li>
            Owned the Python news aggregation feature for surfacing local
            COVID-related articles, then connected backend prediction and news
            signals to a React frontend through Flask and Node.js services on
            Google Cloud Platform.
          </li>
        </ul>
      ),
      date: "October, 2020",
    },
    {
      title: "Emory + GT Covid Hackathon | Honorable Mention",
      image: ProTrackerThumbnail,
      link: "https://www.youtube.com/watch?v=sI2oEntH-_Y",
      description: (
        <ul>
          <li>
            Earned honorable mention for ProTracker, an accessible contact
            tracing application designed to help schools coordinate COVID
            self-reporting and classroom exposure monitoring.
          </li>
          <li>
            Built UI/UX flows and visual identity for a 48-hour working demo,
            supporting student self-reporting of positive COVID tests and
            administrator review of exposure levels across classrooms.
          </li>
          <li>
            Implemented Node.js integrations and contributed analytics logic for
            translating self-reported cases into classroom-level exposure risk.
          </li>
        </ul>
      ),
      date: "January, 2021",
    },
    // Add more hackathons as needed
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${basinlake})`,
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
        {hackathons.map((hackathon, index) => (
          <CardItem key={index} item={hackathon} isHovered={isHovered} />
        ))}
      </div>
    </div>
  );
};

export default HackathonsPage;
