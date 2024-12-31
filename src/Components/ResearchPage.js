import React from 'react';
import CardItem from './CardItem';
import cradlelake from '../Assets/cradlelake.jpg';
import Excelthumbnail from '../Assets/Excelthumbnail.png';
import uist from '../Assets/UIST.png';

const ResearchsPage = () => {
    const researchs = [
        {
            title: 'VDAT | Dr. Jennifer Kim',
            image: uist,
            link: 'https://programs.sigchi.org/uist/2023/program/content/126776',
            description: <ul>
                <li>Developed a Unity VR application for individuals with ID/DD which simulates real-world job requirements, both socially and professionally, and provides feedback via a web interface.</li>
                <li>Coordinating with Korean development team remotely to collaborate on front end data visulization in Vue.</li>
                <li>Paper published in UIST 2023</li>
            </ul>,
            date: 'August, 2022 - December, 2022',
        },
        {
            title: 'Inclusive Higher Education | Dr. Jennifer Kim',
            image: Excelthumbnail,
            link: 'https://excel.gatech.edu/home',
            link: 'https://excel.gatech.edu/home',
            description: <ul>
                <li>Working with Dr. Kim to develop an AI generative content transformation tool for intellectually disabled students in Georgia Tech's Excel program.</li>
                <li>Organizing accross multiple domains at Georgia Tech to obtain training data and domain expert advice.</li>
                </ul>,
            date: 'January, 2024 - Present',
        },
        // Add more researchs as needed
    ];

    return (
        <div style={{ backgroundImage: `url(${cradlelake})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
                {researchs.map((research, index) => (
                    <CardItem key={index} item={research} />
                ))}
            </div>
        </div>
    );
};

export default ResearchsPage;