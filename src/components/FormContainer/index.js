import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './FormContainer.scss';
import Logo from './images/logo.png';


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className="wrapper-body d-flex">
        <div className="wrapper">
          <img src={Logo} alt="Logo" />
          <h1 className="app-name">{ title }</h1>
          <Fragment>{children}</Fragment>
        </div>
      </div>
    );
  }
}

FormContainer.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

FormContainer.defaultProps = {
  children: null,
  title: ''
}

export default FormContainer;
