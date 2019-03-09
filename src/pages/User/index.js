import React, { Fragment } from 'react';
import Navigation from '../../components/Navbar';
import User from '../../components/User';
import Footer from '../../components/Footer';
import './User.scss';

const UserPage = () => {
  return (
    <Fragment>
      <div className="form-group row">
        <div className="col-sm-12 col-md-2">
          <Navigation />
        </div>
        <div className="col-sm-12 col-md-10">
          <User />
          <Footer footerClassName="footer inner" />
        </div>
      </div>
    </Fragment>
  );
}

export default UserPage;
