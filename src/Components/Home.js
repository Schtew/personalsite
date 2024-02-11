import React from 'react';
import Test from '../test';
import fiordlandsImage from '../Assets/fiordlands.jpg';
import headshot from '../Assets/headshot.jpg';
import { Card, CardContent, Typography, LinearProgress } from '@material-ui/core';
import resume from '../Assets/resume.png';

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${fiordlandsImage})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Card style={{width:'80%' }}>
                <CardContent style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{width: '30%', height: '30%', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem', marginLeft: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={headshot} alt="Profile" style={{maxWidth: '100%', maxHeight: '100%', minWidth: '50%', minHeight: '50%', objectFit: 'cover'}} />
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
                <Card style={{ flex: 1, width: '70%' }}>
                    <CardContent>
                        <Typography variant="h5" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                            Technical Skills
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ width: '30%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                                    Web Dev
                                </Typography>
                                <div style={{ flex: 1 }}>
                                    <Typography color="textSecondary">JavaScript</Typography>
                                    <LinearProgress variant="determinate" value={90} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Typography color="textSecondary">React.js</Typography>
                                    <LinearProgress variant="determinate" value={80} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Typography color="textSecondary">Node.js</Typography>
                                    <LinearProgress variant="determinate" value={80} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Typography color="textSecondary">TypeScript</Typography>
                                    <LinearProgress variant="determinate" value={70} />
                                </div>
                            </div>
                            <div style={{ width: '30%' }}>
                                <Typography variant="h6" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                                    Data
                                </Typography>
                                <Typography color="textSecondary">Python</Typography>
                                <LinearProgress variant="determinate" value={90} />
                                <Typography color="textSecondary">NumPy</Typography>
                                <LinearProgress variant="determinate" value={80} />
                                <Typography color="textSecondary">TensorFlow</Typography>
                                <LinearProgress variant="determinate" value={80} />
                                <Typography color="textSecondary">Pandas</Typography>
                                <LinearProgress variant="determinate" value={70} />
                                <Typography color="textSecondary">NoSQL</Typography>
                                <LinearProgress variant="determinate" value={70} />
                            </div>
                            <div style={{ width: '30%' }}>
                                <Typography variant="h6" component="h3" style={{ fontFamily: "Lora", textAlign: 'center' }}>
                                    Tooling
                                </Typography>
                                <Typography color="textSecondary">Git</Typography>
                                <LinearProgress variant="determinate" value={90} />
                                <Typography color="textSecondary">AWS</Typography>
                                <LinearProgress variant="determinate" value={70} />
                                <Typography color="textSecondary">Google Cloud</Typography>
                                <LinearProgress variant="determinate" value={60} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Home;
