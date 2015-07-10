var invert = require('invert-obj');

function PaymentStreamFixingDateBusinessDayConvention (paymentStreamFixingDateBusinessDayConvention) {
  this.message = paymentStreamFixingDateBusinessDayConvention;
}

PaymentStreamFixingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentStreamFixingDateBusinessDayConvention.Tag = '40775';

PaymentStreamFixingDateBusinessDayConvention.Type = 'INT';

module.exports = PaymentStreamFixingDateBusinessDayConvention;