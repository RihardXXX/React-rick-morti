const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  // timeout: 1000,
});

const people = 'people';
const starships = 'starships';
const planets = 'planets';

const getResource = async (url) => {
  try {
    const response = await instance.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log('errors');
    }
  } catch (error) {
    console.error('error: ', error);
  }
};

// ====

const getAllPeople = async () => {
  const res = await getResource(`/${people}`);
  // тут есть пагинация в res
  return res.results;
};

const getPerson = async (id) => {
  const res = await await getResource(`/${people}/${id}`);
  return res;
};

// ====

const getAllStarships = async () => {
  const res = await getResource(`/${starships}`);
  // тут есть пагинация в res
  return res.results;
};

const getStarship = async (id) => {
  const res = await await getResource(`/${starships}/${id}`);
  return res;
};

// =================================================================

const extractId = (item) => {
  const regExp = /\/([0-9]+)\/$/;
  return item.url.match(regExp)[1];
};

const transformPlanet = (planet) => {
  return {
    id: extractId(planet),
    name: planet.name,
    population: planet.population,
    diameter: planet.diameter,
    rotationPeriod: planet.rotation_period,
  };
};

const getAllPlanets = async () => {
  const res = await getResource(`/${planets}`);
  // тут есть пагинация в res
  return res.results.map((planet) => transformPlanet(planet));
};

const getPlanet = async (id) => {
  const res = await await getResource(`/${planets}/${id}`);
  return transformPlanet(res);
};

const api = {
  getResource,
  getAllPeople,
  getPerson,
  getAllStarships,
  getStarship,
  getAllPlanets,
  getPlanet,
};

export default api;
