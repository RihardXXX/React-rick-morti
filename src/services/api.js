const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

const character = 'character';
const location = 'location';
const episode = 'episode';

const getResource = async (url) => {
  try {
    const response = await instance.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log('errors');
    }
  } catch (error) {
    console.error('error: ----', error);
  }
};

// ====

// Location

const transformLocation = (location) => {
  const { id, name, residents, type, url } = location;
  return { id, name, residents, type, url };
};

const getAllLocations = async () => {
  const res = await getResource(`/${location}`);
  return res.results.map((location) => transformLocation(location));
};

const getLocation = async (id) => {
  const res = await getResource(`/${location}/${id}`);
  return transformLocation(res);
};

// =================================================================

// ====

// Episode

const transformEpisode = (episod) => {
  const { id, name, episode, air_date, url } = episod;
  return { id, name, episode, air_date, url };
};

const getAllEpisode = async () => {
  const res = await getResource(`/${episode}`);
  return res.results.map((episode) => transformEpisode(episode));
};

const getEpisode = async (id) => {
  const res = await getResource(`/${episode}/${id}`);
  return transformEpisode(res);
};

// =================================================================

// Character

const transformCharacter = (character) => {
  const { id, name, gender, image, species, type } = character;
  return { id, name, gender, image, species, type };
};

const getAllCharacter = async () => {
  const res = await getResource(`/${character}`);
  return res.results.map((item) => transformCharacter(item));
};

const getCharacter = async (id) => {
  const res = await await getResource(`/${character}/${id}`);
  return transformCharacter(res);
};

export {
  getAllLocations,
  getLocation,
  getAllCharacter,
  getCharacter,
  getAllEpisode,
  getEpisode,
};
