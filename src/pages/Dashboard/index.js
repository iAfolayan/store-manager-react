import React, { Component, Fragment } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navbar';
import Filter from '../../helpers/Filter';
import './Dashboard.scss';
import Products from '../../components/Products';
import Cart from '../../components/Products/cart';

export class Dashboard extends Component {
  state = {
    filterQuery: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      filterQuery: target.value
    });
  }

  render() {
    const { filterQuery } = this.state;
    return (
      <Fragment>
      <div className="form-group row">
        <div className="col-md-2">
          <Navigation />
        </div>
        <div className="col-md-10">
          <Filter handleChange={this.handleChange} value={filterQuery} />
          <Cart />
          <Products filterQuery={filterQuery} />
          <Footer footerClassName="footer inner" />
        </div>
      </div>
      </Fragment>
    );
  }
}

export default Dashboard;
