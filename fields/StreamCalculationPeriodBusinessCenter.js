var invert = require('invert-obj');

function StreamCalculationPeriodBusinessCenter (streamCalculationPeriodBusinessCenter) {
  this.message = streamCalculationPeriodBusinessCenter;
}

StreamCalculationPeriodBusinessCenter.prototype.value = function () {
  return this.message;
};

StreamCalculationPeriodBusinessCenter.Tag = '40074';

StreamCalculationPeriodBusinessCenter.Type = 'STRING';

module.exports = StreamCalculationPeriodBusinessCenter;