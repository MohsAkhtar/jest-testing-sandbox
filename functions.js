const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Mohs' };
    user['lastName'] = 'Akhtar';
    return user;
  },
  fetchUser: () =>
    axios
      .get('http://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'err')
};

module.exports = functions;