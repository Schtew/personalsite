import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="path_to_headshot_image" alt="Headshot" style={{ width: '200px', marginRight: '20px' }} />
                <p>Your biography goes here...</p>
            </div>
        </div>
    );
};

export default Home;
