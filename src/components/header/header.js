import React from 'react';

import './header.css';

const Header = () => {
  const names = ['people', 'planets', 'starships'];

  const links = names.map((name) => {
    return (
      <li className="nav-item" key={name}>
        <a className="nav-link active" href="#">
          {name}
          <span className="visually-hidden">(current)</span>
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Star Wars
        </a>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto m-center ">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
