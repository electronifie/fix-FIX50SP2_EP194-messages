var invert = require('invert-obj');

function StreamCalculationCorrectionUnit (streamCalculationCorrectionUnit) {
  this.message = streamCalculationCorrectionUnit;
}

StreamCalculationCorrectionUnit.prototype.value = function () {
  return this.message;
};

StreamCalculationCorrectionUnit.Tag = '41248';

StreamCalculationCorrectionUnit.Type = 'STRING';

module.exports = StreamCalculationCorrectionUnit;