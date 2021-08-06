import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import '../../libs/bootstrap.min.css';
import './app.css';

export default class App extends Component {
  state = {
    randomPlanetStatus: true,
  };

  onRandomPlanet = () => {
    this.setState(({ randomPlanetStatus }) => ({
      randomPlanetStatus: !randomPlanetStatus,
    }));
  };

  render() {
    const { randomPlanetStatus } = this.state;

    const randomPlanetRender = randomPlanetStatus ? <RandomPlanet /> : null;

    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-12">{randomPlanetRender}</div>
          <button
            className="toggle-planet btn btn-warning btn-lg col-md-4 m-center m-bottom"
            onClick={this.onRandomPlanet}
          >
            Toggle Random Planet
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}
