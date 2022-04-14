import React from 'react';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine, 
    Heading, 
    Subtitle,
    ImgWrap,
    Img
} from './AboutElements';
import imageMe from '../../assets/images/me.jpg';

const About = () => {
  return <>
    <InfoContainer>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                <TextWrapper>
                    <TopLine>About</TopLine>
                    <Heading>Hi, I'm Kevin</Heading>
                    <Subtitle>
                    Full-stack Web Developer who recently earned a certificate in Web Development from The University of Texas at Austin Coding Bootcamp, with newly developed skills in JavaScript, CSS, HTML, React.js, and responsive web design. I am ambitious in facing problems head-on and learning new technologies, focusing on mobile-first design and development. For example, I worked on a team of six to develop a single-page MERN application that helps users shop for apparel and checkout through the Stripe payment platform. I’m excited to leverage my skill set to become a skilled Software Engineer. Bringing value to user-centric products by implementing best practices and collaborating in a diverse environment.
                    </Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img  src={imageMe} alt="'A picture of myself'"/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  </>;
};

export default About;
