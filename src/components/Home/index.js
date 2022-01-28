import React from 'react';
import coverImage from '../../assets/jumbotron.jpeg';

function Home() {
    return (
        <section>
            <img src={coverImage} style={{ width: "100%" }} alt='jumbotron' />
        </section>
    );
}

export default Home;