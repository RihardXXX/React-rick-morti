import React, { Component } from 'react';
import Loader from '../loader';
import ErrorMessage from '../error';

import { getPlanet } from '../../services/api';

import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  constructor() {
    super();
    setInterval(this.updatePlanet, 5000);
  }

  onLoadedPlanet = (planet) => {
    this.setState((state) => ({ planet: planet, loading: false }));
  };

  onError = () => {
    this.setState((state) => ({ loading: false, error: true }));
  };

  updatePlanet = () => {
    console.log('updatePlanet');
    const id = Math.floor(Math.random() * 25) + 2;

    getPlanet(id).then(this.onLoadedPlanet).catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const errorMsg = error ? <ErrorMessage /> : null;
    const loadingView = loading ? <Loader /> : null;
    const planetView = !(loading || error) ? (
      <PlanetView planet={planet} />
    ) : null;

    return (
      <div className="random-planet">
        <div className="card border-primary mb-3">
          {errorMsg}
          {loadingView}
          {planetView}
        </div>
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { name, population, diameter, rotationPeriod, id } = planet;

  return (
    <React.Fragment>
      <div className="card-body">
        <div className="wrapper-random-planet">
          <div className="random-planet-img">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            />
          </div>
          <div className="random-planet-text">
            <h3>Planet {name}</h3>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                population: {population}
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                rotation-period: {rotationPeriod}
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                diameter: {diameter}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
