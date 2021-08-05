import React from 'react';

import './item-list.css';

const ItemList = () => {
  const peoples = ['rihard', 'muhammad', 'umar'];

  const items = peoples.map((item) => {
    return (
      <a
        href="#"
        key={item}
        className="list-group-item list-group-item-action active"
      >
        {item}
      </a>
    );
  });

  return (
    <div className="item-list">
      <div className="list-group">{items}</div>
    </div>
  );
};

export default ItemList;
