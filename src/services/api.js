const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  // timeout: 1000,
  // crossDomain: true,
});

const character = 'character';
const starships = 'starships';
// const planets = 'planets';

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

// const getAllPeople = async () => {
//   const res = await getResource(`/${people}`);
//   // тут есть пагинация в res
//   return res.results;
// };

// const getPerson = async (id) => {
//   const res = await await getResource(`/${people}/${id}`);
//   return res;
// };

// ====

const getAllStarships = async () => {
  const res = await getResource(`/${starships}`);
  // тут есть пагинация в res
  return res;
};

const getStarship = async (id) => {
  const res = await await getResource(`/${starships}/${id}`);
  return res;
};

// =================================================================

// const extractId = (item) => {
//   const regExp = /\/([0-9]+)\/$/;
//   return item.url.match(regExp)[1];
// };

const transformCharacter = (character) => {
  const { id, name, gender, image, species, type } = character;
  return { id, name, gender, image, species, type };
};

const getAllCharacter = async () => {
  const res = await getResource(`/${character}`);
  // тут есть пагинация в res
  return res.results.map((item) => transformCharacter(item));
};

const getCharacter = async (id) => {
  const res = await await getResource(`/${character}/${id}`);

  return transformCharacter(res);
};

export {
  getResource,
  // getAllPeople,
  // getPerson,
  getAllStarships,
  getStarship,
  getAllCharacter,
  getCharacter,
};
