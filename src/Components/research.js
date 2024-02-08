import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Test from '../test';

const researchPage = () => {
    const research = [
        {
            title: 'research 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'October 10, 2022',
        },
        {
            title: 'research 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: 'November 15, 2022',
        },
        // Add more research as needed
    ];

    return (
        <><Test />
        <Grid container spacing={3}>
            {research.map((research, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {research.title}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {research.date}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {research.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </>
    );
};

export default researchPage;
