'use client'

import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';

// import logo from './LOGO.bmp'

// Define the color palette
const colors = {
  primary: '#283149', // Dark blue
  secondary: '#FACF39', // Orange
  accent: '#3A476A', // Blue / grey
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  // position: absolute;
  bottom: 0;
  width: 100%
`;

const Footer = styled.footer`
  background-color: ${colors.secondary};
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  z-index: 1; /* Ensure the Main component is above the BackgroundImage */
`;

const FooterP = () => {
  return (
    <Container>
      <Footer>
        <p>&copy; 2024 BuildingRegs4Plans</p>
      </Footer>
    </Container>
  );
};

export default FooterP;
