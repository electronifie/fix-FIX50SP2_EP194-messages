var invert = require('invert-obj');

function UnderlyingStreamNotionalFrequencyUnit (underlyingStreamNotionalFrequencyUnit) {
  this.message = underlyingStreamNotionalFrequencyUnit;
}

UnderlyingStreamNotionalFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamNotionalFrequencyUnit.Tag = '42020';

UnderlyingStreamNotionalFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingStreamNotionalFrequencyUnit;