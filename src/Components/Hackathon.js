import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@material-ui/core';
import Test from '../test';
import basinlake from '../Assets/basinlakes.jpg';
import OctoDashthumbnail from '../Assets/OctoDashthumbnail.jpg';

const HackathonsPage = () => {
    const hackathons = [
        {
            title: 'APEC & Google Asia 2020 App Challenge | 3rd Place',
            image: OctoDashthumbnail,
            link: 'https://devpost.com/software/octodash',
            description:<ul>
                <li>Became the first ever US team to podium in the international APEC 2020 App Challenge by building the smart inventory management web application Octodash.</li>
                <li>Octodash uses machine learning to predict inventory levels against COVID cases to reduce waste, and was built using React.js, Node.js, and Google Cloud Platform.</li>
                </ul>,
            date: 'October 10, 2022',
        },
        {
            title: 'Hackathon 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: 'November 15, 2022',
        },
        // Add more hackathons as needed
    ];

    return (
        <div style={{backgroundImage: `url(${basinlake})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
            <Grid container style={{width: '80%'}}>
                {hackathons.map((hackathon, index) => (
                    <Grid item xs={12} key={index} style={{margin: '1rem'}}>
                        <Card>
                            <Grid container>
                                <Grid item xs={3} style={{alignItems: 'center', justifyContent: 'center'}}>
                                    <a href={hackathon.link} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '70%', margin:'1rem'}}>
                                        <CardMedia
                                            image={hackathon.image}
                                            title={hackathon.title}
                                            style={{width: '100%', height: '100%'}}
                                        />
                                    </a>
                                </Grid>
                                <Grid item xs = {1}></Grid>
                                <Grid item xs={8}>
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
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default HackathonsPage;
