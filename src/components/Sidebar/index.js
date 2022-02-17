import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements';

// importing useNavigate hook
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {

    let navigate = useNavigate();

    return (
        // triggering events
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              {/* hamburger menu */}
              <SidebarMenu>

                <SidebarLink to='/about' onClick={() => {
                    navigate('/about');
                }}>
                    ABOUT
                </SidebarLink>

                <SidebarLink to='/projects' onClick={() => {
                    navigate('/projects');
                }}>
                    PROJECTS
                </SidebarLink>

                <SidebarLink to='/contact' onClick={() => {
                    navigate('/contact');
                }}>
                    CONTACT
                </SidebarLink>

              </SidebarMenu>
          </SidebarWrapper>
        </SidebarContainer>
    )
};

export default Sidebar;
