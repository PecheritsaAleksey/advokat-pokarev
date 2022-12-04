import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query MainQuery {
      allPrismicMain {
        nodes {
          id
          data {
            big_title {
              text
            }
            small_title {
              text
            }
            description {
              text
            }
            avatar {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const { big_title, small_title, description, avatar } =
    data.allPrismicMain.nodes[0].data;

  const image = getImage(avatar);

  return (
    <Layout pathname={location.pathname}>
      <Seo title={"Адвокат Покарев"} />
      <div className="container">
        <div className="main-item">
          <GatsbyImage image={image} alt={"Адвокат Покарев"} />
        </div>
        <div className="main-item flex-column">
          <h1>{big_title.text}</h1>
          <h3>{small_title.text}</h3>
        </div>
        <div className="main-item">
          <p>{description.text}</p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
