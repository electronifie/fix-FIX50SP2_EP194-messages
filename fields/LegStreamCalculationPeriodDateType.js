var invert = require('invert-obj');

function LegStreamCalculationPeriodDateType (legStreamCalculationPeriodDateType) {
  this.message = legStreamCalculationPeriodDateType;
}

LegStreamCalculationPeriodDateType.prototype.value = function () {
  return this.message;
};

LegStreamCalculationPeriodDateType.Tag = '41640';

LegStreamCalculationPeriodDateType.Type = 'INT';

module.exports = LegStreamCalculationPeriodDateType;