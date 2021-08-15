import React, { useState, useContext } from 'react';
import { CharacterList } from '../sw-components';
import ItemDetails from '../item-details';
import Record from '../record';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { myContext } from '../app';

import './characterPage.css';

const CharacterPage = () => {
  const [idItem, setIdItem] = useState(1);
  const [active, setActive] = useState(null);

  const value = useContext(myContext);

  const selectedItem = (id) => {
    setIdItem(id);
    setActive(id);
  };

  const itemList = (
    <CharacterList selectedItem={selectedItem} active={active}>
      {(item) => (
        <span>
          {item.name}, {item.gender}
        </span>
      )}
    </CharacterList>
  );

  const characterDetails = (
    <ErrorBoundry>
      <ItemDetails idItem={idItem} getData={value}>
        <Record field="name" label="name" />
        <Record field="gender" label="gender" />
      </ItemDetails>
    </ErrorBoundry>
  );

  return <Row left={itemList} right={characterDetails} />;
};

export default CharacterPage;
