const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined matches only defined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toBe is for primitive types. You should use toEqual for reference types
test('Should be Mohs Akhtar object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Mohs',
    lastName: 'Akhtar'
  });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

//Promise
test('User fetched name should be Leanne Graham', () => {
  // need expect.assertions() and number of assertions to verify the number of assertions called
  // which in this case is 1. And this is used when testing asynchronous code to make sure
  // that the assertions a callback in .then of a promise actually get called. If we leave this out
  // and the name does not match the test will still pass.
  expect.assertions(1);
  // You also want to return the promise if you omit this the test will complete before the fetch completes
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Async Await
test('User fetched name should be Leanne Graham (Async Await)', async () => {
  expect.assertions(1);

  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
