'use client'

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import logo from '~/app/assets/common/LOGO.bmp'

// Define the color palette
const colors = {
  primary: '#283149', // Dark blue
  secondary: '#FACF39', // Orange
  accent: '#3A476A', // Blue / grey
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 100%; /* Ensure full width */
  background-color: ${colors.primary}; /* Apply background color */
  z-index: 3;
  position: fixed;
  overflow: hidden;
  // background-color: #333;
  top: 0;
`;

const Header = styled.header`
  display: flex; /* Use flexbox layout */
  justify-content: space-between; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  color: #fff;
  padding: 1rem 0;
  top: 0;
  // position: fixed;
`;

const NavOptions = styled.nav`
  display: flex;
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
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  align: right;
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

  &:hover {
    background-color: #fff; /* Change background color on hover */
    color: ${colors.primary}; /* Change text color on hover */
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

  &:hover {
    background-color: ${colors.secondary}; /* Change background color on hover */
    color: ${colors.primary}; /* Change text color on hover */
  }
`;

const LogoContainer = styled.div`
  padding-left: 15px;
`

const HeaderP = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
        <Image src={logo} alt="Logo" width={300}/>

        </LogoContainer>
        <NavOptions>
          <NavOption href="#">Home</NavOption>
          <NavOption href="#">Specificiation</NavOption>
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
