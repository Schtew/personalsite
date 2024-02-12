import React from 'react';
import { Card, CardContent, Typography, CardMedia} from '@material-ui/core';
import Test from '../test';
import amazon from '../Assets/amazon.png';
import fleeke from '../Assets/fleeke2.jpg';
import MRP from '../Assets/MRPthumbnail.png';


const professionsPage = () => {
    const professions = [
        {
            title: 'Amazon',
            image: amazon,
            link: 'www.amazon.com',
            description:<ul>
                <li>Onboarded internal teams and built infrastructure for the customer facing notification hub in the Amazon Alexa Developer Console.</li>
                <li>Required internal communication and coordination among various independent internal teams.</li>
                <li>Technologies Involved: TypeScript, AWS (CDK, Lambda, EventBridge)</li>
                </ul>,
            date: 'May, 2022 - August, 2022',
        },
        {
            title: 'MRP Captial Investment',
            image: MRP,
            link:  'https://mrpci.com/',
            description: <ul>
                <li>Developed cryptocurrency (Ethereum) mining infastructure for a local capital investment firm.</li>
                <li>Managed tens of thousands of dollars in infastructure, becoming responsible for the whole of 1.5GHz mining operation.</li>
                </ul>,
            date: 'April 2021 - December 2022',
        },
        // Add more professions as needed
    ];

    return (
        <div style={{backgroundImage: `url(${fleeke})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
            <div style={{width: '80%', display: 'flex', flexDirection: 'column'}}>
                {professions.map((profession, index) => (
                    <div key={index} style={{margin: '1rem', display: 'flex'}}>
                        <Card style={{display: 'flex', justifyContent: 'space-between', minWidth: "100%"}}>
                            <div style={{flexBasis: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem'}}>
                                <a href={profession.link} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '70%', margin:'1rem'}}>
                                    <CardMedia
                                        image={profession.image}
                                        title={profession.title}
                                        style={{width: '90%', height: '60%'}}
                                    />
                                </a>
                            </div>
                            <div style={{flexBasis: '70%'}}>
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {profession.title}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {profession.date}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {profession.description}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default professionsPage;