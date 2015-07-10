var invert = require('invert-obj');

function LegDateRollConvention (legDateRollConvention) {
  this.message = legDateRollConvention;
}

LegDateRollConvention.prototype.value = function () {
  return this.message;
};

LegDateRollConvention.Tag = '40926';

LegDateRollConvention.Type = 'STRING';

module.exports = LegDateRollConvention;