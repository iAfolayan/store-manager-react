import React, { Component, Fragment } from 'react';
import InputForm from '../../components/InputForms';
import { CreateUserValidator } from '../../helpers/validate';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        staffId: '',
        title: '',
        phoneNumber:'',
        emailAddress:'',
        fullname:'',
      },
      isLoading: false,
      errors: {}
    }
  }

  handleChange = event => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({
      user
    });
  }

  handleSubmit = () => {
    event.preventDefault();
    const { user } = this.state;
    const errors = CreateUserValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    // const { login } = this.props;
    // login(product);
  }
  render() {
    const { user, errors, isLoading } = this.state;
    return (
      <Fragment>
        <h5 className="ml-3 text-primary">Create User</h5>
        <hr className="mr-5" />
        <div className="col-md-6 formWrapper">
            <div className="formWrapper">
              <form onSubmit={this.handleSubmit}>
                <InputForm
                  error={errors.title}
                  text="Title"
                  label="title"
                  type="text"
                  name="title"
                  id="title"
                  className="col-md-6"
                  value={user.title}
                  placeholder="Enter staff title (Miss,Mrs,Mr.)"
                  onChange={this.handleChange}
                />
                <InputForm
                error={errors.fullname}
                  text="Fullname"
                  label="fName"
                  type="text"
                  name="fName"
                  id="fName"
                  value={user.fullname}
                  placeholder="Enter staff fullname (surname first)"
                  onChange={this.handleChange}
                />
                <InputForm
                  error={errors.staffId}
                  text="StaffId"
                  label="StaffId"
                  type="text"
                  name="staffId"
                  id="StaffId"
                  value={user.staffId.toUpperCase()}
                  placeholder="Enter staff Id"
                  onChange={this.handleChange}
                />
                <InputForm
                error={errors.phoneNumber}
                  text="Phone Number"
                  label="phoneNumber"
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={user.phoneNumber}
                  placeholder="Enter phone Number"
                  onChange={this.handleChange}
                />
                <InputForm
                error={errors.emailAddress}
                  text="Email Address"
                  label="email"
                  type="email"
                  name="email"
                  id="email"
                  value={user.emailAddress}
                  placeholder="Enter staff emailAddress"
                  onChange={this.handleChange}
                />
                <button className="btn btn-outline-primary float-right">{isLoading ? 'Loading...' : 'Add User'}</button>
              </form>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default User;