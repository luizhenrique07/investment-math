export const futureValue = (
  presentValue: number,
  rate: number,
  time: number
) => {
  const x = 1 + rate / 100;
  return presentValue * Math.pow(x, time);
};
