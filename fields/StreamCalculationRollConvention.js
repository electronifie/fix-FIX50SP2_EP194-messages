var invert = require('invert-obj');

function StreamCalculationRollConvention (streamCalculationRollConvention) {
  this.message = streamCalculationRollConvention;
}

StreamCalculationRollConvention.prototype.value = function () {
  return this.message;
};

StreamCalculationRollConvention.Tag = '40084';

StreamCalculationRollConvention.Type = 'STRING';

module.exports = StreamCalculationRollConvention;