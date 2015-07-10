var invert = require('invert-obj');

function PaymentStreamResetDateBusinessCenter (paymentStreamResetDateBusinessCenter) {
  this.message = paymentStreamResetDateBusinessCenter;
}

PaymentStreamResetDateBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentStreamResetDateBusinessCenter.Tag = '40763';

PaymentStreamResetDateBusinessCenter.Type = 'STRING';

module.exports = PaymentStreamResetDateBusinessCenter;