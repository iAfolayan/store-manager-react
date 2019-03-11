import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { setToken } from '../../helpers/jwt';
import { connect } from 'react-redux';
import { BASE_URL } from '../../constants'
import './navbar.scss';


class Navigation extends Component {
  logout = () => {
    setToken('');
    window.location.replace(`${ BASE_URL }`)
  }

  renderAdminMenu() {
    return (
      <ul>
						<li>
              <NavLink to="/products">Home</NavLink>
            </li>
						<li id="usrManagement">User Management
							<div className="usrChild">
								<ul>
									<li>
                    <NavLink className="p-2" to="user">Create new User</NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2" to="sales">View Sales Record</NavLink>
                  </li>  
                  <li>
                    <NavLink className="p-2" to="users">View users</NavLink>
                  </li>
								</ul>
							</div>
						</li>
            <li id="prdManagement">Product Management
								<div className="prdChild">
									<ul>
                    <li>
                      <NavLink className="p-2" to="category">Create Category</NavLink>
                    </li>
                    <li>
                      <NavLink className="p-2" to="product">Create Product</NavLink>
                    </li>
                    <li>
                      <NavLink className="p-2" to="modify">Modify product</NavLink>
                    </li>
									</ul>
								</div>
							</li>
              <li>
                <NavLink className="p-2" to="" onClick={this.logout}>Logout</NavLink>
              </li>
						</ul>
    );
  }

  renderSalesAttendantMenu() {
    return (
      <ul>
        <li>
          <NavLink className="p-2" to="products">Home</NavLink>
        </li>
        <li>
          <NavLink className="p-2" to="sales">Sales</NavLink>
        </li>
        <li>
          <NavLink className="p-2" to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink className="p-2" to="password">Password</NavLink>
        </li>
        <li>
          <NavLink className="p-2" to="" onClick={this.logout}>Logout</NavLink>
        </li>
      </ul>
    );
  }

  render() {
    const { response } = this.props.auth;
    return (
      <div className="sidebar pt-3">
        <div id="logo"></div>
        <h2 className="d-flex justify-content-center welcomeMessage">Hi! {response.fullname}</h2>
        <hr />
        <br />
        <nav className="navbar">
          { response.role === 1 ? this.renderAdminMenu() : this.renderSalesAttendantMenu() }
        </nav>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

export { Navigation as NavigationPage }
export default connect(
  mapStateToProps,
)(Navigation);
