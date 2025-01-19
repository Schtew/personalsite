import React from 'react';
import { Card, CardContent, Typography, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        margin: '1rem 0',
        display: 'flex',
        width: '100%'
    },
    card: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            // alignItems: 'flex-start'  // Changed from 'stretch' to prevent image stretching
            minHight: '250px'  // Match card height better
        }
    },
    mediaContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            width: '30%',
            minWidth: '30%',
            alignSelf: 'stretch', // Make container full height of card
            display: 'flex',
            alignItems: 'center' // Ensure vertical centering
        }
    },
    mediaLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '1rem',
        [theme.breakpoints.up('md')]: {
            paddingRight: 0
        }
    },
    media: {
        width: '100%',
        maxHeight: '200px',
        objectFit: 'contain', // Prevent image stretching
        [theme.breakpoints.up('md')]: {
            maxHeight: '250px'  // Slightly larger on desktop to match card height better
        }
    },
    contentContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(2)
        }
    }
}));

const CardItem = ({ item }) => {
    const classes = useStyles();

    return (
        <div className={classes.cardWrapper}>
            <Card className={classes.card}>
                <div className={classes.mediaContainer}>
                    <a 
                        href={item.link} 
                        className={classes.mediaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CardMedia
                            component="img"
                            image={item.image}
                            title={item.title}
                            className={classes.media}
                        />
                    </a>
                </div>
                <div className={classes.contentContainer}>
                    <CardContent className={classes.content}>
                        <Typography variant="h6" component="h2">
                            {item.title}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {item.date}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {item.description}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default CardItem;