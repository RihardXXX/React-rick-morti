import React, { useState, useContext } from 'react';
import { CharacterList } from '../sw-components';
import ItemDetails from '../item-details';
import Record from '../record';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { myContext } from '../app';
import { withRouter } from 'react-router-dom';

import './characterPage.css';

const CharacterPage = ({ match, history }) => {
  const value = useContext(myContext);
  const { id } = match.params;

  const itemList = (
    <CharacterList
      selectedItem={(id) => {
        history.push(`${id}`);
      }}
      active={id}
    >
      {(item) => (
        <span>
          {item.name}, {item.gender}
        </span>
      )}
    </CharacterList>
  );

  const characterDetails = (
    <ErrorBoundry>
      <ItemDetails idItem={id} getData={value}>
        <Record field="name" label="name" />
        <Record field="gender" label="gender" />
      </ItemDetails>
    </ErrorBoundry>
  );

  return <Row left={itemList} right={characterDetails} />;
};

export default withRouter(CharacterPage);
