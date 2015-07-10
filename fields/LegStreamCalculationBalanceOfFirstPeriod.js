var invert = require('invert-obj');

function LegStreamCalculationBalanceOfFirstPeriod (legStreamCalculationBalanceOfFirstPeriod) {
  this.message = legStreamCalculationBalanceOfFirstPeriod;
}

LegStreamCalculationBalanceOfFirstPeriod.prototype.value = function () {
  return this.message;
};

LegStreamCalculationBalanceOfFirstPeriod.Tag = '41643';

LegStreamCalculationBalanceOfFirstPeriod.Type = 'BOOLEAN';

module.exports = LegStreamCalculationBalanceOfFirstPeriod;