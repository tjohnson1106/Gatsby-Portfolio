import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

import SocialLinks from "../constants/socialLinks";

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          # fragment
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info"></article>
        <div className="">
          <div className="underline">
            <h1>Thomas Johnson</h1>
            <h3>web and mobile developer</h3>
            <Link to="contact" className="btn">
              contact
            </Link>
            <SocialLinks />
          </div>
        </div>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
