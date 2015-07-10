var invert = require('invert-obj');

function NoLegStreamCalculationPeriodBusinessCenters (noLegStreamCalculationPeriodBusinessCenters) {
  this.message = noLegStreamCalculationPeriodBusinessCenters;
}

NoLegStreamCalculationPeriodBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegStreamCalculationPeriodBusinessCenters.Tag = '40940';

NoLegStreamCalculationPeriodBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegStreamCalculationPeriodBusinessCenters;