import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ArticleHeader from '../components/ArticleHeader';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Header />
      <main role="main">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <article key={post.id} id={post.frontmatter.path.slice(1, -1)}>
                <Link to={post.frontmatter.path}>
                  <ArticleHeader
                    caption={post.frontmatter.caption}
                    date={post.frontmatter.date}
                    cat={post.frontmatter.cat}
                    title={post.frontmatter.title}
                    client={post.frontmatter.client}
                  />
                  <div className="img">
                    <Img
                      sizes={post.frontmatter.image.childImageSharp.fluid}
                      alt={`Eurogroupe Gregory Dapra Laure Giletti ${post.frontmatter.title}`}
                    />
                  </div>
                </Link>
              </article>
            );
          })}
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY")
            path
            caption
            cat
            client
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 85) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
