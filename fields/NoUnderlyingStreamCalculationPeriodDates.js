var invert = require('invert-obj');

function NoUnderlyingStreamCalculationPeriodDates (noUnderlyingStreamCalculationPeriodDates) {
  this.message = noUnderlyingStreamCalculationPeriodDates;
}

NoUnderlyingStreamCalculationPeriodDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamCalculationPeriodDates.Tag = '41954';

NoUnderlyingStreamCalculationPeriodDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamCalculationPeriodDates;