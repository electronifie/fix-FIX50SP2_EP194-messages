var invert = require('invert-obj');

function LegStreamNotionalFrequencyPeriod (legStreamNotionalFrequencyPeriod) {
  this.message = legStreamNotionalFrequencyPeriod;
}

LegStreamNotionalFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegStreamNotionalFrequencyPeriod.Tag = '41703';

LegStreamNotionalFrequencyPeriod.Type = 'INT';

module.exports = LegStreamNotionalFrequencyPeriod;