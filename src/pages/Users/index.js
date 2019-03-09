import React, { Fragment } from 'react';
import Navigation from '../../components/Navbar';
import Users from '../../components/Users';
import Footer from '../../components/Footer';

const UsersPage = () => {
  return (
    <Fragment>
      <div className="form-group row">
        <div className="col-sm-12 col-md-2">
          <Navigation />
        </div>
        <div className="col-sm-12 col-md-10">
          <Users />
          <Footer footerClassName="footer inner" />
        </div>
      </div>
    </Fragment>
  );
}

export default UsersPage;
