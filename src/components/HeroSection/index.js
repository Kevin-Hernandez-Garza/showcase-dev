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
          Hello World..
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
