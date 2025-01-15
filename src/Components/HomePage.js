import React from 'react';
import Test from '../test';
import fiordlandsImage from '../Assets/fiordlands.jpg';
import headshot from '../Assets/headshot.jpg';
import { Card, CardContent, Typography, LinearProgress } from '@material-ui/core';
import resume from '../Assets/resume.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import '../App.css';

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
        <div style={{backgroundImage: `url(${fiordlandsImage})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Card style={{width:'80%' }}>
                <CardContent style={{display: 'flex', alignItems: 'center'}}>
                <div style={{ width: '30%', height: '30%', minWidth: '150px', minHeight: '150px', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem', marginLeft: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={headshot} alt="Profile" style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                    <div>
                        <Typography variant="h5" component="h2" style={{"font-family": "Lora"}}>
                            Hello! Welcome to my website.
                        </Typography>
                        <Typography color="textSecondary">
                        My name is Aiden Melone. I'm Georgia Tech computer science alumni that specialized in human computer interaction and machine learning. My personal philosophy regarding computer science is that while it's great to understand how to make something, it's just as important to understand who you're making something for. This site is meant to illustrate the technical experiences I have accrued in my adult life against a backdrop of one of my favorite hobbies: backpacking. Send me an email and let's chat! 
                        </Typography>
                    </div>
                </CardContent>
            </Card>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '2rem', width: '80%'}}>
                <Card style={{marginRight: '1rem', width: '20%'}}>
                    <CardContent>
                        <Typography variant="h5" component="h3" style={{"font-family": "Lora", textAlign: 'center'}}>
                            Resume 
                        </Typography>
                        <Typography color="textSecondary">
                            <a href='https://gtvault-my.sharepoint.com/:b:/g/personal/amelone3_gatech_edu/EcbEdiNaQSFLqiBfSKHXSJgBiplYiAXWVHU-UvaMW-WmKA?e=IenWE1'>
                                <img src={resume} alt="resume" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}} />
                            </a>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{ flex: 1, width: '40%', marginRight: '1rem' }}>
                    <CardContent>
                        <Typography variant="h5" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                            Technical Skills
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'flex-end', width: '100%' }}>
                        <Typography variant="h6" component="h3" style={{ fontFamily: "Lora"}}>
                            Machine Learning
                        </Typography>
                        <Typography color="textSecondary" className='textSecondaryList'>Python (NumPy, TensorFlow, PyTorch, LangChain, Hugging Face, Pandas), NoSQL (MongoDB, Firebase), MySQL</Typography>
                        <Typography variant="h6" component="h3" style={{ fontFamily: "Lora"}}>
                            OOP
                        </Typography>
                        <Typography color="textSecondary" className='textSecondaryList'>Java, C#, Kotlin, Python</Typography>
                        <Typography variant="h6" component="h3" style={{ fontFamily: "Lora"}}>
                            Web Dev
                        </Typography>
                        <Typography color="textSecondary" className='textSecondaryList'>JavaScript (React, Node.js, Express.js), TypeScript (AWS CDK), HTML, CSS, Flask</Typography>
                        <Typography variant="h6" component="h3" style={{ fontFamily: "Lora" }}>
                            Tooling
                        </Typography>
                        <Typography color="textSecondary" className='textSecondaryList'>Git, AWS (Lambda, CDK), Google Cloud (Maps API, Firebase), Postman (RESTful API testing), Linux (HiveOS)</Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ width: '20%'}}>
                    <CardContent>
                        <Typography variant="h5" component="h3" style={{"font-family": "Lora", textAlign: 'center'}}>
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
