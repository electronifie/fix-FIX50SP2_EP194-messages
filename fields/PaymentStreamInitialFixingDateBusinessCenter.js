var invert = require('invert-obj');

function PaymentStreamInitialFixingDateBusinessCenter (paymentStreamInitialFixingDateBusinessCenter) {
  this.message = paymentStreamInitialFixingDateBusinessCenter;
}

PaymentStreamInitialFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialFixingDateBusinessCenter.Tag = '40769';

PaymentStreamInitialFixingDateBusinessCenter.Type = 'STRING';

module.exports = PaymentStreamInitialFixingDateBusinessCenter;