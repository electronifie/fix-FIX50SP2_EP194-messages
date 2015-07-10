var invert = require('invert-obj');

function PaymentStreamFixingDateBusinessCenter (paymentStreamFixingDateBusinessCenter) {
  this.message = paymentStreamFixingDateBusinessCenter;
}

PaymentStreamFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentStreamFixingDateBusinessCenter.Tag = '40776';

PaymentStreamFixingDateBusinessCenter.Type = 'STRING';

module.exports = PaymentStreamFixingDateBusinessCenter;