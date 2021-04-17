import { TimeFrequency } from "../../time-frequency/time-frequency";

export interface CompoundInterestParameters {
  initialAmount: number
  interestRate: number
  frequentDeposit: number


  investmentDuration: number

  interestRateFrequency: TimeFrequency | "monthly" | "annually";
  investmentDurationFrequency: TimeFrequency | "monthly" | "annually";
}
