import React from 'react';
import { FaBars } from 'react-icons/fa';
import { TiLeaf as SmallImg} from 'react-icons/ti';
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
    // useNavigate to Route between components
    let navigate = useNavigate(); 

  return (
      <>
        <Nav>
            <NavContainer>
                <NavLogo className='nav-link' to='/showcase-dev' onClick={() => {
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
                    <NavLink className='nav-link' 
                    to="/about" 
                    onClick={() => { navigate('/about');}}
                    >
                    About
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-link' 
                    to="/projects"
                    onClick={() => { navigate('/projects'); } }
                    >
                    Projects
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-link' 
                    to="/contact" 
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

