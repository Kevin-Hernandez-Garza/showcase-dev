import React from 'react';
// importing the homepage jumbotron
import coverImage from '../assets/images/jumbotron.jpeg';

function Home() {
    return (
        <section className='my-5'>
            <img className='jumbotron' src={coverImage} style={{ width: "100%" }} alt='jumbotron' />

            <p>
            A Full-stack Web Developer who earned a certificate in Web Development from The University of Texas at Austin, with newly developed skills in JavaScript, CSS, HTML, React.js, and responsive web design. I am ambitious in facing problems head-on and learning new technologies, with a focus on mobile-first design and development. I’m excited to leverage my skills to become a skilled Software Engineer. Let the journey begin !
            </p>
        </section>
    );
}

export default Home;
