import React from 'react';
// importing styling
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu
} from './NavElements';

const Navbar = () => {
  return (
      <>
        <Nav>
            <NavLink to='/welcome'>
                <h1>Kevin Hernandez</h1>
            </NavLink>
            {/* hamburger menu */}
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/projects" activeStyle>
                    Projects
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
      </>
  );
};

export default Navbar;

