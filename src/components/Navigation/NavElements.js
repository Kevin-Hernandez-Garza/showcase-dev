import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


// storing styled components
// the whole navbar styling 
export const Nav  = styled.nav`
    background: #000;
    display: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc(( 100vw - 1000px ) / 2);
    z-index: 10;
`

// individual links styling 
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color: #15cdfc;
    }
`

// hamburger menu styling
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

// navMenu styling
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
