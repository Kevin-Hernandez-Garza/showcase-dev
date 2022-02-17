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
// import { animateScroll as scroll } from 'react-scroll';

import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { TiLeaf } from 'react-icons/ti';

// importing the useNavigate hook
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    // useNavigate hook to navigate to different components
    let navigate = useNavigate();

    return (
    <FooterContainer className='mt-auto'>
      <FooterWrap>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/showcase-dev' onClick={() => {
                    navigate('/showcase-dev');
                }}> 
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
