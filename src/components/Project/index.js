import React from 'react';

const Project = (props) => {
    // inserting the projects section
    const projects = ([{
            img: require('../../assets/images/group-mock.png'), 
            alt: 'git-a-recipe application', 
            title: 'Git-A-Recipe', 
            description: 'Are you HUNGRY?',
            technologies: 'skills: HTML, CSS, JavaScript, MaterializeUI, Server-Side API', 
            github: "https://github.com/Kevin-Hernandez-Garza/recipe-app", 
            deployed: "https://adamromano89.github.io/recipe-app/"
        },
        {
            img: require('../../assets/images/group-2.png'), 
            alt: 'fragrance e-commerce store', 
            title: 'BM Fragrance', 
            description: 'Fragrance Store', 
            technologies: 'skills: HTML, CSS, JavaScript, MySQL, Handlebars.js, RESTapi, Bootstrap.js',
            github: "https://github.com/Kevin-Hernandez-Garza/BM-E-Commerce-Project", 
            deployed: "https://byteme-ecommerce.herokuapp.com/"
        },
        {
            img: require('../../assets/images/justawear-mock.png'), 
            alt: 'clothing store', 
            title: 'Just-A-Wear', 
            description: 'Clothing Store', 
            technologies: 'skills: HTML, CSS, JavaScript, React.js, GraphQL, Stripe, JWTs, Mongoose, TailwindCSS',
            deployed: "https://github.com/Kevin-Hernandez-Garza/justAwear", 
            github: "https://justawear-mern.herokuapp.com/"
        },
        {
            img: require('../../assets/images/runBuddy-mockup.png'), 
            alt: 'personal trainer', 
            title: 'Run Buddy', 
            description: 'Need a personal trainer!?', 
            technologies: 'skills: HTML, CSS',
            github: "https://github.com/Kevin-Hernandez-Garza/run-buddy", 
            deployed: "https://kevin-hernandez-garza.github.io/run-buddy/"
        },
        {
            img: require('../../assets/images/webpage-screenshot.png'), 
            alt: 'first website', 
            title: 'The Start of My Coding Journey',
            technologies: 'skills: HTML, CSS book by Jon Duckett',
            description: 'My first ever web application', 
            github: "https://github.com/Kevin-Hernandez-Garza/firstproj", 
            deployed: "https://kevin-hernandez-garza.github.io/firstproj/"
        },
        {
            img: require('../../assets/images/portfolioV1.png'), 
            alt: 'my online resume', 
            title: 'Portfolio V1', 
            description: 'My portfolio V1', 
            technologies: 'skills: HTML, CSS, Bootstrap.js',
            github: "https://github.com/Kevin-Hernandez-Garza/fullStack-WebDev", 
            deployed: "https://kevin-hernandez-garza.github.io/fullStack-WebDev/"
        },
    ]);

    return (
    <div className='project-section row'>
        {projects.map((projects, i) => (
        <div className="card col-4">
        <img src={projects.img} className="card-img-top" alt={projects.alt} />
        <div className="card-body">
            <h2 className="card-title">{projects.title}</h2>
            <p className="card-text">{projects.description}</p>
            <p className="card-text">{projects.technologies}</p>
        </div>
        <div className="card-body">
            <a href={projects.github} className="card-link badge" target="_blank" rel='noreferrer'>Github</a>
            <a href={projects.deployed} className="card-link badge" target="_blank" rel='noreferrer'>Deployed</a>
        </div>
        </div>
        ))};
    </div>
)};

export default Project;