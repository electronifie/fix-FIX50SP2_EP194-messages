var invert = require('invert-obj');

function MDStatisticFrequencyPeriod (mdstatisticFrequencyPeriod) {
  this.message = mdstatisticFrequencyPeriod;
}

MDStatisticFrequencyPeriod.prototype.value = function () {
  return this.message;
};

MDStatisticFrequencyPeriod.Tag = '2460';

MDStatisticFrequencyPeriod.Type = 'INT';

module.exports = MDStatisticFrequencyPeriod;