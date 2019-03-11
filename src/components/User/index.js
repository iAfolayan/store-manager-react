import React, { Component, Fragment } from 'react';
import InputForm from '../../components/InputForms';
import { CreateUserValidator } from '../../helpers/validate';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userAction'

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        staffId: '',
        title: '',
        phonenumber:'',
        emailaddress:'',
        password: '',
        fullname:'',
        role: ''
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
    if (Object.keys(errors).length) {
      this.setState({ errors });
    } else {
      this.setState({ isLoading: true });
      this.props.create(user)
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { isLoading } = prevState;
    const { newUser: { creatingUser, createStatus } } = nextProps;
    if (isLoading && !creatingUser && createStatus) {
      return { ...prevState, isLoading: false, user: {
        staffId: '',
        title: '',
        phonenumber:'',
        emailaddress:'',
        password: '',
        fullname:'',
        role: ''
      }}
    } else {
      return prevState;
    }
  }
  

  
  render() {
    const { user, errors, isLoading } = this.state;
    return (
      <Fragment>
        <ToastContainer autoClose={5000} />
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
                  name="fullname"
                  id="fName"
                  value={user.fullname}
                  placeholder="Enter staff fullname (surname first)"
                  onChange={this.handleChange}
                />
                <InputForm
                error={errors.phonenumber}
                  text="Phone Number"
                  label="phoneNumber"
                  type="number"
                  name="phonenumber"
                  id="phoneNumber"
                  value={user.phonenumber}
                  placeholder="Enter phone Number"
                  onChange={this.handleChange}
                />
                <InputForm
                error={errors.emailAddress}
                  text="Email Address"
                  label="email"
                  type="email"
                  name="emailaddress"
                  id="email"
                  value={user.emailaddress}
                  placeholder="Enter staff emailAddress"
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
                <small id="descHelp" className="form-text text-muted">Valid StaffId begins with <code>SM</code></small>
                <InputForm
                error={errors.password}
                  text="Password"
                  label="password"
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  placeholder="Enter password"
                  onChange={this.handleChange}
                />
                <small id="password" className="form-text text-muted">Must contain at least an Uppercase, a number and minimum of 8</small>
                <div className='form-group'>
                  <label htmlFor="category" className="text-sm-left">Type of User</label>
                  <select className="form-control" name="role" onChange={this.handleChange} value={user.role}>
                    <option value="">Make a choice</option>
                    <option value="1">Admin</option>
                    <option value="2">Sale Attendant</option>
                  </select>
                </div>
                <button className="btn btn-outline-primary float-right">{isLoading ? 'Loading...' : 'Add User'}</button>
              </form>
            </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  newUser: state.userReducer
});

const mapDispatchToProps = dispatch => ({
  create: userDetails => dispatch(createUser(userDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);

// export { User as Com}