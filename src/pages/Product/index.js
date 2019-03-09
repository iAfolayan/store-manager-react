import React, { Fragment } from 'react';
import Navigation from '../../components/Navbar';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import './Product.scss';

const ProductPage = () => {
  return (
    <Fragment>
      <div className="form-group row">
        <div className="col-sm-12 col-md-2">
          <Navigation />
        </div>
        <div className="col-sm-12 col-md-10">
          <Product />
          <Footer footerClassName="footer inner" />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductPage;
