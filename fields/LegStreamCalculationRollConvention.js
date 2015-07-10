var invert = require('invert-obj');

function LegStreamCalculationRollConvention (legStreamCalculationRollConvention) {
  this.message = legStreamCalculationRollConvention;
}

LegStreamCalculationRollConvention.prototype.value = function () {
  return this.message;
};

LegStreamCalculationRollConvention.Tag = '40276';

LegStreamCalculationRollConvention.Type = 'STRING';

module.exports = LegStreamCalculationRollConvention;