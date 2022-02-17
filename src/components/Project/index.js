import React from 'react';

const Project = (props) => {
    // inserting the projects section
    const projects = ([{
            img: require('../../assets/images/group-mock.png'), 
            alt: 'git-a-recipe application', 
            title: 'Git-A-Recipe', 
            description: 'Looking for a great meal for tonight!?', 
            github: "https://github.com/Kevin-Hernandez-Garza/recipe-app", 
            deployed: "https://adamromano89.github.io/recipe-app/"
        },
        {
            img: require('../../assets/images/group-2.png'), 
            alt: 'fragrance e-commerce store', 
            title: 'BM Fragrance', 
            description: 'All perfumes and colognes in one place!', 
            github: "https://github.com/Kevin-Hernandez-Garza/group-2", 
            deployed: "https://byteme-ecommerce.herokuapp.com/"
        },
        {
            img: require('../../assets/images/horiseon-mockup.png'), 
            alt: 'business firm', 
            title: 'Horiseon', 
            description: 'Business mock web application', 
            deployed: "https://kevin-hernandez-garza.github.io/Horiseon-Refactor-Marketing-Site/", 
            github: "https://github.com/Kevin-Hernandez-Garza/Horiseon-Refactor-Marketing-Site"
        },
        {
            img: require('../../assets/images/runBuddy-mockup.png'), 
            alt: 'personal trainer', 
            title: 'Run Buddy', 
            description: 'Need a personal trainer!?', 
            github: "https://github.com/Kevin-Hernandez-Garza/recipe-app", 
            deployed: "https://adamromano89.github.io/recipe-app/"
        },
        {
            img: require('../../assets/images/webpage-screenshot.png'), 
            alt: 'first website', 
            title: 'My Journey', 
            description: 'My first ever web application', 
            github: "https://github.com/Kevin-Hernandez-Garza/firstproj", 
            deployed: "https://kevin-hernandez-garza.github.io/firstproj/"
        },
        {
            img: require('../../assets/images/coming-soon.jpeg'), 
            alt: 'under construction', 
            title: 'Coming Soon', 
            description: 'Under construction!', 
            github: "https://github.com/Kevin-Hernandez-Garza", 
            deployed: "https://github.com/Kevin-Hernandez-Garza"
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