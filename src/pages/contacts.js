import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      allPrismicContact {
        nodes {
          data {
            address {
              text
            }
            email {
              text
            }
            phone {
              text
            }
          }
        }
      }
    }
  `);

  const { address, email, phone } = data.allPrismicContact.nodes[0].data;

  return (
    <Layout pathname={location.pathname}>
      <Seo title={"Адвокат Покарев"} />
      <div className="container">
        <div className="contact-item flex-column">
          <h2>Контакты</h2>
          <a href={`tel:${phone.text}`}>{phone.text}</a>
          <a href={`mailto:${email.text}`}>{email.text}</a>
        </div>
        <div className="contact-item flex-column">
          <h2>Адрес</h2>
          <p>{address.text}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactsPage;
