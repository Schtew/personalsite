import React from 'react';
import '../fiordlands.jpg';
import Test from '../test';
import fiordlandsImage from '../fiordlands.jpg';
import headshot from '../headshot.jpg';
import { Card, CardContent, Typography } from '@material-ui/core';

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${fiordlandsImage})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Card style={{width:'80%' }}>
                <CardContent style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{width: '30%', height: '30%', borderRadius: '50%', overflow: 'hidden', marginRight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={headshot} alt="Profile" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}} />
                    </div>
                    <div>
                        <Typography variant="h5" component="h2" style={{"font-family": "Lora"}}>
                            Hello! Welcome to my website.
                        </Typography>
                        <Typography color="textSecondary">
                            My name is Aiden Melone and I'm a computer science student at Georgia Tech soon graduating with threads in people and intelligence by May 2024. My personal philosophy regarding computer science is that while it's great to understand how to make something, it's just as important to understand who you're making something for- which is why I'm also seeking a minor in psychology.
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Home;
