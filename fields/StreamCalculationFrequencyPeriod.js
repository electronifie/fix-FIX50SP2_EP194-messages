var invert = require('invert-obj');

function StreamCalculationFrequencyPeriod (streamCalculationFrequencyPeriod) {
  this.message = streamCalculationFrequencyPeriod;
}

StreamCalculationFrequencyPeriod.prototype.value = function () {
  return this.message;
};

StreamCalculationFrequencyPeriod.Tag = '40082';

StreamCalculationFrequencyPeriod.Type = 'INT';

module.exports = StreamCalculationFrequencyPeriod;