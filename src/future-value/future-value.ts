/**
 * Calculate value of a current asset at a future date based on an assumed rate of growth
 * @param presentValue current asset value
 * @param rate rate of growth
 * @param time time of how long the investment will last
 * @returns future value of the asset: presentValue + profits
 */
export const futureValue = (
  presentValue: number,
  rate: number,
  time: number
) => {
  const x = 1 + rate / 100
  return presentValue * Math.pow(x, time)
}
