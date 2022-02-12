import React from 'react';
// styled components ** REFACTOR SO ALL CSS STYLES ARE IN THE APP.CSS FILE **
// import  {
//     CardContainer, 
//     Image, 
//     CardBody, 
//     Heading,
//     Description
// } from './ProjectElements';

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
            // fix
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
            description: 'Looking for a great meal for tonight!?', 
            github: "https://github.com/Kevin-Hernandez-Garza", 
            deployed: "https://github.com/Kevin-Hernandez-Garza"
        },
    ]);

    // return <>
    // {projects.map((item, index ) => {
    //     <CardContainer key={index} className="card">
    //     <Image src={item.img} className="card-img-top" alt={item.alt} />
    //     <CardBody className="card-body">
    //     <Heading className="card-title">{item.title}</Heading>
    //     <Description className="card-text">{item.description}</Description>
    //     <a href={item.github} className="btn btn-primary" target="_blank" rel="noreferrer">GitHub</a>
    //     <a href={item.deployed} className="btn btn-primary" target="_blank" rel="noreferrer">Deployed</a>
    //     </CardBody>
    //     </CardContainer>
    // })}
    // </>;

    return (
    <div className='project-section'>
        <div className="flex-row">
            {projects.map((projects, i) => (
                <img 
                src={projects.img}  //.default
                alt={projects.alt}
                key={i}
                className='project-to'
                />
            ))}
        </div>
    </div>
    )
};

export default Project;