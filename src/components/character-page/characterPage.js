import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorMessage from '../error';

import './characterPage.css';

export default class CharacterPage extends Component {
  state = {
    hasError: false,
    idCharacterDetail: 1,
  };

  selectedCharacter = (id) => {
    this.setState((state) => ({ idCharacterDetail: id }));
  };

  componentDidCatch() {
    this.setState((state) => ({ hasError: true }));
  }

  render() {
    const { idCharacterDetail, hasError } = this.state;

    if (hasError) {
      return <ErrorMessage />;
    }

    return (
      <div className="row">
        <div className="col-md-6">
          <ItemList selectedCharacter={this.selectedCharacter} />
        </div>
        <div className="col-md-6">
          <PersonDetails idCharacterDetail={idCharacterDetail} />
        </div>
      </div>
    );
  }
}
