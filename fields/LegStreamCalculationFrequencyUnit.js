var invert = require('invert-obj');

function LegStreamCalculationFrequencyUnit (legStreamCalculationFrequencyUnit) {
  this.message = legStreamCalculationFrequencyUnit;
}

LegStreamCalculationFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegStreamCalculationFrequencyUnit.Tag = '40275';

LegStreamCalculationFrequencyUnit.Type = 'STRING';

module.exports = LegStreamCalculationFrequencyUnit;