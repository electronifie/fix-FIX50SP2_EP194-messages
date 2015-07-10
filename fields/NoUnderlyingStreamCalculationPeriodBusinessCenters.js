var invert = require('invert-obj');

function NoUnderlyingStreamCalculationPeriodBusinessCenters (noUnderlyingStreamCalculationPeriodBusinessCenters) {
  this.message = noUnderlyingStreamCalculationPeriodBusinessCenters;
}

NoUnderlyingStreamCalculationPeriodBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamCalculationPeriodBusinessCenters.Tag = '40973';

NoUnderlyingStreamCalculationPeriodBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamCalculationPeriodBusinessCenters;