var invert = require('invert-obj');

function UnderlyingStreamCalculationFrequencyUnit (underlyingStreamCalculationFrequencyUnit) {
  this.message = underlyingStreamCalculationFrequencyUnit;
}

UnderlyingStreamCalculationFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationFrequencyUnit.Tag = '40566';

UnderlyingStreamCalculationFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingStreamCalculationFrequencyUnit;