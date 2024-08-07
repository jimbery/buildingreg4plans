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
  // font-family: "Andale Mono";
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Align items with space-between */
  align-items: center;
  position: relative; /* Add position relative */
  padding-top: 85px;
`;

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
<<<<<<< HEAD
  height: 500px; /* Default height */
=======
  height: 30rem; /* Set the desired height */
>>>>>>> 34fd1566dceffda78e85c75b2206105bfd05fdc2
  background-image: url(${bannerImage.src}); /* Use logo.src directly */
  background-size: cover; /* Crop the image to cover the container */
  background-position: center; /* Center the image */
  z-index: 0; /* Ensure the BackgroundImage is behind the Main component */
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Center vertically */
  justify-content: space-evenly; /* Align items with space-between */
  filter: grayscale(60%);

  @media (min-width: 1800px) {
    height: 525px; /* Increase height for screens 1800px and wider */
  }
`;

const TextOverlay = styled.div`
  position: relative;
  top: 50%; /* Position in the middle vertically */
  left: 2.5%; /* Position in the middle horizontally */
  text-align: left; /* Center align the text */
  color: white; /* Text color */
<<<<<<< HEAD
  font-size: calc(1em + 1vw); /* Font size */
  font-weight: bold;
=======
  font-size: 2rem; /* Font size */
>>>>>>> 34fd1566dceffda78e85c75b2206105bfd05fdc2
  max-width: 50%;
  max-height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); /* Text shadow for better readability */
  z-index: 2; /* Ensure the text is above the background image */
`;

const TextParagraph = styled.p`
<<<<<<< HEAD
  font-size: calc(0.25em + 1vw); /* Set text size to 1.5rem */
  font-weight: normal;
=======
  font-size: 1.2rem; /* Set text size to 1.5rem */
>>>>>>> 34fd1566dceffda78e85c75b2206105bfd05fdc2
`;

const Rhs = styled.div`
  position: relative; /* Position absolutely within the Container */
  top: 0;
  right: 0;
  height: 25rem; /* Set the desired height */
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
  return (
    <Container>
      <BackgroundImage />
      <Main>
        <TextOverlay>
<<<<<<< HEAD
          <h2>Streamline your Building Regs Specifications with our Premium service</h2>
=======
          <h2>Streamline your Building Regs Specifications
            with our Premium service</h2>
>>>>>>> 34fd1566dceffda78e85c75b2206105bfd05fdc2
          <TextParagraph>Register Now for our Library of 1500+ Building Regs Specifications & 900+ Detail Drawings for Extensions, Loft Conversions, Flat Conversions, New Builds, Garage Conversions, Garage Builds, New Build Flats & Basement Conversions</TextParagraph>
          <GetStarted>Get Started</GetStarted>
        </TextOverlay>
        <Rhs>
          <SearchInput placeholder='Search...'></SearchInput>
          <PartnerLogos>
<<<<<<< HEAD
            <Image src={GuildPartnerImage} alt="Logo" width={150}/>
            <Image src={CheckATradePartnerImage} alt="Logo" width={300} layout="fixed"/>
=======
            <Image src={GuildPartnerImage} alt="Logo" width={150} />
            <Image src={CheckATradePartnerImage} alt="Logo" width={300} layout="fixed" />
>>>>>>> 34fd1566dceffda78e85c75b2206105bfd05fdc2
          </PartnerLogos>
        </Rhs>
      </Main>
    </Container>
  );
};

export default MainP;
