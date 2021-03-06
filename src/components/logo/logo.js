import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const logo = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fixed(width: 234) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  const { childImageSharp: imageSharpData } = logo.file;

  return (
    <Link to="/posts/">
      <Img fixed={imageSharpData.fixed} fadeIn={false} alt="Ciaran McAuley logo" />
    </Link>
  );
};

export default Logo;
