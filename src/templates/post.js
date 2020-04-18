import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function Post({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} - Eurogroupe`} />
      <article>
        <header>
          <h4>{post.frontmatter.date}</h4>
          <h4>{post.frontmatter.cat}</h4>
          <h4>{post.frontmatter.client}</h4>
          <h4 className="last">{post.frontmatter.title}</h4>
        </header>
        {/*<header>
            <p>
              {post.frontmatter.date} ● {post.frontmatter.cat} ●{' '}
              {post.frontmatter.client} ● {post.frontmatter.title}
            </p>
          </header>*/}
        <Link to={`/#${post.frontmatter.path.slice(1, -1)}`}>
          <div
            // ref={el => {
            //   this.markdownContainer = el;
            // }}
            style={{
              maxWidth: '100%',
            }}
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </Link>
      </article>
    </Layout>
  );
}

export const postQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY")
        path
        title
        client
        caption
        cat
      }
    }
  }
`;
