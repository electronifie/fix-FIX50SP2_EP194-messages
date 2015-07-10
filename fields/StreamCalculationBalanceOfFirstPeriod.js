var invert = require('invert-obj');

function StreamCalculationBalanceOfFirstPeriod (streamCalculationBalanceOfFirstPeriod) {
  this.message = streamCalculationBalanceOfFirstPeriod;
}

StreamCalculationBalanceOfFirstPeriod.prototype.value = function () {
  return this.message;
};

StreamCalculationBalanceOfFirstPeriod.Tag = '41246';

StreamCalculationBalanceOfFirstPeriod.Type = 'BOOLEAN';

module.exports = StreamCalculationBalanceOfFirstPeriod;