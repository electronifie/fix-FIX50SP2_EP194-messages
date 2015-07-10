var invert = require('invert-obj');

function NoLegStreamCalculationPeriodDates (noLegStreamCalculationPeriodDates) {
  this.message = noLegStreamCalculationPeriodDates;
}

NoLegStreamCalculationPeriodDates.prototype.value = function () {
  return this.message;
};

NoLegStreamCalculationPeriodDates.Tag = '41638';

NoLegStreamCalculationPeriodDates.Type = 'NUMINGROUP';

module.exports = NoLegStreamCalculationPeriodDates;