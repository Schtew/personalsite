import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const HackathonsPage = () => {
    const hackathons = [
        {
            title: 'Hackathon 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        <Grid container spacing={3}>
            {hackathons.map((hackathon, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {hackathon.title}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {hackathon.date}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {hackathon.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default HackathonsPage;
