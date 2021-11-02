import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
          <Link to="home" >
            <NavLogo to='/' onClick={closeMobileMenu}>
              <img src="logo.png" alt="" width="130px" height="65px"/>
              <span>THE SOL TRADERS CLUB</span>
            </NavLogo>
            </Link>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
              <Link to="home" >
                <NavLinks to='/' onClick={closeMobileMenu}>
                  HOME
                </NavLinks>
                </Link>
              </NavItem>
              <NavItem>
              <Link to="story" ><NavLinks to='/story'onClick={closeMobileMenu} >
                  STORY
                </NavLinks></Link>
              </NavItem>
              <NavItem>
              <Link to="mint" ><NavLinks to='/mint' onClick={closeMobileMenu} >
                  MINT
                </NavLinks></Link>
              </NavItem>
              
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
