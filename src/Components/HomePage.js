import React from 'react';
import fiordlandsImage from '../Assets/fiordlands.jpg';
import headshot from '../Assets/headshot.jpg';
import { Card, CardContent, Typography } from '@material-ui/core';
import resume from '../Assets/resume.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import '../App.css';
import '../index.css';

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="homepage-container">
                <Card className="profile-card">
                    <CardContent className="profile-card-content">
                        <div className="profile-image-container">
                            <img src={headshot} alt="Profile" className="profile-image" />
                        </div>
                        <div>
                            <Typography variant="h5" component="h2" className="profile-title">
                                Hello! Welcome to my website.
                            </Typography>
                            <Typography color="textSecondary">
                                My name is Aiden Melone. I'm Georgia Tech computer science alumni that specialized in human computer interaction and machine learning. My personal philosophy regarding computer science is that while it's great to understand how to make something, it's just as important to understand who you're making something for. This site is meant to illustrate the technical experiences I have accrued in my adult life against a backdrop of one of my favorite hobbies: backpacking. Send me an email and let's chat!
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
                <div className="cards-container">
                    <Card className="info-card">
                        <CardContent>
                            <Typography variant="h5" component="h3" className="info-card-title">
                                Resume
                            </Typography>
                            <Typography color="textSecondary">
                                <a href='https://gtvault-my.sharepoint.com/:b:/g/personal/amelone3_gatech_edu/EcbEdiNaQSFLqiBfSKHXSJgBiplYiAXWVHU-UvaMW-WmKA?e=IenWE1'>
                                    <img src={resume} alt="resume" className="resume-image" />
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className="info-card">
                        <CardContent>
                            <Typography variant="h5" component="h3" className="info-card-title">
                                Technical Skills
                            </Typography>
                            <div className="skills-list">
                                <Typography variant="h6" component="h3" className="skill-title">
                                    Machine Learning
                                </Typography>
                                <Typography color="textSecondary" className='textSecondaryList'>Python (NumPy, TensorFlow, PyTorch, Pandas), NoSQL (MongoDB, Firebase), MySQL</Typography>
                                <Typography variant="h6" component="h3" className="skill-title">
                                    OOP
                                </Typography>
                                <Typography color="textSecondary" className='textSecondaryList'>Java, C#, Kotlin, Python</Typography>
                                <Typography variant="h6" component="h3" className="skill-title">
                                    Web Dev
                                </Typography>
                                <Typography color="textSecondary" className='textSecondaryList'>JavaScript (React, Node.js, Express.js), TypeScript (AWS CDK), HTML, CSS, Flask</Typography>
                                <Typography variant="h6" component="h3" className="skill-title">
                                    Tooling
                                </Typography>
                                <Typography color="textSecondary" className='textSecondaryList'>Git, AWS (Lambda, CDK), Google Cloud (Maps API, Firebase), Postman (RESTful API testing), Linux (HiveOS)</Typography>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="info-card">
                        <CardContent>
                            <Typography variant="h5" component="h3" className="info-card-title">
                                Course Work
                            </Typography>
                            <List>
                                <ListItem>
                                    <Typography color="textSecondary" className='textSecondaryList'>
                                        Machine Learning
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="textSecondary" className='textSecondaryList'>
                                        Deep Learning
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="textSecondary" className='textSecondaryList'>
                                        Artificial Intelligence
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="textSecondary" className='textSecondaryList'>
                                        Data Structures and Algorithms
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="textSecondary" className='textSecondaryList'>
                                        Object-Oriented Programming
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="textSecondary" className='textSecondaryList'>
                                        Human-Computer Interaction
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="textSecondary" className='textSecondaryList'>
                                        Cognitive Science
                                    </Typography>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Home;