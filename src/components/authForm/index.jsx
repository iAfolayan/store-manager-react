import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './authcontainer.scss';
import { userLogin } from '../../actions/authActions/authActions';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({
      user
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const { login } = this.props;
    login(user);
  }

  render() {
    return (
      <div className="authContainer">
        <div className="shadow">
          <Form>
            <Form.Field>
              <input
                label="username"
                placeholder="UserName"
                name="username"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input placeholder="Password" name="password" onChange={this.handleChange} />
            </Form.Field>
            <Button type="submit" onClick={this.handleSubmit}>
              Login
            </Button>
            <span>Forgot your password?</span>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(userLogin(user))
});

const mapStateToProps = state => ({
  auth: state.authReducer
});

export { index as Login };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);

index.propTypes = {
  login: PropTypes.func,
  auth: PropTypes.object
};

index.defaultProps = {
  login: null,
  auth: {}
};
