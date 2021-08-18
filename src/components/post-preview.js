/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';
import ReadLink from './read-link';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article
    css={css`
      display: flex;
      border-bottom: 1px solid #ddd;
      padding-bottom: 1rem;
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>Read More &raquo;</ReadLink>
    </div>
  </article>
)

export default PostPreview;
