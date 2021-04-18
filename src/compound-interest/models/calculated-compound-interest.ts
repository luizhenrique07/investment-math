import { MonthlyEarnings } from './monthly-earnings'

export interface CalculatedCompoundInterest {
  /**
   * Sum of investmentValue and totalEarnings
   */
  totalValue: number
  /**
   * Total value invested
   */
  investmentValue: number
  /**
   * Total investment earnings
   */
  totalEarnings: number

  /**
   * Detailed earnings and totalValue for each month of the investment duration
   */
  monthlyEarnings: MonthlyEarnings[]
}
