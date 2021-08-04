// import './libs/bootstrap.min.css';
import api from './services/api';

const { getAllPeople, getPerson } = api;

// test('https://swapi.dev/api/people/1/');
// getAllPeople().then((res) => console.log(res.results));
// console.log(result);
getPerson(1).then((res) => console.log(res));

// console.log('start');
