import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import Test from '../test';
import Excelthumbnail from '../Assets/Excelthumbnail.jpg';
import uist from '../Assets/UIST.png';
import cradlelake from '../Assets/cradlelake.jpg';

const researchsPage = () => {
    const researchs = [
        {
            title: 'VDAT | Dr. Jennifer Kim',
            image: uist,
            link: 'https://programs.sigchi.org/uist/2023/program/content/126776',
            description: <ul>
                <li>Developed a Unity VR application for individuals with ID/DD which simulates real-world job requirements, both socially and professionally, and provides feedback via a web interface.</li>
                <li>Coordinating with Korean development team remotely to collaborate on front end data visulization in Vue.</li>
                <li>Paper published in UIST 2023</li>
            </ul>,
            date: 'August, 2022 - December, 2022',
        },
        {
            title: 'Inclusive Higher Education | Dr. Jennifer Kim',
            image: Excelthumbnail,
            link: 'https://excel.gatech.edu/home',
            description: <ul>
                <li>Working with Dr. Kim to develop an AI generative content transformation tool for intellectually disabled students in Georgia Tech's Excel program.</li>
                <li>Organizing across multiple domains at Georgia Tech to obtain training data and domain expert advice. </li>
            </ul>,
            date: 'January, 2024- Present',
        },
        // Add more researchs as needed
    ];

    return (
        <div style={{ backgroundImage: `url(${cradlelake})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
                {researchs.map((research, index) => (
                    <div key={index} style={{ margin: '1rem', display: 'flex', alignSelf: 'stretch' }}>
                        <Card style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <div style={{ flexBasis: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', padding: '1rem', paddingRight: '0' }}>
                                <a href={research.link} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', margin: '1rem'}}>
                                    <CardMedia
                                        image={research.image}
                                        title={research.title}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </a>
                            </div>
                            <div style={{ flexBasis: '70%' }}>
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {research.title}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {research.date}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {research.description}
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

export default researchsPage;
