import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import { getAllCharacter, getCharacter } from '../../services/api';

import './characterPage.css';

export default class CharacterPage extends Component {
  state = {
    idItem: 1,
    active: null,
  };

  selectedItem = (id) => {
    this.setState((state) => ({
      idItem: id,
      active: id,
    }));
  };

  render() {
    const { idItem, active } = this.state;

    const itemList = (
      <ItemList
        selectedItem={this.selectedItem}
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
        <ItemDetails idItem={idItem} getData={getCharacter}>
          <Record field="name" label="name" />
          <Record field="gender" label="gender" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
