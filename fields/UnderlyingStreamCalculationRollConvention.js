var invert = require('invert-obj');

function UnderlyingStreamCalculationRollConvention (underlyingStreamCalculationRollConvention) {
  this.message = underlyingStreamCalculationRollConvention;
}

UnderlyingStreamCalculationRollConvention.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationRollConvention.Tag = '40567';

UnderlyingStreamCalculationRollConvention.Type = 'STRING';

module.exports = UnderlyingStreamCalculationRollConvention;