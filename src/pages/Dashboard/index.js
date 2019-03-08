import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navbar';
import Filter from '../../helpers/Filter';
import './Dashboard.scss';
import Products from '../../components/Products';

const Dashboard = () => {
  return (
    <Fragment>
    <div className="form-group row">
      <div className="col-md-2">
        <Navigation />
      </div>
      <div className="col-md-10">
        <Filter />
        <Products />
        <Footer footerClassName="footer inner" />
      </div>
    </div>

    </Fragment>
  );
}

export default Dashboard;
