var invert = require('invert-obj');

function LegStreamCalculationPeriodBusinessDayConvention (legStreamCalculationPeriodBusinessDayConvention) {
  this.message = legStreamCalculationPeriodBusinessDayConvention;
}

LegStreamCalculationPeriodBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegStreamCalculationPeriodBusinessDayConvention.Tag = '40265';

LegStreamCalculationPeriodBusinessDayConvention.Type = 'INT';

module.exports = LegStreamCalculationPeriodBusinessDayConvention;