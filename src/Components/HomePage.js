import React from 'react';
import Test from '../test';
import fiordlandsImage from '../Assets/fiordlands.jpg';
import headshot from '../Assets/headshot.jpg';
import { Card, CardContent, Typography, LinearProgress, makeStyles } from '@material-ui/core';
import resume from '../Assets/resume.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        backgroundImage: `url(${fiordlandsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2)
    },
    mainCard: {
        width: '90%',
        maxWidth: '1200px',
        marginBottom: theme.spacing(2)
    },
    profileSection: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            textAlign: 'left'
        }
    },
    profileImageContainer: {
        width: '200px',
        height: '200px',
        minWidth: '150px',
        minHeight: '150px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage: {
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
        borderRadius: '50%'
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        maxWidth: '1200px',
        gap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'stretch'
        }
    },
    resumeCard: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20%'
        }
    },
    skillsCard: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            flex: 1
        }
    },
    courseCard: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20%'
        }
    },
    heading: {
        fontFamily: "Lora",
        textAlign: 'center'
    },
    skillsSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'flex-start',
        width: '100%'
    },
    skillHeading: {
        fontFamily: "Lora",
        marginTop: theme.spacing(1)
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.pageContainer}>
                <Card className={classes.mainCard}>
                    <CardContent>
                        <div className={classes.profileSection}>
                            <div className={classes.profileImageContainer}>
                                <img src={headshot} alt="Profile" className={classes.profileImage} />
                            </div>
                            <div>
                                <Typography variant="h5" component="h2" className={classes.heading}>
                                    Hello! Welcome to my website.
                                </Typography>
                                <Typography color="textSecondary">
                                    My name is Aiden Melone. I'm Georgia Tech computer science alumni that specialized in human computer interaction and machine learning. My personal philosophy regarding computer science is that while it's great to understand how to make something, it's just as important to understand who you're making something for. This site is meant to illustrate the technical experiences I have accrued in my adult life against a backdrop of one of my favorite hobbies: backpacking. Send me an email and let's chat!
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className={classes.cardsContainer}>
                    <Card className={classes.resumeCard}>
                        <CardContent>
                            <Typography variant="h5" component="h3" className={classes.heading}>
                                Resume
                            </Typography>
                            <Typography color="textSecondary">
                                <a href='https://gtvault-my.sharepoint.com/:b:/g/personal/amelone3_gatech_edu/EcbEdiNaQSFLqiBfSKHXSJgBiplYiAXWVHU-UvaMW-WmKA?e=IenWE1'>
                                    <img src={resume} alt="resume" style={{ width: '100%', height: 'auto' }} />
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.skillsCard}>
                        <CardContent>
                            <Typography variant="h5" component="h3" className={classes.heading}>
                                Technical Skills
                            </Typography>
                            <div className={classes.skillsSection}>
                                <Typography variant="h6" component="h3" className={classes.skillHeading}>
                                    Machine Learning
                                </Typography>
                                <Typography color="textSecondary" className='textSecondaryList'>
                                    Python (NumPy, TensorFlow, PyTorch, LangChain, Hugging Face, Pandas), NoSQL (MongoDB, Firebase), MySQL
                                </Typography>
                                <Typography variant="h6" component="h3" className={classes.skillHeading}>
                                    OOP
                                </Typography>
                                <Typography color="textSecondary" className='textSecondaryList'>
                                    Java, C#, Kotlin, Python
                                </Typography>
                                <Typography variant="h6" component="h3" className={classes.skillHeading}>
                                    Web Dev
                                </Typography>
                                <Typography color="textSecondary" className='textSecondaryList'>
                                    JavaScript (React, Node.js, Express.js), TypeScript (AWS CDK), HTML, CSS, Flask
                                </Typography>
                                <Typography variant="h6" component="h3" className={classes.skillHeading}>
                                    Tooling
                                </Typography>
                                <Typography color="textSecondary" className='textSecondaryList'>
                                    Git, AWS (Lambda, CDK), Google Cloud (Maps API, Firebase), Postman (RESTful API testing), Linux (HiveOS)
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className={classes.courseCard}>
                        <CardContent>
                            <Typography variant="h5" component="h3" className={classes.heading}>
                                Course Work
                            </Typography>
                            <List text-align='center'> 
                                {[
                                    'Machine Learning',
                                    'Deep Learning',
                                    'Artificial Intelligence',
                                    'Data Structures and Algorithms',
                                    'Object-Oriented Programming',
                                    'Human-Computer Interaction',
                                    'Cognitive Science'
                                ].map((course) => (
                                    <ListItem key={course}>
                                        <Typography color="textSecondary">
                                            {course}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Home;