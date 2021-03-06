import React, { useState, useContext } from 'react';

import Header from '../header';
import RandomCharacter from '../random-character';
import CharacterPage from '../character-page';
import LocationPage from '../location-page';
import EpisodePage from '../episode-page';
import { SecretPage, LoginPage } from '../pages';

import ItemDetails from '../item-details';
import Record from '../record';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getLocation } from '../../services/api';

// import { ProviderApi } from '../api-context';
import { getCharacter } from '../../services/api';

import '../../libs/bootstrap.min.css';
import './app.css';

const myContext = React.createContext();

const App = () => {
  const [randomPlanetStatus, setRandomPlanetStatus] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const onRandomPlanet = () => {
    setRandomPlanetStatus((randomPlanetStatus) => !randomPlanetStatus);
  };

  const RandomCharacterRender = randomPlanetStatus ? (
    <RandomCharacter updateInterval={5000} />
  ) : null;

  return (
    <div className="container">
      <Router>
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
            <Switch>
              <Route
                path="/"
                exact
                render={() => <h2>Welcome to Ricky Morty application</h2>}
              />
              <Route path="/character/:id?" component={CharacterPage} />
              <Route path="/location/" exact component={LocationPage} />
              <Route
                path="/location/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return (
                    <ItemDetails idItem={+id} getData={getLocation}>
                      <Record field="name" label="name" />
                      <Record field="type" label="type" />
                    </ItemDetails>
                  );
                }}
              />
              <Route path="/episode/" exact component={EpisodePage} />
              <Route
                path="/loginPage/"
                render={() => {
                  return (
                    <LoginPage
                      loginSet={() => {
                        setIsLogged((isLogged) => !isLogged);
                      }}
                    />
                  );
                }}
              />
              <Route
                path="/secretPage/"
                render={() => {
                  return <SecretPage isLogged={isLogged} />;
                }}
              />
              <Route
                render={() => {
                  return <h2>Page not Found</h2>;
                }}
              />
            </Switch>
          </div>
        </myContext.Provider>
      </Router>
    </div>
  );
};

export default App;
export { myContext };
