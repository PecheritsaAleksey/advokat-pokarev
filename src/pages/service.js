import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ServicePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allPrismicService {
        nodes {
          data {
            layout {
              gatsbyImageData
            }
            services {
              html
            }
          }
        }
      }
    }
  `);

  const { services, layout } = data.allPrismicService.nodes[0].data;

  const image = getImage(layout);

  return (
    <Layout pathname={location.pathname}>
      <Seo title={"Адвокат Покарев"} />
      <div className="container">
        <div className="service-layout">
          <GatsbyImage image={image} alt={"Адвокат Покарев"} />
        </div>
        <div
          className="service-contaiter flex-column"
          dangerouslySetInnerHTML={{ __html: services.html }}
        ></div>
      </div>
    </Layout>
  );
};

export default ServicePage;
