var invert = require('invert-obj');

function NoStreamCalculationPeriodBusinessCenters (noStreamCalculationPeriodBusinessCenters) {
  this.message = noStreamCalculationPeriodBusinessCenters;
}

NoStreamCalculationPeriodBusinessCenters.prototype.value = function () {
  return this.message;
};

NoStreamCalculationPeriodBusinessCenters.Tag = '40958';

NoStreamCalculationPeriodBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoStreamCalculationPeriodBusinessCenters;