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
                    <Subtitle>A motivated programmer and recent graduate who went through a rigorous six-month program at <i>The University of Texas at Austin</i>. Gained the skillset to become a successful developer by learning the building blocks of web development and the MERN stack. Determined to become a skilled Software Engineer by implementing best practices and collaborating with inspiring people.</Subtitle>
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
