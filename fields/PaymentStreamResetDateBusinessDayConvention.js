var invert = require('invert-obj');

function PaymentStreamResetDateBusinessDayConvention (paymentStreamResetDateBusinessDayConvention) {
  this.message = paymentStreamResetDateBusinessDayConvention;
}

PaymentStreamResetDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentStreamResetDateBusinessDayConvention.Tag = '40762';

PaymentStreamResetDateBusinessDayConvention.Type = 'INT';

module.exports = PaymentStreamResetDateBusinessDayConvention;