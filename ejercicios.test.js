const first = require('./first');

test('Ejercicio 1', () => {
  expect(first([3,2,5,9,1,3])).toBe([ 5, 9, 3 ]);
});