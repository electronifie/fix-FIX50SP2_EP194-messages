var invert = require('invert-obj');

function LegStreamCalculationPeriodDate (legStreamCalculationPeriodDate) {
  this.message = legStreamCalculationPeriodDate;
}

LegStreamCalculationPeriodDate.prototype.value = function () {
  return this.message;
};

LegStreamCalculationPeriodDate.Tag = '41639';

LegStreamCalculationPeriodDate.Type = 'LOCALMKTDATE';

module.exports = LegStreamCalculationPeriodDate;