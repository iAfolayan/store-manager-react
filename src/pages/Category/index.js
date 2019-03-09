import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navbar';
import Category from '../../components/Category';

const CategoryHome = () => {
  return (
    <Fragment>
      <div className="form-group row">
        <div className="col-md-2">
          <Navigation />
        </div>
        <div className="col-md-10">
          <Category />
          <Footer footerClassName="footer inner" />
        </div>
      </div>
    </Fragment>
  );
}

export default CategoryHome;
