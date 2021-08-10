import React from 'react';

import './item-list.css';
var classNames = require('classnames');

const ItemList = ({ data, active, selectedItem, children: renderLabel }) => {
  const renderItemList = (arr) => {
    return arr.map((item) => {
      const css = classNames('list-group-item list-group-item-action cursor', {
        active: active === item.id,
      });

      const label = renderLabel(item);

      return (
        <li key={item.id} className={css} onClick={() => selectedItem(item.id)}>
          {label}
        </li>
      );
    });
  };

  const itemsRender = renderItemList(data);

  return (
    <div className="item-list">
      <div className="list-group">{itemsRender}</div>
    </div>
  );
};

export default ItemList;
