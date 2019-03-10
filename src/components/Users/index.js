import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Users.scss';

class Users extends Component {
  render() {
    return (
    <Fragment>
        <h5 className="ml-3 text-primary">Users</h5>
        <hr className="mr-5" />
      <div class="table-responsive-sm">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Staff ID</th>
              <th scope="col">FUllname</th>
              <th scope="col">phone number</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>SM001</td>
              <td>Mark Adeniran</td>
              <td>+2348032167911</td>
              <td>
                <NavLink to="edit">Edit</NavLink> | Delete</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>SM001</td>
              <td>Mark Adeniran</td>
              <td>+2348032167911</td>
              <td>
                <NavLink to="edit">Edit</NavLink> | Delete</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>SM001</td>
              <td>Mark Adeniran</td>
              <td>+2348032167911</td>
              <td>
                <NavLink to="edit">Edit</NavLink> | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
    );
  }
}

export default Users;