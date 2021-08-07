import React, { Component } from 'react';
import Loader from '../loader';
import Error from '../error';
import { getAllCharacter } from '../../services/api';

import './item-list.css';

export default class ItemList extends Component {
  state = {
    characters: null,
    loading: true,
    error: false,
  };

  onLoadedCharacters = (characters) => {
    this.setState((state) => ({
      characters: characters,
      loading: false,
      error: false,
    }));
  };

  onError = (error) => {
    this.setState((state) => ({ error: error }));
  };

  componentDidMount() {
    getAllCharacter().then(this.onLoadedCharacters).catch(this.onError);
  }

  renderCharacters = (arr) => {
    return arr.map((item) => {
      return (
        <a
          // href="#"
          key={item.id}
          className="list-group-item list-group-item-action"
          onClick={() => this.props.selectedCharacter(item.id)}
        >
          {item.name}
        </a>
      );
    });
  };

  render() {
    const { characters, loading, error } = this.state;

    const errorRender = error ? <Error /> : null;
    const loadingRender = loading ? <Loader /> : null;
    const itemsRender = !(loading || error)
      ? this.renderCharacters(characters)
      : null;

    return (
      <div className="item-list">
        <div className="list-group">
          {errorRender}
          {loadingRender}
          {itemsRender}
        </div>
      </div>
    );
  }
}
