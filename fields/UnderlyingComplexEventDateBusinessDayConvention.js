var invert = require('invert-obj');

function UnderlyingComplexEventDateBusinessDayConvention (underlyingComplexEventDateBusinessDayConvention) {
  this.message = underlyingComplexEventDateBusinessDayConvention;
}

UnderlyingComplexEventDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDateBusinessDayConvention.Tag = '41744';

UnderlyingComplexEventDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingComplexEventDateBusinessDayConvention;