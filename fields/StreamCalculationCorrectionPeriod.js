var invert = require('invert-obj');

function StreamCalculationCorrectionPeriod (streamCalculationCorrectionPeriod) {
  this.message = streamCalculationCorrectionPeriod;
}

StreamCalculationCorrectionPeriod.prototype.value = function () {
  return this.message;
};

StreamCalculationCorrectionPeriod.Tag = '41247';

StreamCalculationCorrectionPeriod.Type = 'INT';

module.exports = StreamCalculationCorrectionPeriod;