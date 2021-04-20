# Investment Math

A node.js package to solve investment calculations.

## Functions

### Calculate Compound Interest

Calculate a compound interest of a investment with constant deposits.

Example:

```javascript
var investmentMath = require('investment-math')

investmentMath.calculateCompoundInterest({
  frequentDeposit: 1000,
  initialAmount: 10000,
  interestRate: 0.5,
  investmentDuration: 6,
  interestRateInterval: 'monthly',
  investmentDurationInterval: 'monthly',
})

// {
//   monthlyEarnings: [
//     {
//       monthEarnings: 49.99999999999818,
//       monthValue: 11049.999999999998,
//       month: 2
//     },
//     ...
//   ],
//   investmentValue: 16000,
//   totalEarnings: 379.2769726907718,
//   totalValue: 16379.276972690772
// }
```

### Calculate future value

Calculate value of a current asset at a future date based on an assumed rate of growth

```javascript
var investmentMath = require('investment-math')

let presentValue = 10000
let rate = 0.8
let time = 12
investmentMath.futureValue(presentValue, rate, time)

// 11003.386937161464
```

## Contributing

Feel free to add issues with bugs or ideas. Any pull requests are very welcome!
