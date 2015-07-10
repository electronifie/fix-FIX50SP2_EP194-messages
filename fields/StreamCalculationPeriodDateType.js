var invert = require('invert-obj');

function StreamCalculationPeriodDateType (streamCalculationPeriodDateType) {
  this.message = streamCalculationPeriodDateType;
}

StreamCalculationPeriodDateType.prototype.value = function () {
  return this.message;
};

StreamCalculationPeriodDateType.Tag = '41243';

StreamCalculationPeriodDateType.Type = 'INT';

module.exports = StreamCalculationPeriodDateType;