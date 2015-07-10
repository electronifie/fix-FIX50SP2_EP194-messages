var invert = require('invert-obj');

function LegStreamCalculationPeriodBusinessCenter (legStreamCalculationPeriodBusinessCenter) {
  this.message = legStreamCalculationPeriodBusinessCenter;
}

LegStreamCalculationPeriodBusinessCenter.prototype.value = function () {
  return this.message;
};

LegStreamCalculationPeriodBusinessCenter.Tag = '40266';

LegStreamCalculationPeriodBusinessCenter.Type = 'STRING';

module.exports = LegStreamCalculationPeriodBusinessCenter;