import React, { Component } from 'react';
import { CharacterList } from '../sw-components';
import ItemDetails from '../item-details';
import Record from '../record';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import { ConsumerApi } from '../api-context';

import './characterPage.css';

const getProps = (...args) => {
  return {
    ...args,
  };
};
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

    const props = getProps(this.selectedItem, active);

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
      <ConsumerApi>
        {(getCharacter) => {
          return (
            <ErrorBoundry>
              <ItemDetails idItem={idItem} getData={getCharacter}>
                <Record field="name" label="name" />
                <Record field="gender" label="gender" />
              </ItemDetails>
            </ErrorBoundry>
          );
        }}
      </ConsumerApi>
    );

    return <Row left={itemList} right={characterDetails} />;
  }
}
