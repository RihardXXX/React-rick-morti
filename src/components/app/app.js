import React, { useState, useContext } from 'react';

import Header from '../header';
import RandomCharacter from '../random-character';
import CharacterPage from '../character-page';
import LocationPage from '../location-page';
import EpisodePage from '../episode-page';

// import { ProviderApi } from '../api-context';
import { getCharacter } from '../../services/api';

import '../../libs/bootstrap.min.css';
import './app.css';

const myContext = React.createContext();

const App = () => {
  const [randomPlanetStatus, setRandomPlanetStatus] = useState(true);

  const onRandomPlanet = () => {
    setRandomPlanetStatus((randomPlanetStatus) => !randomPlanetStatus);
  };

  const RandomCharacterRender = randomPlanetStatus ? (
    <RandomCharacter updateInterval={5000} />
  ) : null;

  return (
    <div className="container">
      <myContext.Provider value={getCharacter}>
        <Header />
        <div className="row">
          <div className="col-md-12">{RandomCharacterRender}</div>
          <button
            className="toggle-planet btn btn-warning btn-lg col-md-4 m-center m-bottom"
            onClick={onRandomPlanet}
          >
            Toggle Random Character
          </button>
          <CharacterPage />
          <br />
          <br />
        </div>
      </myContext.Provider>
    </div>
  );
};

export default App;
export { myContext };
