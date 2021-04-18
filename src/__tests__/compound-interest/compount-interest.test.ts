import { calculateCompoundInterest } from "../../compound-interest/compound-interest";
import { CompoundInterestParameters } from "../../compound-interest/models/compound-interest-parameters";
import { TimeFrequency } from "../../time-frequency/time-frequency";

test("CalculateCompoundInterest", () => {
  const compoundInterestParameters: CompoundInterestParameters = {
    initialAmount: 1000,
    frequentDeposit: 100,
    interestRate: 1,
    interestRateFrequency: TimeFrequency.monthly,
    investmentDuration: 10,
    investmentDurationFrequency: TimeFrequency.monthly,
  };

  console.log(calculateCompoundInterest(compoundInterestParameters));

  const totalAmount = calculateCompoundInterest(compoundInterestParameters)
    .totalValue;
  let totalAmountRounded = Math.round(totalAmount * 100) / 100;

  expect(totalAmountRounded).toBe(2150.84);
});
