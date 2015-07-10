var invert = require('invert-obj');

function StreamNotionalFrequencyUnit (streamNotionalFrequencyUnit) {
  this.message = streamNotionalFrequencyUnit;
}

StreamNotionalFrequencyUnit.prototype.value = function () {
  return this.message;
};

StreamNotionalFrequencyUnit.Tag = '41307';

StreamNotionalFrequencyUnit.Type = 'STRING';

module.exports = StreamNotionalFrequencyUnit;