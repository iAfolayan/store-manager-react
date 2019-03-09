import React from 'react';
import PropTypes from 'prop-types';
import './InputForm.scss';
import InlineError from '../../helpers/InlineError';

const InputForm = ({ label, text, type, name, value, onChange, placeholder, error }) => (
  <div className="form-group">
    <label htmlFor={label} className="text-sm-left">
      {text}
    </label>
    <input
className="col col-md-12 form-control" text={text} name={name} value={value} placeholder={placeholder} type={type} onChange={onChange}
/>
    {error && <InlineError className="text-danger" text={error} />}
  </div>
);

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

InputForm.defaultProps = {
  error: '',
  onChange: null
};

export default InputForm;
