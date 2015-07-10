var invert = require('invert-obj');

function UnderlyingStreamCalculationCorrectionUnit (underlyingStreamCalculationCorrectionUnit) {
  this.message = underlyingStreamCalculationCorrectionUnit;
}

UnderlyingStreamCalculationCorrectionUnit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationCorrectionUnit.Tag = '41961';

UnderlyingStreamCalculationCorrectionUnit.Type = 'STRING';

module.exports = UnderlyingStreamCalculationCorrectionUnit;