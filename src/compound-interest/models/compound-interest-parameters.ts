import { TimeInterval } from '../../models/time-interval/time-interval'

export interface CompoundInterestParameters {
  /**
   * initial invested capital
   */
  initialAmount: number
  /**
   * % rate of growth of the investment
   */
  interestRate: number
  /**
   * value of deposit make on each interval
   */
  frequentDeposit: number

  /**
   * Duration of the investment
   */
  investmentDuration: number

  /**
   * kind of the rate interval (Default: monthly)
   */
  interestRateInterval: TimeInterval | 'monthly' | 'annually'

  /**
   * kind of the duration (Default: monthly)
   */
  investmentDurationInterval: TimeInterval | 'monthly' | 'annually'
}
