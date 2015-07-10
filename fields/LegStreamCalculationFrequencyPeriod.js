var invert = require('invert-obj');

function LegStreamCalculationFrequencyPeriod (legStreamCalculationFrequencyPeriod) {
  this.message = legStreamCalculationFrequencyPeriod;
}

LegStreamCalculationFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegStreamCalculationFrequencyPeriod.Tag = '40274';

LegStreamCalculationFrequencyPeriod.Type = 'INT';

module.exports = LegStreamCalculationFrequencyPeriod;