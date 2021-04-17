import { futureValue } from '../../future-value/future-value';

test('FutureValue', () => {
  let calculatedFutureValue = futureValue(1000, 10, 10)
  let roundedFutureValue = Math.round(calculatedFutureValue * 100) / 100

  expect(roundedFutureValue).toBe(2593.74);
});