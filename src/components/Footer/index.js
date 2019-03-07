import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ footerClassName }) => (
  <div className={footerClassName}>
    <span>@ 2018 - Andela Developer Challenge</span>
  </div>
);

Footer.prototype = {
  footerClassName: PropTypes.string.isRequired
}

export default Footer;
