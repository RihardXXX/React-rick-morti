import React, { useState } from 'react';
import { LocationList } from '../sw-components';
import { withRouter } from 'react-router-dom';

import './locationPage.css';

const LocationPage = ({ history }) => {
  const [itemId, setItemId] = useState(1);

  const itemList = (
    <LocationList
      selectedItem={(itemId) => {
        history.push(`/location/${itemId}`);
      }}
      active={itemId}
    >
      {(item) => (
        <span>
          {item.name}, {item.type}
        </span>
      )}
    </LocationList>
  );

  return itemList;
};

export default withRouter(LocationPage);
