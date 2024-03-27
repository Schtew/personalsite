import React from 'react';
import Test from '../test';
import fiordlandsImage from '../Assets/fiordlands.jpg';
import headshot from '../Assets/headshot.jpg';
import { Card, CardContent, Typography, LinearProgress } from '@material-ui/core';
import resume from '../Assets/resume.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${fiordlandsImage})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Card style={{width:'80%' }}>
                <CardContent style={{display: 'flex', alignItems: 'center'}}>
                <div style={{ width: '30%', height: '30%', minWidth: '100px', minHeight: '100px', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem', marginLeft: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={headshot} alt="Profile" style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '50%' }} />
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
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                                    Machine Learning
                                </Typography>
                                <List>
                                    <ListItem>
                                    <Typography color="textSecondary">Python (NumPy, TensorFlow, PyTorch, Pandas)</Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Typography color="textSecondary">NoSQL (MongoDB, Firebase)</Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Typography color="textSecondary">MySQL</Typography>
                                    </ListItem>
                                </List>
                                </div>
                                <div style={{ width: '100%' }}>
                                <Typography variant="h6" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                                    OOP
                                </Typography>
                                <List>
                                    <ListItem>
                                    <Typography color="textSecondary">Java</Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Typography color="textSecondary">C#</Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Typography color="textSecondary">Kotlin</Typography>
                                    </ListItem>
                                </List>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                                    Web Dev
                                </Typography>
                                <List>
                                    <ListItem>
                                    <Typography color="textSecondary">JavaScript (React, Node.js, Express.js)</Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Typography color="textSecondary">TypeScript (AWS CDK)</Typography>
                                    </ListItem>
                                </List>
                                </div>
                                <div style={{ width: '100%' }}>
                                <Typography variant="h6" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                                    Tooling
                                </Typography>
                                <List>
                                    <ListItem>
                                    <Typography color="textSecondary">Git</Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Typography color="textSecondary">AWS (Lambda, CDK)</Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Typography color="textSecondary">Google Cloud (Maps API, Firebase)</Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Typography color="textSecondary">Postman (RESTful API testing)</Typography>
                                    </ListItem>
                                </List>
                                </div>
                            </div>
                            </div>
                    </CardContent>
                </Card>
                <Card style={{ width: '20%'}}>
                    <CardContent>
                        <Typography variant="h5" component="h3" style={{"font-family": "Lora", textAlign: 'center'}}>
                            Relevant Course Work
                        </Typography>
                        <Typography color="textSecondary">
                            <a href='https://gtvault-my.sharepoint.com/:b:/g/personal/amelone3_gatech_edu/EcbEdiNaQSFLqiBfSKHXSJgBiplYiAXWVHU-UvaMW-WmKA?e=IenWE1'>
                                <img src={resume} alt="resume" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}} />
                            </a>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Home;
