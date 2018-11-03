const isAnagram = require('./anagram');

test('anagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('Is an anagram "aabb" and "abba"', () => {
  expect(isAnagram('aabb', 'abba')).toBeTruthy();
});

test('Is an anagram "Dormitory" and "dirty room ##"', () => {
  expect(isAnagram('Dormitory', 'dirty room ##')).toBeTruthy();
});

test('Is NOT an anagram "hello" and "bye"', () => {
  expect(isAnagram('hello', 'bye')).toBeFalsy();
});
