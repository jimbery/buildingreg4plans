'use client'

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import HouseTechnicalDraw from '~/app/assets/home/house-technical-draw-20382137.webp';
import GarageTechnicalDraw from  '~/app/assets/home/Detached-Garage-Plans-2.png';
import LoftTechnicalDraw from '~/app/assets/home/loft-draw.png';

const Container = styled.div`
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Main = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px; /* Add padding for better spacing */
`;

const SectionTitle = styled.div`
  font-size: 2.2rem;
  text-align: center;
  color: #283149;
  padding: 20px 0;
  font-weight: bold;
`;

const SectionDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px; /* Add margin for better spacing */
`;

const TileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: space-between; /* Center items vertically */
  text-align: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */
`;

const TileImage = styled(Image)`
  border-radius: 8px;
`;

const TileTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #283149;
  margin-bottom: 15px;
`;

const HyperlinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Hyperlink = styled.button`
color: black; /* Secondary color */
border: 2px solid black; /* Secondary color */
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
transition: color 0.3s ease, border-color 0.3s ease;

&:hover {
  color: #FFD166; /* Lighter shade of secondary color */
  border-color: #FFD166; /* Lighter shade of secondary color */
}
`;

const EngRegs = () => {
  return (
    <Container>
      <Main>
        <SectionTitle>Building Regs Specifications and Detail Drawings</SectionTitle>
        <SectionDiv>
          <TileDiv>
            <TileTitle>House Extension</TileTitle>
            <TileImage src={HouseTechnicalDraw} alt="House Extension" width={200} height={150} />
            <HyperlinkContainer>
              <Hyperlink>England</Hyperlink>
              <Hyperlink>Wales</Hyperlink>
            </HyperlinkContainer>
          </TileDiv>
          <TileDiv>
            <TileTitle>Loft Conversion</TileTitle>
            <TileImage src={LoftTechnicalDraw} alt="Loft Conversion" width={200} height={150} />
            <HyperlinkContainer>
              <Hyperlink>England</Hyperlink>
              <Hyperlink>Wales</Hyperlink>
            </HyperlinkContainer>
          </TileDiv>
          <TileDiv>
            <TileTitle>Garage Conversion</TileTitle>
            <TileImage src={GarageTechnicalDraw} alt="Garage Conversion" width={200} height={150} />
            <HyperlinkContainer>
              <Hyperlink>England</Hyperlink>
              <Hyperlink>Wales</Hyperlink>
            </HyperlinkContainer>
          </TileDiv>
        </SectionDiv>
      </Main>
    </Container>
  );
};

export default EngRegs;

