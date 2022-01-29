import React, { useState } from 'react';
import Video from '../../assets/videos/hero.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroBtnWrapper,
    HeroP,
    ArrowForward,
    ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

  return(
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </HeroBg>
          <HeroContent>
          <HeroP>
          Full-stack Web Developer who recently earned a certificate in Web Development from The University of Texas at Austin, with newly developed skills in JavaScript, CSS, HTML, React.js, and responsive web design. I am ambitious in facing problems head-on and learning new technologies, with a focus on mobile-first design and development. Excited to leverage my skills to become a skilled Software Engineer.
          </HeroP>
          <HeroBtnWrapper>
              <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} 
              primary='true'
              dark='true'
              >
                  Learn More { hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
          </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
  );
};

export default HeroSection;
