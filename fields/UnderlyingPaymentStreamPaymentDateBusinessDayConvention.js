var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentDateBusinessDayConvention (underlyingPaymentStreamPaymentDateBusinessDayConvention) {
  this.message = underlyingPaymentStreamPaymentDateBusinessDayConvention;
}

UnderlyingPaymentStreamPaymentDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentDateBusinessDayConvention.Tag = '40581';

UnderlyingPaymentStreamPaymentDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingPaymentStreamPaymentDateBusinessDayConvention;