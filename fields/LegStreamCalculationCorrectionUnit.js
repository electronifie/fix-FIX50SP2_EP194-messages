var invert = require('invert-obj');

function LegStreamCalculationCorrectionUnit (legStreamCalculationCorrectionUnit) {
  this.message = legStreamCalculationCorrectionUnit;
}

LegStreamCalculationCorrectionUnit.prototype.value = function () {
  return this.message;
};

LegStreamCalculationCorrectionUnit.Tag = '41645';

LegStreamCalculationCorrectionUnit.Type = 'STRING';

module.exports = LegStreamCalculationCorrectionUnit;