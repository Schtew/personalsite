import CardItem from './CardItem';
import amazon from '../Assets/amazon.png';
import fleeke from '../Assets/fleeke2.jpg';
import MRP from '../Assets/MRPthumbnail.png';

const ProfessionsPage = () => {

    const professions = [
        {
            title: 'Amazon | Software Development Engineer Intern',
            image: amazon,
            link: 'https://www.amazon.com',
            description: (
                <ul>
                    <li>Onboarded internal teams and built infrastructure for the customer facing notification hub in the Amazon Alexa Developer Console.</li>
                    <li>Required internal communication and coordination among various independent internal teams.</li>
                    <li>Technologies Involved: TypeScript, AWS (CDK, Lambda, EventBridge)</li>
                </ul>
            ),
            date: 'May, 2022 - August, 2022',
        },
        {
            title: 'MRP Capital Investment | Cryptocurrency Mining Infrastructure Developer',
            image: MRP,
            link: 'https://mrpci.com/',
            description: (
                <ul>
                    <li>Developed cryptocurrency (Ethereum) mining infrastructure for a local capital investment firm.</li>
                    <li>Managed tens of thousands of dollars in infrastructure, becoming responsible for the whole of 1.5GH/s mining operation.</li>
                </ul>
            ),
            date: 'April 2021 - December 2022',
        },
        // Add more professions as needed
    ];

    return (
        <div style={{ 
            backgroundImage: `url(${fleeke})`, 
            backgroundSize: 'cover', 
            backgroundAttachment: 'fixed',
            width: '100%', 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: 0, 
            padding: 0 }}>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
                {professions.map((profession, index) => (
                    <CardItem key={index} item={profession} />
                ))}
            </div>
        </div>
    );
};

export default ProfessionsPage;