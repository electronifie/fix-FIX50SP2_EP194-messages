var invert = require('invert-obj');

function LegStreamNotionalFrequencyUnit (legStreamNotionalFrequencyUnit) {
  this.message = legStreamNotionalFrequencyUnit;
}

LegStreamNotionalFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegStreamNotionalFrequencyUnit.Tag = '41704';

LegStreamNotionalFrequencyUnit.Type = 'STRING';

module.exports = LegStreamNotionalFrequencyUnit;