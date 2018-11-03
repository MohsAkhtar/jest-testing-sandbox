const axios = require('axios');

// before each test starts and each test ends
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// before all tests start and after they all end
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database is initialised...');
// const closeDatabase = () => console.log('Database is closed...');

// to call before for certain tests
const nameCheck = () => console.log('Checking name');
describe('Checking names', () => {
  beforeEach(() => nameCheck());

  test('User is Mohs', () => {
    const user = 'Mohs';
    expect(user).toBe('Mohs');
  });

  test('User is Admin', () => {
    const user = 'Admin';
    expect(user).toBe('Admin');
  });
});

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
