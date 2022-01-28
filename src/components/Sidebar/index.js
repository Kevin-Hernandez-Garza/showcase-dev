import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    //   triggering events
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              {/* hamburger menu */}
              <SidebarMenu>
                  {/* toggle events added to links */}
                  <SidebarLink to='/about' onClick={toggle}>
                      About
                  </SidebarLink>
                  <SidebarLink to='/projects' onClick={toggle}>
                      Projects
                  </SidebarLink>
                  <SidebarLink to='/contact' onClick={toggle}>
                      Contact
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
};

export default Sidebar;
