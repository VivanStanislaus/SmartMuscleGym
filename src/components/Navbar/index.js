import React, {useState, useEffect} from "react";
import {animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";


const Navbar = ({ toggle }) => {
  const[scrollNavX, setScrollNavX]= useState(false);

  const changeNavX = ()=>{
    if(window.scrollY >=80){
      setScrollNavX(true);
    }
    else{
      setScrollNavX(false);
    }

  
    
  };
  useEffect(()=>{
    window.addEventListener('scroll', changeNavX);
  },[]);

  const[scrollNavY, setScrollNavY]= useState(false);

  const changeNavY = ()=>{
    if(window.scrollY >= 400){
      setScrollNavY(true);
    }
    else{
      setScrollNavY(false);
    }

  
    
  };
  useEffect(()=>{
    window.addEventListener('scroll', changeNavY);
  },[]);

  const toggleHome = ()=>{
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNavX={scrollNavX}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Smart Muscle Gym</NavLogo>
          <MobileIcons onClick={ toggle }>
            
            <FaBars />
          </MobileIcons>
          <NavMenu>
          <NavItem>
              <NavLinks disabled={true}></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="About" smooth={true} duration={500} spy={true} exact ='true' offset={-80}>About</NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks to="Workout" smooth={true} duration={500} spy={true} exact ='true' offset={-80}>Workout</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Timings" smooth={true} duration={500} spy={true} exact ='true' offset={-80} >Timings</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Packages" smooth={true} duration={500} spy={true} exact ='true' offset={-80}>Packages</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/signin" scrollNavY={scrollNavY}> Join now </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
