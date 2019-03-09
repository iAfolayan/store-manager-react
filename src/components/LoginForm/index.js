import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LogInValidator } from '../../helpers/validate';
import './LoginForm.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../../actions/authActions/authActions';
import InputForm from '../InputForms';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        staffId: '',
        password: ''
      },
      isLoading: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const errors = LogInValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    const { login } = this.props;
    login(user);
  }

  handleChange(event) {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({
      user
    });
  }

  render() {
    const { user, errors, isLoading } = this.state;
    const { authIsLoading } = this.props.auth;
    if (this.props.auth.isAuthenticated) { return <Redirect to="/products" />}
    return (
      <form onSubmit={this.handleSubmit}>
        <InputForm
          error={errors.staffId}
          text="StaffId"
          label="Staff Id"
          type="text"
          name="staffId"
          value={user.staffId.toUpperCase()}
          placeholder="Enter staff Id"
          onChange={this.handleChange}
      />
        <InputForm
          error={errors.password}
          text="Password"
          label="Password"
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter staff password"
          onChange={this.handleChange}
      />
        <div className="d-flex flex-row-reverse">
          <button onClick={this.handleChange} type="submit" className="btn btn-outline-primary login" disabled={authIsLoading ? isLoading: null}>{authIsLoading ? 'Loading...' : 'Login'}</button>
          <span className="d-flex align-items-center reset-password mt10">
Forget password? &nbsp;
            <Link to="/password"> Click here</Link>
          </span>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(userLogin(user))
});

const mapStateToProps = state => ({
  auth: state.authReducer
});

export { LoginForm as Login };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

LoginForm.propTypes = {
  login: PropTypes.func,
  auth:PropTypes.object,
};

LoginForm.defaultProps = {
  login: null,
  auth: {}
}
