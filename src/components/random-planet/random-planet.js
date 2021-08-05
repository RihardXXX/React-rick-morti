import React, { Component } from 'react';
import Loader from '../loader';

import api from '../../services/api';

import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    id: null,
    name: null,
    population: null,
    diameter: null,
    rotationPeriod: null,
    loading: false,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onLoadedPlanet = (planet) => this.setState((state) => ({ ...planet }));

  updatePlanet() {
    const { getPlanet } = api;
    const id = Math.floor(Math.random() * 30) + 2;
    getPlanet(id).then(this.onLoadedPlanet);
  }

  render() {
    const { name, population, diameter, rotationPeriod, id, loading } = this.state;

    info =

    const content = loading ? <Loader /> :
    return (
      <div className="random-planet">
        <div className="card border-primary mb-3">

          {/* <div className="card-body">
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
          </div> */}
        </div>
      </div>
    );
  }
}
