var invert = require('invert-obj');

function StreamCalculationPeriodBusinessDayConvention (streamCalculationPeriodBusinessDayConvention) {
  this.message = streamCalculationPeriodBusinessDayConvention;
}

StreamCalculationPeriodBusinessDayConvention.prototype.value = function () {
  return this.message;
};

StreamCalculationPeriodBusinessDayConvention.Tag = '40073';

StreamCalculationPeriodBusinessDayConvention.Type = 'INT';

module.exports = StreamCalculationPeriodBusinessDayConvention;