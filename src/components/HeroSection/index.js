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
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    let navigate = useNavigate();
    
    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

  return(
      <HeroContainer id='home'>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </HeroBg>
          <HeroContent>
          <HeroP>
          Hello World..
          </HeroP>
          <HeroBtnWrapper>
              <Button onClick={() => {navigate('/about')}} onMouseEnter={onHover} onMouseLeave={onHover} 
              primary='true'
              dark='true'
              smooth={true} 
            duration={0}
            spy={true}
            exact='true'
            offset={-80}
            activeClass='active'
              >
                  Learn More { hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
          </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
  );
};

export default HeroSection;
