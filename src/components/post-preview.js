/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;
    `}
  >
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>Read More &raquo;</ReadLink>
  </article>
)

export default PostPreview;
