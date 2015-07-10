var invert = require('invert-obj');

function NoStreamCalculationPeriodDates (noStreamCalculationPeriodDates) {
  this.message = noStreamCalculationPeriodDates;
}

NoStreamCalculationPeriodDates.prototype.value = function () {
  return this.message;
};

NoStreamCalculationPeriodDates.Tag = '41241';

NoStreamCalculationPeriodDates.Type = 'NUMINGROUP';

module.exports = NoStreamCalculationPeriodDates;