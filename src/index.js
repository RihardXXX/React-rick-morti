// import './libs/bootstrap.min.css';
import api from './services/api';

const { getPeople } = api;

// test('https://swapi.dev/api/people/1/');
getPeople('/people/1/');
// console.log('start');
