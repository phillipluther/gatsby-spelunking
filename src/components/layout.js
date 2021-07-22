/** @jsx jsx */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css, jsx } from '@emotion/react';

import Header from './header';
import Seo from './seo';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            color: #555;
            font-family: sans-serif;
            font-size: 18px;
            margin: 0;
            line-height: 1.5;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Seo />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main
        css={css`
          margin: 2rem auto;
          width: 900px;
          max-width: 90vw;
        `}
      >{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
