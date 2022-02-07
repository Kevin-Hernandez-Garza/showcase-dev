import React from 'react';
import { FaBars } from 'react-icons/fa';
import { TiLeaf as SmallImg} from 'react-icons/ti';
// importing the animateScroll from react-scroll
// import { animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
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
    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // }

    // useNavigate to Route between components
    let navigate = useNavigate(); 


  return (
      <>
        <Nav>
            <NavContainer>
                <NavLogo to='/showcase-dev' onClick={() => {
                    navigate('/showcase-dev');
                }}>Kevin Hernandez</NavLogo>
                <NavImg to='/showcase-dev' onClick={() => {
                    navigate('/showcase-dev')
                }}> <SmallImg /></NavImg>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                {/* nav menu */}
                <NavMenu>
                <NavItem>
                    <NavLink 
                    // to="/about" 
                    // smooth={true} 
                    // duration={0}
                    // spy={true}
                    // exact='true'
                    // offset={-80}
                    // activeClass='active'

                    onClick={() => { navigate('/about');}}
                    >
                    About
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink 
                    // to="/projects"
                    // smooth={true} 
                    // duration={0}
                    // spy={true}
                    // exact='true'
                    // offset={-80}
                    // activeClass='active'

                    onClick={() => { navigate('/projects'); } }
                    >
                    Projects
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink 
                    // to="/contact" 
                    // smooth={true} 
                    // duration={0}
                    // spy={true}
                    // exact='true'
                    // offset={-80}
                    // activeClass='active'

                    onClick={() => { navigate('/contact');}}
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

