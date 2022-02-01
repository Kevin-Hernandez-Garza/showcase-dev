import React from 'react';
import { FaBars } from 'react-icons/fa';
import { TiLeaf as SmallImg} from 'react-icons/ti';
// importing the animateScroll from react-scroll
import { animateScroll as scroll } from 'react-scroll';
// importing styling
import {  
    Nav, 
    NavContainer,
    NavLogo, 
    NavLink, 
    NavMenu,
    MobileIcon,
    NavItem,
    NavImg
} from './NavElements';

const Navbar = ({ toggle }) => {

    //  scroll to top function if the user clicks on the logo
    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
      <>
        <Nav>
            <NavContainer>
                <NavLogo to='/' onClick={toggleHome}>Kevin Hernandez</NavLogo>
                <NavImg to='/' onClick={toggleHome}> <SmallImg /></NavImg>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                {/* nav menu */}
                <NavMenu>
                <NavItem>
                    <NavLink 
                    to="about" 
                    smooth={true} 
                    duration={0}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass='active'
                    >
                    About
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink 
                    to="projects"
                    smooth={true} 
                    duration={0}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass='active'
                    >
                    Projects
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink 
                    to="contact" 
                    smooth={true} 
                    duration={0}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass='active'
                    >
                    Contact
                    </NavLink>
                </NavItem>
            </NavMenu>
            </NavContainer>
        </Nav>
      </>
  );
};

export default Navbar;

