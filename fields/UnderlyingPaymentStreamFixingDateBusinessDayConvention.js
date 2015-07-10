var invert = require('invert-obj');

function UnderlyingPaymentStreamFixingDateBusinessDayConvention (underlyingPaymentStreamFixingDateBusinessDayConvention) {
  this.message = underlyingPaymentStreamFixingDateBusinessDayConvention;
}

UnderlyingPaymentStreamFixingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixingDateBusinessDayConvention.Tag = '40606';

UnderlyingPaymentStreamFixingDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingPaymentStreamFixingDateBusinessDayConvention;