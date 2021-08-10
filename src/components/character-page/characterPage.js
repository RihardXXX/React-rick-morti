import React, { Component } from 'react';
import { CharacterList } from '../sw-components';
import ItemDetails from '../item-details';
import Record from '../record';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import { getCharacter } from '../../services/api';

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
      <CharacterList selectedItem={this.selectedItem} active={active}>
        {(item) => (
          <span>
            {item.name}, {item.gender}
          </span>
        )}
      </CharacterList>
    );

    const characterDetails = (
      <ErrorBoundry>
        <ItemDetails idItem={idItem} getData={getCharacter}>
          <Record field="name" label="name" />
          <Record field="gender" label="gender" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={characterDetails} />;
  }
}
