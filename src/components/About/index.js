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
                    <Subtitle>Full-stack Web Developer who recently earned a certificate in Web Development from The University of Texas at Austin, with newly developed skills in JavaScript, CSS, HTML, React.js, and responsive web design. I am ambitious in facing problems head-on and learning new technologies, with a focus on mobile-first design and development. Excited to leverage my skills to become a skilled Software Engineer.</Subtitle>
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
