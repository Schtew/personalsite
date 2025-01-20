import React from 'react';
import CardItem from './CardItem';
import basinlake from '../Assets/basinlakes.jpg';
import OctoDashthumbnail from '../Assets/OctoDashthumbnail.jpg';
import ProTrackerThumbnail from '../Assets/Protrackerthumbnail.jpg';

const HackathonsPage = () => {
    const hackathons = [
        {
            title: 'APEC & Google Asia 2020 App Challenge | 3rd Place',
            image: OctoDashthumbnail,
            link: 'https://devpost.com/software/octodash',
            description:<ul>
                <li>Became the first ever US team to podium in the international APEC 2020 App Challenge by building the smart inventory management web application Octodash.</li>
                <li>Octodash uses machine learning to predict inventory levels against COVID cases to reduce waste, and was built using React.js, Node.js, and Google Cloud Platform.</li>
                <li>Handled the creation of a news aggregation algorithm within the Python backend and worked on connecting the backend to the React frontend via the Flask framework.</li>
                </ul>,
            date: 'October, 2020',
        },
        {
            title: 'Emory + GT Covid Hackathon | Honorable Mention',
            image: ProTrackerThumbnail,
            link:  'https://www.youtube.com/watch?v=sI2oEntH-_Y',
            description: <ul>
                <li>Worked with 3 other GT students and 1 Emory student to create the accessible contact tracing web application for schools ProTracker. (MERN Stack)</li>
                <li>Worked Primarily on front-end user experience (React.js), designing logos (Photoshop), and connecting backend features (Node) to the front end.</li>
                </ul>,
            date: 'January, 2021',
        },
        // Add more hackathons as needed
    ];

    return (
        <div style={{ 
            backgroundImage: `url(${basinlake})`, 
            backgroundSize: 'cover', 
            backgroundAttachment: 'fixed',
            width: '100%', 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: 0, padding: 0 }}>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
                {hackathons.map((hackathon, index) => (
                    <CardItem key={index} item={hackathon} />
                ))}
            </div>
        </div>
    );
};

export default HackathonsPage;
