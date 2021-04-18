import { MonthlyEarnings } from './monthly-earnings'

export interface CalculatedCompoundInterest {
  totalValue: number
  investmentValue: number
  totalEarnings: number

  monthlyEarnings: MonthlyEarnings[]
}
