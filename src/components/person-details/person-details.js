import React, { Component } from 'react';
import Loader from '../loader';
import ErrorMessage from '../error';
import ErrorButton from '../error-button';

import './person-details.css';

import { getCharacter } from '../../services/api';

export default class PersonDetails extends Component {
  state = {
    loading: true,
    personDetail: null,
    error: false,
  };

  componentDidMount() {
    this.onLoadedPersonDetail();
  }

  componentDidUpdate(prevProps) {
    if (this.props.idCharacterDetail !== prevProps.idCharacterDetail) {
      this.onLoadedPersonDetail();
    }
  }

  setPersonDetail = (character) => {
    this.setState((state) => ({ loading: false, personDetail: character }));
  };

  onError = (err) => {
    this.setState((state) => ({ error: true }));
  };

  onLoadedPersonDetail() {
    const { idCharacterDetail } = this.props;
    if (!idCharacterDetail) return;
    this.setState((state) => ({ loading: true }));
    getCharacter(idCharacterDetail)
      .then(this.setPersonDetail)
      .catch(this.onError);
  }

  render() {
    const { loading, personDetail, error } = this.state;

    const errorRender = error ? <ErrorMessage /> : null;
    const loaderRender = loading ? <Loader /> : null;
    const personDetailRender = !(loading || error) ? (
      <PersonDetail personDetail={personDetail} />
    ) : null;

    return (
      <div className="person-details">
        <div className="card border-primary mb-3">
          <div className="card-body">
            <ErrorButton />
            <div className="wrapper-person-details">
              {errorRender}
              {loaderRender}
              {personDetailRender}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const PersonDetail = ({ personDetail }) => {
  const { name, gender, image, species, type } = personDetail;
  return (
    <React.Fragment>
      <div className="person-detail-img">
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
    </React.Fragment>
  );
};
