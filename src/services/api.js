const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
});

async function getPeople(url) {
  try {
    const response = await instance.get(url);
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.log('errors');
    }
  } catch (error) {
    console.error('error', error);
  }
}

// axios
//   .post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function getUserAccount() {
//   return axios.get('/user/12345');
// }

// function getUserPermissions() {
//   return axios.get('/user/12345/permissions');
// }

// Promise.all([getUserAccount(), getUserPermissions()]).then(function (results) {
//   const acct = results[0];
//   const perm = results[1];
// });

// const test = (url) => {
//   axios
//     .get(url)
//     .then(function (response) {
//       // handle success
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// };

const api = {
  getPeople,
};

export default api;
