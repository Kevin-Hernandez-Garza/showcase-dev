import React from 'react';
// importing the homepage jumbotron
import coverImage from '../../assets/jumbotron.jpeg';

function Home() {
    return (
        <section className='my-5'>
            <img src={coverImage} style={{ width: "100%" }} alt='jumbotron' />
        </section>
    );
}

export default Home;