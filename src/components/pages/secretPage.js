import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLogged }) => {
  if (isLogged) {
    return <h2>It is secret page</h2>;
  }
  return <Redirect to="/loginPage/" />;
};

export default SecretPage;
