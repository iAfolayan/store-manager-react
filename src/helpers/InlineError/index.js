import React from 'react';
import PropTypes from 'prop-types';
import './InlineError.scss';

function InlineError({ text }) {
  return <span className="inlineError text-danger">{ text }</span>;
}
InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
