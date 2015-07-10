var invert = require('invert-obj');

function UnderlyingDateRollConvention (underlyingDateRollConvention) {
  this.message = underlyingDateRollConvention;
}

UnderlyingDateRollConvention.prototype.value = function () {
  return this.message;
};

UnderlyingDateRollConvention.Tag = '40965';

UnderlyingDateRollConvention.Type = 'STRING';

module.exports = UnderlyingDateRollConvention;