import { futureValue } from '../future-value/future-value'
import { TimeInterval } from '../models/time-interval/time-interval'
import { CalculatedCompoundInterest } from './models/calculated-compound-interest'
import { CompoundInterestParameters } from './models/compound-interest-parameters'
import { MonthlyEarnings } from './models/monthly-earnings'

/**
 * Calculate a compound interest investment with constant deposits
 */
export const calculateCompoundInterest = (
  data: CompoundInterestParameters
): CalculatedCompoundInterest => {
  let duration = data.investmentDuration

  if (data.investmentDurationInterval === TimeInterval.annually) {
    duration *= 12
  }

  let totalValue = data.initialAmount
  let investmentValue = data.initialAmount
  let totalEarnings = 0
  const monthlyEarnings: MonthlyEarnings[] = []

  for (let index = 1; index <= duration; index++) {
    const time =
      data.investmentDurationInterval === TimeInterval.monthly ? 1 : 1 / 12

    const earnings =
      futureValue(totalValue, data.interestRate, time) - totalValue

    totalValue += earnings + data.frequentDeposit

    monthlyEarnings.push({
      monthEarnings: earnings,
      monthValue: totalValue,
      month: index + 1,
    })

    investmentValue += data.frequentDeposit
    totalEarnings += earnings
  }

  return {
    monthlyEarnings,
    investmentValue,
    totalEarnings,
    totalValue,
  }
}
