var invert = require('invert-obj');

function StreamCalculationPeriodDate (streamCalculationPeriodDate) {
  this.message = streamCalculationPeriodDate;
}

StreamCalculationPeriodDate.prototype.value = function () {
  return this.message;
};

StreamCalculationPeriodDate.Tag = '41242';

StreamCalculationPeriodDate.Type = 'LOCALMKTDATE';

module.exports = StreamCalculationPeriodDate;