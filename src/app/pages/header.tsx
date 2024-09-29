'use client'

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '~/app/assets/common/LOGO.bmp';
import logoSmall from '~/app/assets/common/LOGO-SMALL.bmp';

// Define the color palette
const colors = {
  primary: '#283149', // Dark blue
  secondary: '#FACF39', // Orange
  accent: '#3A476A', // Blue / grey
};

const Container = styled.div`
  // font-family: Arial, sans-serif;
  width: 100%; /* Ensure full width */
  background-color: ${colors.primary}; /* Apply background color */
  z-index: 3;
  position: fixed;
  overflow: hidden;
  top: 0;
`;

const Header = styled.header`
  display: flex; /* Use flexbox layout */
  justify-content: space-between; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  color: #fff;
  padding: 1rem 0;
  top: 0;
  width: 100%;
`;


interface NavOptionsProps {
  open: boolean;
}

const NavOptions = styled.nav<NavOptionsProps>`
  display: flex;

  @media (max-width: 1000px) {
    display: ${props => (props.open ? 'block' : 'none')};
    position: fixed;
    top: 80px;
    left: 0;
    background-color: ${colors.primary};
    width: 200px;
    height: 370px; /* Full viewport height */
    padding: 1rem;
    z-index: 1000; /* Ensure it is above other content */
    overflow-y: auto; /* Add scroll if content overflows */
  }
const NavOptions = styled.nav`
display: flex;
justify-content: flex-start; /* Distribute items evenly along the main axis */
flex-grow: 1; /* Allow the navigation options to take up available space */
`;

const NavOption = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.3s ease;
  font-size: 0.9rem; /* Reduced text size */
  &:hover {
    color: #f0f0f0; /* Lighter shade of text color */
  }

  @media (max-width: 1000px) {
    display: block;
    margin: 10px 0;
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    justify-content: flex-end;
    width: 100%;
  }
  align: right;
  max-width: 20%;
`;

const AuthButton = styled.button`
  background-color: #0000;
  border-radius: 25px;
  box-shadow: inset 0 0 0 1px #fff;
  color: #fff;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition-property: background-color;
  font-size: 0.8rem;
  max-width: 10rem;

  &:hover {
    background-color: #fff; /* Change background color on hover */
    color: ${colors.primary}; /* Change text color on hover */
  }

  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;

const AuthButton2 = styled.button`
  background-color: #0000;
  border-radius: 25px;
  box-shadow: inset 0 0 0 1px ${colors.secondary};
  color: ${colors.secondary};
  font-weight: 700;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition-property: background-color;
  font-size: 0.8rem;
  max-width: 10rem;

  &:hover {
    background-color: ${colors.secondary}; /* Change background color on hover */
    color: ${colors.primary}; /* Change text color on hover */
  }

  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;

const LogoContainer = styled.div`
  padding-left: 15px;
  display: flex;
  align-items: center;
`;

const LogoLarge = styled(Image)`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const LogoSmall = styled(Image)`
  display: block;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    padding-right: 20px;
  }
`;
  max-width: 20%;
`

const HeaderP = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoLarge src={logo} alt="Logo" width={300} />
          <LogoSmall src={logoSmall} alt="LogoSmall" width={60} />
          <Image src={logo} alt="Logo" width={300} />
        </LogoContainer>
        <Hamburger onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        <NavOptions open={menuOpen}>
          <NavOption href="#">Home</NavOption>
          <NavOption href="#">Specification</NavOption>
          <NavOption href="#">Detail drawings</NavOption>
          <NavOption href="#">Mobile app</NavOption>
          <NavOption href="#">3D details</NavOption>
          <NavOption href="#">Guidance</NavOption>
          <NavOption href="#">Support</NavOption>
          <NavOption href="#">Building regs</NavOption>
          <NavOption href="#">Blog</NavOption>
          <NavOption href="#">Contacts</NavOption>
        </NavOptions>
        <AuthSection>
          <AuthButton>Login</AuthButton>
          <AuthButton2>Register</AuthButton2>
        </AuthSection>
      </Header>
    </Container>
  );
};

export default HeaderP;
