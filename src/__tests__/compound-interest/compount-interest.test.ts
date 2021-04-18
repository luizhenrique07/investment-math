import { calculateCompoundInterest } from '../../compound-interest/compound-interest'
import { CompoundInterestParameters } from '../../compound-interest/models/compound-interest-parameters'
import { TimeInterval } from '../../models/time-interval/time-interval'

test('CalculateCompoundInterest', () => {
  const compoundInterestParameters: CompoundInterestParameters = {
    initialAmount: 1000,
    frequentDeposit: 100,
    interestRate: 1,
    interestRateInterval: TimeInterval.monthly,
    investmentDuration: 10,
    investmentDurationInterval: TimeInterval.monthly,
  }

  const calculated = calculateCompoundInterest(compoundInterestParameters)
  const totalAmount = calculated.totalValue

  const totalAmountRounded = Math.round(totalAmount * 100) / 100

  expect(totalAmountRounded).toBe(2150.84)
  expect(calculated.totalValue).toBe(
    calculated.investmentValue + calculated.totalEarnings
  )
})
