import React, { Component } from 'react';
import { EpisodeList } from '../sw-components';
import ItemDetails from '../item-details';
import Record from '../record';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './episodePage.css';

import { getEpisode } from '../../services/api';

export default class EpisodePage extends Component {
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
      <EpisodeList selectedItem={this.selectedItem} active={active}>
        {(item) => (
          <span>
            {item.name}, {item.episode}
          </span>
        )}
      </EpisodeList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails idItem={idItem} getData={getEpisode}>
          <Record field="name" label="name" />
          <Record field="gender" label="gender" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
