var invert = require('invert-obj');

function UnderlyingStreamCalculationBalanceOfFirstPeriod (underlyingStreamCalculationBalanceOfFirstPeriod) {
  this.message = underlyingStreamCalculationBalanceOfFirstPeriod;
}

UnderlyingStreamCalculationBalanceOfFirstPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationBalanceOfFirstPeriod.Tag = '41959';

UnderlyingStreamCalculationBalanceOfFirstPeriod.Type = 'BOOLEAN';

module.exports = UnderlyingStreamCalculationBalanceOfFirstPeriod;