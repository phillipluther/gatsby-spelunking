/** @jsx jsx */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1.2rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }
`;

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 900px) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      {siteTitle}
    </NavLink>

    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <ul
        css={css`
          display: flex;
          list-style: none;
        `}
      >
        <li>
          <NavLink to="/" activeClassName="current-page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="current-page">About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
