import React, { Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import prodImage5 from '../../images/5.PNG';
import './Modify.scss';

class Modify extends Component {

  render() {
    return (
     <Fragment>
        <h5 className="ml-3 text-primary">Products</h5>
        <hr className="mr-5" />
      <div className="table-responsive-sm">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">category</th>
              <th scope="col">price</th>
              <th scope="col">Image</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Bluetooth</td>
              <td>Phone</td>
              <td>3000</td>
              <td>
                <img src={prodImage5} className="rounded mx-auto d-block" alt="image title" />
              </td>
              <td>
                <NavLink to="edit">Edit</NavLink> | Delete</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Bluetooth</td>
              <td>Phone</td>
              <td>3000</td>
              <td>
                <img src={prodImage5} className="rounded mx-auto d-block" alt="image title" />
              </td>
              <td>
                <NavLink to="edit">Edit</NavLink> | Delete</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Bluetooth</td>
              <td>Phone</td>
              <td>3000</td>
              <td>
                <img src={prodImage5} className="rounded mx-auto d-block" alt="image title" />
              </td>
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

export default Modify;