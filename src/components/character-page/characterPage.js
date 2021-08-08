import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import { getAllCharacter } from '../../services/api';

import './characterPage.css';

export default class CharacterPage extends Component {
  state = {
    idCharacterDetail: 1,
    active: null,
  };

  selectedCharacter = (id) => {
    this.setState((state) => ({
      idCharacterDetail: id,
      active: id,
    }));
  };

  render() {
    const { idCharacterDetail, active } = this.state;

    const itemList = (
      <ItemList
        selectedItem={this.selectedCharacter}
        getData={getAllCharacter}
        active={active}
      >
        {(item) => (
          <span>
            {item.name}, {item.gender}
          </span>
        )}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails idCharacterDetail={idCharacterDetail} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
