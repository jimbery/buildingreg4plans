'use client'

import React from 'react';
import styled from 'styled-components';

// Define the color palette
const colors = {
  primary: '#283149', // Dark blue
  secondary: '#FACF39', // Orange
  accent: '#3A476A', // Blue / grey
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  `;

const Content = styled.div`
  flex: 1; /* Take up the remaining space */
`;

const FooterContainer = styled.div`
  width: 100%;
`;

const Footer = styled.footer`
  background-color: ${colors.secondary};
  padding: 1rem 0;
  width: 100%;
  text-align: center;
`;

const FooterP = () => {
  return (
    <PageContainer>
      <Content>
        {/* Your main content goes here */}
      </Content>
      <FooterContainer>
        <Footer>
          <p>&copy; 2024 BuildingRegs4Plans</p>
        </Footer>
      </FooterContainer>
    </PageContainer>
  );
};

export default FooterP;
