import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import bgImage from '../images/darkWood_verticalSlats.jpg';

const ImageBackground = styled.div`
  background-image: url(${bgImage});
  background-size: cover;

  & + * {
    margin-top: 0;
  }
`;

const TextBox = styled.div`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    top-margin: 0;
    color: #222;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {

  return (
    <ImageBackground>
      <TextBox>
        <h1>Gatsby Play!</h1>
        <p>This might be a real blog someday. Probably not. But, it might ...</p>
        <Link to="/about">Learn More &rarr;</Link>
      </TextBox>
    </ImageBackground>
  );
}

export default Hero;
