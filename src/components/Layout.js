import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import './index.css';

const TemplateWrapper = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: `${data.site.siteMetadata.description}`
            },
            {
              name: 'og:title',
              content: `${data.site.siteMetadata.title}`
            },
            {
              name: 'og:description',
              content: `${data.site.siteMetadata.description}`
            },
            {
              name: 'twitter:title',
              content: `${data.site.siteMetadata.title}`
            },
            {
              name: 'twitter:description',
              content: `${data.site.siteMetadata.description}`
            }
          ]}
        />
        {children}
      </>
    )}
  />
);

export default TemplateWrapper;
