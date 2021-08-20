import React from 'react';

const LoginPage = ({ loginSet }) => {
  return (
    <div>
      <h2>Login page</h2>
      <button className="btn" onClick={() => loginSet()}>
        login active
      </button>
    </div>
  );
};

export default LoginPage;
