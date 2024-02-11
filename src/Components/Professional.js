// import React from 'react';
// import { Card, CardContent, Typography, CardMedia} from '@material-ui/core';
// import Test from '../test';


// const professionsPage = () => {
//     const professions = [
//         {
//             title: 'Amazon',
//             image: OctoDashthumbnail,
//             link: 'www.amazon.com',
//             description:<ul>
//                 <li>Onboarded internal teams and built infrastructure for the customer facing notification hub in the Amazon Alexa Developer Console.</li>
//                 <li>Required internal communication and coordination among various independent internal teams.</li>
//                 <li>Technologies Involved: Unity, Vue, C#, SQL.</li>
//                 </ul>,
//             date: 'October, 2020',
//         },
//         {
//             title: 'Experimental Flights',
//             image: ProTrackerThumbnail,
//             link:  'https://www.youtube.com/watch?v=sI2oEntH-_Y',
//             description: <ul>
//                 <li>Worked with 3 other GT students and 1 Emory student to create the accessible contact tracing web application for schools ProTracker. (MERN Stack)</li>
//                 <li>Worked Primarily on front-end user experience (React.js), designing logos (Photoshop), and connecting backend features (Node) to the front end.</li>
//                 </ul>,
//             date: 'January, 2021',
//         },
//         {
//             title: 'MRP Captial Investment',
//             image: ProTrackerThumbnail,
//             link:  'https://www.youtube.com/watch?v=sI2oEntH-_Y',
//             description: <ul>
//                 <li>Worked with 3 other GT students and 1 Emory student to create the accessible contact tracing web application for schools ProTracker. (MERN Stack)</li>
//                 <li>Worked Primarily on front-end user experience (React.js), designing logos (Photoshop), and connecting backend features (Node) to the front end.</li>
//                 </ul>,
//             date: 'January, 2021',
//         },
//         // Add more professions as needed
//     ];

//     return (
//         <div style={{backgroundImage: `url(${basinlake})`, backgroundSize: 'cover', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
//             <div style={{width: '80%', display: 'flex', flexDirection: 'column'}}>
//                 {professions.map((profession, index) => (
//                     <div key={index} style={{margin: '1rem', display: 'flex'}}>
//                         <Card style={{display: 'flex', justifyContent: 'space-between', minWidth: "100%"}}>
//                             <div style={{flexBasis: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem'}}>
//                                 <a href={profession.link} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '70%', margin:'1rem'}}>
//                                     <CardMedia
//                                         image={profession.image}
//                                         title={profession.title}
//                                         style={{width: '100%', height: '100%'}}
//                                     />
//                                 </a>
//                             </div>
//                             <div style={{flexBasis: '70%'}}>
//                                 <CardContent>
//                                     <Typography variant="h6" component="h2">
//                                         {profession.title}
//                                     </Typography>
//                                     <Typography color="textSecondary" gutterBottom>
//                                         {profession.date}
//                                     </Typography>
//                                     <Typography variant="body2" component="p">
//                                         {profession.description}
//                                     </Typography>
//                                 </CardContent>
//                             </div>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default professionsPage;