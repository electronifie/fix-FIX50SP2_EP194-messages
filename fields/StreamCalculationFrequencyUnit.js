var invert = require('invert-obj');

function StreamCalculationFrequencyUnit (streamCalculationFrequencyUnit) {
  this.message = streamCalculationFrequencyUnit;
}

StreamCalculationFrequencyUnit.prototype.value = function () {
  return this.message;
};

StreamCalculationFrequencyUnit.Tag = '40083';

StreamCalculationFrequencyUnit.Type = 'STRING';

module.exports = StreamCalculationFrequencyUnit;