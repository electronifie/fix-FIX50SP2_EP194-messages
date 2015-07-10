var invert = require('invert-obj');

function PaymentStreamInitialFixingDateBusinessDayConvention (paymentStreamInitialFixingDateBusinessDayConvention) {
  this.message = paymentStreamInitialFixingDateBusinessDayConvention;
}

PaymentStreamInitialFixingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialFixingDateBusinessDayConvention.Tag = '40768';

PaymentStreamInitialFixingDateBusinessDayConvention.Type = 'INT';

module.exports = PaymentStreamInitialFixingDateBusinessDayConvention;