import React, { Component } from 'react';
import { LocationList } from '../sw-components';
import ItemDetails from '../item-details';
import Record from '../record';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import { getLocation } from '../../services/api';

import './locationPage.css';

export default class LocationPage extends Component {
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
      <LocationList selectedItem={this.selectedItem} active={active}>
        {(item) => (
          <span>
            {item.name}, {item.type}
          </span>
        )}
      </LocationList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails idItem={idItem} getData={getLocation}>
          <Record field="name" label="name" />
          <Record field="gender" label="gender" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
