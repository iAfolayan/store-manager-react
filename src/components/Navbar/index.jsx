import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './images/logo.PNG';
import './navbar.scss';
import { setToken } from '../../helpers/jwt';


class Navigation extends Component {
  logout = () => {
    setToken('');
    window.location.replace("http://localhost:5050/")
  }

  render() {
    return (
      <div className="sidebar pt-3">
        <img src={Logo} />
      <h5 className="d-flex justify-content-center welcomeMessage">Welcome. iAfolayan</h5>
      <br />
        <nav className="navbar">
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
                    <NavLink className="p-2" to="viewSales">View Sales Record</NavLink>
                  </li>  
                  <li>
                    <NavLink className="p-2" to="viewUser">View users</NavLink>
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
                <NavLink to="" onClick={this.logout}>Logout</NavLink>
              </li>
						</ul>
        </nav>
        </div>
    );
  }
}

export default Navigation;
