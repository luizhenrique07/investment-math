import { TimeInterval } from '../../models/time-interval/time-interval'

export interface CompoundInterestParameters {
  initialAmount: number
  /**
   * Percentage of how much te investment will
   */
  interestRate: number
  frequentDeposit: number

  investmentDuration: number

  interestRateInterval: TimeInterval | 'monthly' | 'annually'
  investmentDurationInterval: TimeInterval | 'monthly' | 'annually'
}
