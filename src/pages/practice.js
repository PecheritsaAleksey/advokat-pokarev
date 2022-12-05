import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const PracticePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query PracticeQuery {
      allPrismicPractice {
        nodes {
          data {
            name {
              text
            }
            result {
              text
            }
            link {
              url
            }
          }
        }
      }
    }
  `);

  const practicesData = data.allPrismicPractice.nodes;

  return (
    <Layout pathname={location.pathname}>
      <Seo title={"Адвокат Покарев"} />
      <div className="container flex-column">
        {practicesData.map((data) => {
          const { name, result, link } = data.data;
          return (
            <div className="practice-item flex-column">
              <h2>{name.text}</h2>
              <h3>{result.text}</h3>
              <h4>
                <a href={link.url}>Просмотреть решение</a>
              </h4>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default PracticePage;
