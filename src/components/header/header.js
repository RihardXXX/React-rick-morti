import React from 'react';

import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  const names = [
    '/character/',
    '/location/',
    '/episode/',
    '/loginPage/',
    '/secretPage/',
  ];

  const links = names.map((name) => {
    return (
      <li className="nav-item" key={name}>
        <Link className="nav-link" to={name}>
          {name}
          <span className="visually-hidden">(current)</span>
        </Link>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Rick and Morty
        </Link>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto m-center ">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
