import React from 'react';
// importing my own picture 
import coverImage from '../../assets/me.jpg';

function About() {
    return (
        <section className='my-5'>
            <h1 className='text-center'>Get To Know ME</h1>
            {/* fix width for profile picture */}
            <img src={coverImage} style={{ width: "100%" }} alt='headshot of Kevin Hernandez' />
        </section>
    );
}

export default About;
