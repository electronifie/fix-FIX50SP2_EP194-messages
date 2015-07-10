var invert = require('invert-obj');

function UnderlyingStreamCalculationFrequencyPeriod (underlyingStreamCalculationFrequencyPeriod) {
  this.message = underlyingStreamCalculationFrequencyPeriod;
}

UnderlyingStreamCalculationFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationFrequencyPeriod.Tag = '40565';

UnderlyingStreamCalculationFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingStreamCalculationFrequencyPeriod;