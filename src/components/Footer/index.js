import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { TiLeaf } from 'react-icons/ti';



const Footer = () => {

      //  scroll to top function if the user clicks on the logo
      const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
  <FooterContainer>
      <FooterWrap>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}> 
                    < TiLeaf />
                </SocialLogo>
            <WebsiteRights>Kevin Hernandez-Garza © {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
                <SocialIconLink href='https://www.linkedin.com/in/kevin-hernandez-garza/' target='_blank' aria-label='LinkedIn'>
                < FaLinkedinIn />
                </SocialIconLink>
                <SocialIconLink href='https://github.com/Kevin-Hernandez-Garza' target='_blank' aria-label='Github'>
                <BsGithub />
                </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
  </FooterContainer>
  )
};

export default Footer;
