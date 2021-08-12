import React, { Component } from 'react';

import Header from '../header';
import RandomCharacter from '../random-character';
import CharacterPage from '../character-page';
import LocationPage from '../location-page';
import EpisodePage from '../episode-page';

import { ProviderApi } from '../api-context';
import { getCharacter } from '../../services/api';

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

    const RandomCharacterRender = randomPlanetStatus ? (
      <RandomCharacter />
    ) : null;

    return (
      <div className="container">
        <ProviderApi value={getCharacter}>
          <Header />
          <div className="row">
            <div className="col-md-12">{RandomCharacterRender}</div>
            <button
              className="toggle-planet btn btn-warning btn-lg col-md-4 m-center m-bottom"
              onClick={this.onRandomPlanet}
            >
              Toggle Random Character
            </button>
            <CharacterPage />
            <br />
            <br />
            {/* <LocationPage /> */}
            <EpisodePage />
          </div>
        </ProviderApi>
      </div>
    );
  }
}
