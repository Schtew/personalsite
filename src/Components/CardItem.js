import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const CardItem = ({ item }) => {
    return (
        <div style={{ margin: '1rem', display: 'flex', alignSelf: 'stretch' }}>
            <Card style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ flexBasis: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', padding: '1rem', paddingRight: '0' }}>
                    <a href={item.link} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', margin: '1rem' }}>
                        <CardMedia
                            component="img"
                            image={item.image}
                            title={item.title}
                            style={{ maxHeight: '250px', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </a>
                </div>
                <div style={{ flexBasis: '70%' }}>
                    <CardContent>
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