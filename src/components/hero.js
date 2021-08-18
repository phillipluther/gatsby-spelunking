import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;

  & + * {
    margin-top: 0;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 2rem calc((100vw - 720px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    color: white;
  }

  p,
  a {
    top-margin: 0;
    color: white;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "darkWood_verticalSlats.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Gatsby Play!</h1>
        <p>This might be a real blog someday. Probably not. But, it might ...</p>
        <Link to="/about">Learn More &rarr;</Link>
      </TextBox>
    </ImageBackground>
  );
}

export default Hero;
