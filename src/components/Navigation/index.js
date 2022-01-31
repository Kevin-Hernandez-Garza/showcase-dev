import React from 'react';
import { FaBars } from 'react-icons/fa';
import { TiLeaf as SmallImg} from 'react-icons/ti';
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
  return (
      <>
        <Nav>
            <NavContainer>
                <NavLogo to='/'>Kevin Hernandez</NavLogo>
                <NavImg to='/'> <SmallImg /></NavImg>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                {/* nav menu */}
                <NavMenu>
                <NavItem>
                    <NavLink to="about" >
                        About
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="projects" >
                        Projects
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="contact" >
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

