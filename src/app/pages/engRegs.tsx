'use client'

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import HouseTechnicalDraw from '../assets/home/house-technical-draw-20382137.webp';
import GarageTechnicalDraw from '../assets/home/Detached-Garage-Plans-2.png';
import LoftTechnicalDraw from '../assets/home/loft-draw.png';

const Container = styled.div`
  // font-family: Roboto, sans-serif;
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
  // max-height: 70rem;
  flex-grow: 1; /* Allow the navigation options to take up available space */

  // padding-top: 10px; /* Add padding for better spacing */
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
  justify-content: space-between;
  width: 90%;
  // margin: 1.5rempx; /* Add margin for better spacing */
  flex-wrap: wrap; /* Allow flex items to wrap onto multiple lines */
  // flex-grow: 1; /* Allow the navigation options to take up available space */
  align-items: center;
  // padding: 5rem;

`;

const TileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 20rem; /* Set minimum width for each tile */
  height: 20rem; /* Set minimum width for each tile */
  margin-bottom: 1rem; /* Add margin for spacing between tiles */
 
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  // flex-grow: 1; /* Allow tiles to grow to fill available space */
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
  justify-content: space-around;
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
          <TileDiv>
            <TileTitle>New Build</TileTitle>
            <TileImage src={GarageTechnicalDraw} alt="New Build" width={200} height={150} />
            <HyperlinkContainer>
              <Hyperlink>England</Hyperlink>
              <Hyperlink>Wales</Hyperlink>
            </HyperlinkContainer>
          </TileDiv>
          <TileDiv>
            <TileTitle>Flat Conversion</TileTitle>
            <TileImage src={GarageTechnicalDraw} alt="Flat Conversion" width={200} height={150} />
            <HyperlinkContainer>
              <Hyperlink>England</Hyperlink>
              <Hyperlink>Wales</Hyperlink>
            </HyperlinkContainer>
          </TileDiv>
          <TileDiv>
            <TileTitle>New Build Flats</TileTitle>
            <TileImage src={GarageTechnicalDraw} alt="New Build Flats" width={200} height={150} />
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

