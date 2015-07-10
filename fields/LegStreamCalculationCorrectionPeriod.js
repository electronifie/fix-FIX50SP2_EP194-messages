var invert = require('invert-obj');

function LegStreamCalculationCorrectionPeriod (legStreamCalculationCorrectionPeriod) {
  this.message = legStreamCalculationCorrectionPeriod;
}

LegStreamCalculationCorrectionPeriod.prototype.value = function () {
  return this.message;
};

LegStreamCalculationCorrectionPeriod.Tag = '41644';

LegStreamCalculationCorrectionPeriod.Type = 'INT';

module.exports = LegStreamCalculationCorrectionPeriod;