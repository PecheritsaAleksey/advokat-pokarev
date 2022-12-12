import * as React from "react";
import { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const PracticePage = ({ location }) => {
  const [selectedType, setSelectedType] = useState("arbitration");

  const data = useStaticQuery(graphql`
    query PracticeQuery {
      allPrismicPractice {
        nodes {
          data {
            type
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
      <div className="practice-type-select">
        <button className={selectedType === "arbitration" ? "active" : ""} onClick={() => setSelectedType("arbitration")}>
          Арбитражные
        </button>
        <button className={selectedType === "civil" ? "active" : ""} onClick={() => setSelectedType("civil")}>Гражданские</button>
        <button className={selectedType === "criminal" ? "active" : ""} onClick={() => setSelectedType("criminal")}>Уголовные</button>
      </div>
      <div className="container flex-column">
        {practicesData.map((data) => {
          const { name, result, link, type } = data.data;
          if (type === selectedType)
            return (
              <div className="practice-item flex-column">
                <h2>{name.text}</h2>
                <h3>{result.text}</h3>
                <h4>
                  <a href={link.url}>Просмотреть решение</a>
                </h4>
              </div>
            );
          return null;
        })}
      </div>
    </Layout>
  );
};

export default PracticePage;
