import React from 'react';
import WithData from '../hoc-helpers';
import ItemList from '../item-list';

import {
  getAllCharacter,
  getAllLocations,
  getAllEpisode,
} from '../../services/api';

const CharacterList = WithData(ItemList, getAllCharacter);
const LocationList = WithData(ItemList, getAllLocations);
const EpisodeList = WithData(ItemList, getAllEpisode);

export { CharacterList, LocationList, EpisodeList };
