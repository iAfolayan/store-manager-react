import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './FormContainer.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Logo from './images/logo.png';


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, children } = this.props;
    return (
      <Fragment>
        <ToastContainer autoClose={5000} />
        <div className="wrapper-body d-flex">
          <div className="wrapper">
            <img src="./images/logo.png" alt="Logo" />
            <h1 className="app-name">{ title }</h1>
            <Fragment>{children}</Fragment>
          </div>
        </div>
      </Fragment>
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
