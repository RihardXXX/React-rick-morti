import React from 'react';
import WithData from '../hoc-helpers';
import ItemList from '../item-list';

import { getAllCharacter } from '../../services/api';

const CharacterList = WithData(ItemList, getAllCharacter);
const LocationList = () => {};
const EpisoderList = () => {};

export { CharacterList, LocationList, EpisoderList };
