import React from 'react';
import coverImage from '../../assets/me.jpg';

function About() {
    return (
        <section>
            <h1 className='text-center'>Get To Know ME</h1>
            <img src={coverImage} style={{ width: "100%" }} alt='headshot of Kevin Hernandez' />
        </section>
    );
}

export default About;
