var invert = require('invert-obj');

function UnderlyingBusinessDayConvention (underlyingBusinessDayConvention) {
  this.message = underlyingBusinessDayConvention;
}

UnderlyingBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingBusinessDayConvention.Tag = '40964';

UnderlyingBusinessDayConvention.Type = 'STRING';

module.exports = UnderlyingBusinessDayConvention;