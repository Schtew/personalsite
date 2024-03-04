import React from 'react';
import { Card, CardContent, Typography, CardMedia} from '@material-ui/core';
import Test from '../test';
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
        <div style={{backgroundImage: `url(${basinlake})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
            <div style={{width: '80%', display: 'flex', flexDirection: 'column'}}>
                {hackathons.map((hackathon, index) => (
                    <div key={index} style={{margin: '1rem', display: 'flex'}}>
                        <Card style={{display: 'flex', justifyContent: 'space-between', minWidth: "100%"}}>
                            <div style={{flexBasis: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem'}}>
                                <a href={hackathon.link} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '70%', margin:'1rem'}}>
                                    <CardMedia
                                        image={hackathon.image}
                                        title={hackathon.title}
                                        style={{width: '100%', height: '100%'}}
                                    />
                                </a>
                            </div>
                            <div style={{flexBasis: '70%'}}>
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {hackathon.title}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {hackathon.date}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {hackathon.description}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HackathonsPage;
