import React from 'react';

import  {
    CardContainer, 
    Image, 
    CardBody, 
    Heading,
    Description
} from './ProjectElements';

const Project = ({ img, alt, title, description, github, deployed }) => {
return <>
    <CardContainer className="card">
    <Image src={img} className="card-img-top" alt={alt} />
    <CardBody className="card-body">
    <Heading className="card-title">{title}</Heading>
    <Description className="card-text">{description}</Description>
    <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">GitHub</a>
    <a href={deployed} className="btn btn-primary" target="_blank" rel="noreferrer">Deployed</a>
    </CardBody>
    </CardContainer>
</>;
};

export default Project;