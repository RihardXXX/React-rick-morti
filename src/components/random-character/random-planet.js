import React, { useState, useEffect } from 'react';
import Loader from '../loader';
import ErrorMessage from '../error';
import PropTypes from 'prop-types';

import { getCharacter } from '../../services/api';

import './random-planet.css';

const RandomCharacter = ({ updateInterval }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onLoadedCharacter = (character) => {
    setLoading((loading) => !loading);
    setCharacter(character);
  };

  const onError = () => {
    setLoading((loading) => !loading);
    setError((error) => !error);
  };

  const updateCharacter = () => {
    const id = Math.floor(Math.random() * 100) + 1;
    setLoading((loading) => !loading);
    getCharacter(id).then(onLoadedCharacter).catch(onError);
  };

  useEffect(() => {
    updateCharacter();
    const interval = setInterval(updateCharacter, updateInterval);
    return () => clearInterval(interval);
  }, []);

  const errorMsg = error ? <ErrorMessage /> : null;
  const loadingView = loading ? <Loader /> : null;
  const characterView = !(loading || error) ? (
    <CharacterView character={character} />
  ) : null;

  return (
    <div className="random-planet">
      <div className="card border-primary mb-3">
        {errorMsg}
        {loadingView}
        {characterView}
      </div>
    </div>
  );
};

// RandomCharacter.defaultProps = {
//   updateInterval: 3000,
// };

RandomCharacter.propTypes = {
  updateInterval: PropTypes.number,
};

const CharacterView = ({ character }) => {
  const { name, gender, image, species, type } = character;

  return (
    <React.Fragment>
      <div className="card-body">
        <div className="wrapper-random-planet">
          <div className="random-planet-img">
            <img src={image} alt="img" />
          </div>
          <div className="random-planet-text">
            <h3>{name}</h3>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                gender: {gender}
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                species: {species}
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                type: {type}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RandomCharacter;
