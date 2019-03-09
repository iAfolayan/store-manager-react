import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navbar';
import Modify from '../../components/Modify';

const ModifyHome = () => {
  return (
    <Fragment>
      <div className="form-group row">
        <div className="col-md-2">
          <Navigation />
        </div>
        <div className="col-md-10">
          <Modify />
          <Footer footerClassName="footer inner" />
        </div>
      </div>
    </Fragment>
  );
}

export default ModifyHome;
