import React, { Component } from 'react';
import Loader from '../loader';
import ErrorMessage from '../error';

import { getCharacter } from '../../services/api';

import './random-planet.css';

export default class RandomCharacter extends Component {
  state = {
    character: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateCharacter();
    this.interval = setInterval(this.updateCharacter, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onLoadedCharacter = (character) => {
    this.setState((state) => ({ character: character, loading: false }));
  };

  onError = () => {
    this.setState((state) => ({ loading: false, error: true }));
  };

  updateCharacter = () => {
    const id = Math.floor(Math.random() * 100) + 1;
    // const id = 50000000000000000;
    // this.setState((state) => ({ loading: true }));
    getCharacter(id).then(this.onLoadedCharacter).catch(this.onError);
  };

  render() {
    const { character, loading, error } = this.state;

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
  }
}

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
