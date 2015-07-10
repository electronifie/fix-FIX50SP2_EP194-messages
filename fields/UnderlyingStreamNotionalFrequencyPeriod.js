var invert = require('invert-obj');

function UnderlyingStreamNotionalFrequencyPeriod (underlyingStreamNotionalFrequencyPeriod) {
  this.message = underlyingStreamNotionalFrequencyPeriod;
}

UnderlyingStreamNotionalFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamNotionalFrequencyPeriod.Tag = '42019';

UnderlyingStreamNotionalFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingStreamNotionalFrequencyPeriod;