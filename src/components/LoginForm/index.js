import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputForm from '../InputForms';
import LogInValidator from '../../helpers/validate';
import './LoginForm.scss';

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
          <button onClick={this.handleChange} type="submit" className="btn btn-outline-primary login" disabled={isLoading}>Login</button>
          <span className="d-flex align-items-center reset-password mt10">
Forget password? &nbsp;
            <Link to="/password"> Click here</Link>
          </span>
        </div>
      </form>
    );
  }
}

export default LoginForm;
