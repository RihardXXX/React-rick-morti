import React, { Component } from 'react';

import Header from '../header';
import RandomCharacter from '../random-character';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import '../../libs/bootstrap.min.css';
import './app.css';

export default class App extends Component {
  state = {
    randomPlanetStatus: true,
    idCharacterDetail: null,
  };

  onRandomPlanet = () => {
    this.setState(({ randomPlanetStatus }) => ({
      randomPlanetStatus: !randomPlanetStatus,
    }));
  };

  selectedCharacter = (id) => {
    this.setState((state) => ({ idCharacterDetail: id }));
  };

  render() {
    const { randomPlanetStatus, idCharacterDetail } = this.state;

    const RandomCharacterRender = randomPlanetStatus ? (
      <RandomCharacter />
    ) : null;

    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-12">{RandomCharacterRender}</div>
          <button
            className="toggle-planet btn btn-warning btn-lg col-md-4 m-center m-bottom"
            onClick={this.onRandomPlanet}
          >
            Toggle Random Character
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ItemList selectedCharacter={this.selectedCharacter} />
          </div>
          <div className="col-md-6">
            <PersonDetails idCharacterDetail={idCharacterDetail} />
          </div>
        </div>
      </div>
    );
  }
}
