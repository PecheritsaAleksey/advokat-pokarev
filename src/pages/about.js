import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allPrismicAbout {
        nodes {
          data {
            about_text {
              html
            }
            avatar {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const { about_text, avatar } = data.allPrismicAbout.nodes[0].data;

  const image = getImage(avatar);

  return (
    <Layout pathname={location.pathname}>
      <Seo title={"Адвокат Покарев"} />
      <div className="container">
        <div className="main-item">
          <GatsbyImage image={image} alt={"Адвокат Покарев"} />
        </div>
        <div className="main-item flex-column">
          <h3 dangerouslySetInnerHTML={{ __html: about_text.html }}></h3>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
