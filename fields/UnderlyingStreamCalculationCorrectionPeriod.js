var invert = require('invert-obj');

function UnderlyingStreamCalculationCorrectionPeriod (underlyingStreamCalculationCorrectionPeriod) {
  this.message = underlyingStreamCalculationCorrectionPeriod;
}

UnderlyingStreamCalculationCorrectionPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationCorrectionPeriod.Tag = '41960';

UnderlyingStreamCalculationCorrectionPeriod.Type = 'INT';

module.exports = UnderlyingStreamCalculationCorrectionPeriod;