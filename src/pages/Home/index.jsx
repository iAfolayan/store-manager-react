import React from 'react';
import './Home.scss';
import FormContainer from '../../components/FormContainer';
import LoginForm from '../../components/LoginForm';
import Footer from '../../components/Footer';

const Home = () => (
  <div className="store-background">
    <FormContainer title="Store Manager">
      <LoginForm />
    </FormContainer>
    <Footer footerClassName="footer login" />
  </div>
);

export default Home;
