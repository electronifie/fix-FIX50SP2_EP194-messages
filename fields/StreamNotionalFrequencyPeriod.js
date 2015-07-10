var invert = require('invert-obj');

function StreamNotionalFrequencyPeriod (streamNotionalFrequencyPeriod) {
  this.message = streamNotionalFrequencyPeriod;
}

StreamNotionalFrequencyPeriod.prototype.value = function () {
  return this.message;
};

StreamNotionalFrequencyPeriod.Tag = '41306';

StreamNotionalFrequencyPeriod.Type = 'INT';

module.exports = StreamNotionalFrequencyPeriod;