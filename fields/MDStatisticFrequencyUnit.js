var invert = require('invert-obj');

function MDStatisticFrequencyUnit (mdstatisticFrequencyUnit) {
  this.message = mdstatisticFrequencyUnit;
}

MDStatisticFrequencyUnit.prototype.value = function () {
  return this.message;
};

MDStatisticFrequencyUnit.Tag = '2461';

MDStatisticFrequencyUnit.Type = 'INT';

module.exports = MDStatisticFrequencyUnit;