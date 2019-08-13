import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import "../style/mystyles.scss"

const Breadcrumbs = ({ items = [], className = '' }) => (
  <section className={`breadcrumb ${className}`}>
    <ul>
      {items.length > 0 && items.map((item, index) => (
        <li key={index} className={index === items.length - 1 ? 'is-active' : ''}>
          <Link to={item.link}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

Breadcrumbs.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
};

export default Breadcrumbs