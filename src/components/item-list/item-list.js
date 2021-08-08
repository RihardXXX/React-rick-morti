import React, { Component } from 'react';

import Loader from '../loader';
import Error from '../error';

import './item-list.css';
var classNames = require('classnames');

export default class ItemList extends Component {
  state = {
    itemList: null,
    loading: true,
    error: false,
  };

  onLoadedCharacters = (itemList) => {
    this.setState((state) => ({
      itemList: itemList,
      loading: false,
      error: false,
    }));
  };

  onError = (error) => {
    this.setState((state) => ({ error: error }));
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(this.onLoadedCharacters).catch(this.onError);
  }

  renderItemList = (arr) => {
    return arr.map((item) => {
      const css = classNames('list-group-item list-group-item-action cursor', {
        active: this.props.active === item.id,
      });

      const label = this.props.children(item);

      return (
        <li
          key={item.id}
          className={css}
          onClick={() => this.props.selectedItem(item.id)}
        >
          {label}
        </li>
      );
    });
  };

  render() {
    const { itemList, loading, error } = this.state;

    const errorRender = error ? <Error /> : null;
    const loadingRender = loading ? <Loader /> : null;
    const itemsRender = !(loading || error)
      ? this.renderItemList(itemList)
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
