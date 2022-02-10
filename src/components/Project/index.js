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
            img: require('../../assets/images/group-mock.png'), 
            alt: 'git-a-recipe application', 
            title: 'Git-A-Recipe', 
            description: 'Looking for a great meal for tonight!?', 
            github: "https://github.com/Kevin-Hernandez-Garza/recipe-app", 
            deployed: "https://adamromano89.github.io/recipe-app/"
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