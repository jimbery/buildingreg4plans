'use client'

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import bannerImage from '~/app/assets/home/banner_image.jpg'
import GuildPartnerImage from '~/app/assets/home/Guild-Emblem-Transparent.png'
import CheckATradePartnerImage from '~/app/assets/home/checkatrade-com-strapline-1-1024x486.png'

const colors = {
  primary: '#283149', // Dark blue
  secondary: '#FACF39', // Orange
  accent: '#3A476A', // Blue / grey
};

const Container = styled.div`
  font-family: "Andale Mono";
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Align items with space-between */
  align-items: center;
  position: relative; /* Add position relative */
  padding-top: 85px;

`;

// const Main = styled.main`
//   width: 100%;
// `;



// const FullWidthImage = styled(Image)`
//   height: 400px; /* Maintain aspect ratio */
//   object-fit: cover; /* Crop the image to cover the specified width and height */
//   background-size: cover; /* Crop the image to cover the container */

// `;

// const BackgroundImage = styled.div`
//   width: 100%;
//   height: 400px; /* Set the desired height */
//   background-image: url(${logo.src});
//   background-position: center; /* Center the image */
//   background-size: cover; /* Crop the image to cover the container */
//   `;

// const Image = styled.img`
//   height: 50px; /* Adjust height as needed */
// `

const GetStarted = styled.button`
  background-color: ${colors.accent};
  border-radius: 25px;
  box-shadow: inset 0 0 0 1px ${colors.accent};
  color: white;
  font-weight: 700;
  padding: 1rem 1.5rem;
  border: none;
  cursor: pointer;
  transition-property: background-color;
  font-size: 1.0rem;
  max-width: 150px;

  &:hover {
    background-color: ${colors.primary}; /* Change background color on hover */
    color: #fff; /* Change text color on hover */
    box-shadow: inset 0 0 0 1px ${colors.primary};
  }
`;


const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-right: 3rem;
  width: 400px;
  border: 3px solid white;
  border-radius: 20px;
  background-color: transparent;
  border-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
  color: white;
  font-weight: 700;
  font-size: 1.0rem;
  float: right;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for better readability */
  &::placeholder {
    color: white;
}
`;



const Main = styled.main`
  width: 100%;
  position: relative; /* Add position relative */
  z-index: 1; /* Ensure the Main component is above the BackgroundImage */
  display: flex; /* Use flexbox for layout */
  flex-direction: row;
  justify-content: space-between;
`;

const BackgroundImage = styled.div`
  position: absolute; /* Position absolutely within the Container */
  top: 0;
  left: 0;
  width: 100%;
  height: 500px; /* Set the desired height */
  background-image: url(${bannerImage.src}); /* Use logo.src directly */
  background-size: cover; /* Crop the image to cover the container */
  background-position: center; /* Center the image */
  z-index: 0; /* Ensure the BackgroundImage is behind the Main component */
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Center vertically */
  justify-content: space-evenly; /* Align items with space-between */
  filter: grayscale(60%);
`;

const TextOverlay = styled.div`
  position: relative;
  top: 50%; /* Position in the middle vertically */
  left: 2.5%; /* Position in the middle horizontally */
  // transform: translate(-50%, -50%); /* Center the element */
  text-align: left; /* Center align the text */
  color: white; /* Text color */
  font-size: calc(1em + 1vw); /* Font size */
  max-width: 50%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // overflow: hidden;
  // font-weight: bold; /* Font weight */
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); /* Text shadow for better readability */
  z-index: 2; /* Ensure the text is above the background image */
  // overflow: hidden; /* Hide overflow to ensure text stays within container */
`;

const TextParagraph = styled.p`
  font-size: calc(0.5em + 1vw); /* Set text size to 1.5rem */
`;

const Rhs = styled.div`
  position: relative; /* Position absolutely within the Container */
  top: 0;
  right: 0;
  height: 400px; /* Set the desired height */
  z-index: 2; /* Ensure the BackgroundImage is behind the Main component */
  display: flex; /* Use flexbox for layout */
  flex-direction: column;
  justify-content: space-between; /* Align items with space-between */
`;

const PartnerLogos = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Align items with space-between */
`;

const MainP = () => {
  const handleClick = () => {
    // Handle button click
  };

  return (
    <Container>
            <BackgroundImage />

      <Main>
      <TextOverlay>
          <h2>Streamline your Building Regs Specifications
with our Premium service</h2>
          <TextParagraph>Register Now for our Library of 1500+ Building Regs Specifications & 900+ Detail Drawings for Extensions, Loft Conversions, Flat Conversions, New Builds, Garage Conversions, Garage Builds, New Build Flats & Basement Conversions</TextParagraph>
          <GetStarted>Get Started</GetStarted> 
        </TextOverlay>
        <Rhs>
        <SearchInput placeholder='Search...'></SearchInput>
        <PartnerLogos>
        <Image src={GuildPartnerImage} alt="Logo" width={150}/>
        <Image src={CheckATradePartnerImage} alt="Logo" width={300} layout="fixed"/>
        </PartnerLogos>
        </Rhs>
 
        {/* <Button onClick={handleClick}>Click Me</Button> */}
      </Main>
    </Container>
  );
};

export default MainP;
